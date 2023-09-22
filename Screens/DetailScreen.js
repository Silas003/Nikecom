import { View, Text, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import * as Icon from 'react-native-heroicons/outline'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
import { color, size } from '../constants'

const DetailScreen = () => {
  const {params:item}=useRoute()
 const [active,setActive]=useState(size[0])
 const [activeColor,setActiveColor]=useState(color[0])
  const navigation=useNavigation()
  //console.log(activeColor)
  return (
    <View className='flex-1'>
      
    <ScrollView  style={{paddingTop:hp(4),marginLeft:hp(2),marginRight:hp(1.2)}}>
       
      <View className='flex-row items-center justify-between space-y-1'>
          <TouchableOpacity className='rounded border-neutral-400 border'
          onPress={()=>(navigation.goBack())}>
          <Icon.ArrowLeftIcon size={hp(3)}  strokeWidth={2} stroke={'black'} />
        </TouchableOpacity>
        <Text className='font-black text-2xl '>{item.name}</Text>
        <View className='rounded border-neutral-400 border'>
          <Icon.ShoppingBagIcon size={hp(4)} stroke={'black'} />
        </View>
      </View>
      <View className='flex-row flex-1 pt-4 items-center justify-between'>
        <View className=''
        style={{width:hp(11),marginTop:hp(-24)}}
        >
          <Text className='items-center font-bold text-lg'>size</Text>
          {
            size.map((item,index)=>(
              <TouchableOpacity onPress={()=>(setActive(item))}

              key={index} className={`p-2 ${active===item ? 'border rounded-2xl' :'border-neutral-300 border rounded-2xl'} my-1 items-center`}>
                <Text>UK {item}</Text>
              </TouchableOpacity>
            ))
          }

        </View>
        <ImageBackground source={require('../assets/NIKE.png')} style={{width:hp(20),height:hp(70)}}
        className='items-center justify-center'>
          <Image source={item.image} style={{width:hp(50),height:hp(40)}}/>
        </ImageBackground>
        <View
        className=' items-center'
        style={{width:hp(11),marginTop:hp(-24)}}>
          <View className='border p-1 rounded border-neutral-300'>
          <Icon.BookmarkIcon stroke={'black'} />
          </View>
          <View className=' items-center flex-column justify-between '>
            <Text className='pt-24 font-bold'>Color</Text>
            {
              color.map((item,index)=>(
                <TouchableOpacity key={index} onPress={()=>(setActiveColor(item))}
                className={`my-2 border p-1 rounded ${active==item ? 'border-neutral-900' : 'border-neutral-300'} `}>
                  <View  className=' rounded-lg '
                  style={{width:hp(3),height:hp(3),backgroundColor:item}}>
                    
                  </View>
                </TouchableOpacity>

              ))
            }
          </View>

        </View>
      </View>
      <Text className='font-bold text-base'>${item.price}</Text>
      <Text className='text-red-700'>10% OFF</Text>
      <View className='items-center justify-center '>
        <Text className="font-bold">Swipe Down to add to box</Text>
        <ImageBackground source={require('../assets/box.png')} style={{width:hp(25),height:hp(25)}} className='items-center'>
              <View className='bg-black items-center rounded-full'
              style={{width:hp(5),height:hp(10)}}>
                <Icon.ShoppingBagIcon stroke={'white'} />
              <Icon.ChevronDownIcon stroke={'gray'}/>
              <Icon.ChevronDoubleDownIcon stroke={'white'} style={{marginTop:-10}}/>

              </View>
              
        </ImageBackground>
        
      </View>
    </ScrollView>
    </View>
  )
}

export default DetailScreen