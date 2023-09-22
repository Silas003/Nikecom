import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {Slides} from '../constants/index'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'


const Categories = () => {
    const [active,setActive]=useState("Running")
    
  
  return (
    <View>
      <FlatList
      showsHorizontalScrollIndicator={false}
      data={Slides}
      horizontal
      contentContainerStyle={{alignItems:'center',justifyContent:'center',paddingTop:5,padding:10,paddingTop:hp(3)}}
      renderItem={({item})=>(
        <TouchableOpacity className={`  mr-10 ${active===item ? ` bg-black rounded-full p-1` : ''} items-center`}
        style={{width:active===item ? active.length*16 : 'auto',}}
        onPress={()=>{setActive(item)}}>
            <Text className={`font-bold text-xl ${active===item ? 'text-white' : 'text-neutral-400'}`}>
                {item}
            </Text>
        </TouchableOpacity>
      )}/>
    </View>
  )
}

export default Categories