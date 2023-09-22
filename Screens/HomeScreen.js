import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-heroicons/outline'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import Bottom from '../Components/Bottom'
const HomeScreen = () => {
  
  return (
    <View className='flex-1'>
      
    <ScrollView  style={{paddingTop:hp(5),marginLeft:hp(2),marginRight:hp(1.2)}}>
       
      <View className='flex-row items-center justify-between space-y-3 mb-5'>
        <View className='flex-row items-center'>
          <View className='rounded border-neutral-400 border'>
          <Icon.Bars3BottomLeftIcon size={hp(4)} strokeWidth={2} stroke={'black'} />
          </View>
          <Image source={require('../assets/NI.png')} style={{width:hp(7),height:hp(5),marginLeft:5}}/>
        </View>
        <View className='rounded border-neutral-400 border'>
          <Icon.ShoppingBagIcon size={hp(4)} stroke={'black'} />
        </View>
        
      </View>
      <View style={{height:hp(20.4),paddingTop:10}} className='space-x-3 pt-6 rounded-3xl bg-neutral-200' >
        <View className='flex-row items-center justify-between'>
            <View  style={{justifyContent:'center',marginTop:hp(-7)}}>
              <View className=' flex-row items-center'>
              <Text className="font-semibold"
                style={{fontSize:hp(5),marginLeft:hp(3)}}>20% </Text>
                <Text className="font-semibold"style={{fontSize:hp(3)}}>Discount</Text>
              </View>
                  <Text  style={{marginLeft:hp(3)}} className='font-semibold'>on your first purchase</Text>
                  <View className='rounded-full items-center mt-8 bg-black p-2 ml-11' style={{width:hp(12)}}>
                    <Text className='text-white'>Shop Now</Text>
                  </View>
            </View>
            <Image source={require('../assets/Green.png')} style={{justifyContent:'center',marginTop:hp(-8),width:hp(30),}}/>
        </View>
      </View>
      {/* categories */}
      <View >
      <Categories/>
      
      </View>
      {/* Products */}
      
      <View>
      
        <Products/>
      </View>
      {/* Bottom */}
      
       
    
    </ScrollView>
    <Bottom/>
    </View>
  )
}

export default HomeScreen