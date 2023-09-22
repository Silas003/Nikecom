import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Product } from '../constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import * as Icon from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'


const Products = () => {
    const navigation=useNavigation()
  return (
    <View className='pt-6'>
        <FlatList
        numColumns={2}
        data={Product}
        contentContainerStyle={{alignItems:'center',justifyContent:'space-between'}}
        renderItem={({item,index})=>(
            <TouchableOpacity key={index}
            className=' bg-neutral-200 space-x-10 mx-4 mb-10  rounded-3xl '
            style={{width:hp(23),height:hp(35)}}
            onPress={()=>(navigation.navigate('Detail',item))}>
                <Image source={item.image} style={{width:hp(20),height:hp(25)}}/>
                <Text className='font-bold ' style={{fontSize:hp(2.3),marginRight:11}}>{item.name}</Text>
                <View className='flex-row items-center justify-between mr-2'>
                    <Text className='font-semibold ' style={{fontSize:hp(2.0),marginRight:11}}>${item.price}</Text>
                    <View className=' bg-white p-2 rounded-lg'>
                        <Icon.ArrowRightIcon size={15} stroke={'black'} strokeWidth={3}/>
                    </View>
                </View>
                

            </TouchableOpacity>

        )}
        />
      
    </View>
  )
}

export default Products