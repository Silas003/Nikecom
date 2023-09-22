import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { Bott } from '../constants'
import * as Icon from 'react-native-heroicons/outline'
const Bottom = () => {
    const [active,setActive]=useState(Bott[0])
  return (
    <View className=" absolute w-full z-100 p-5  bottom-0     bg-white">
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={Bott}
      renderItem={({item,index})=>(
        <TouchableOpacity className='items-center justify-between mx-9'
        onPress={()=>(setActive(item))}>
            {item}
        </TouchableOpacity>
      )}/>
    </View>
  )
}

export default Bottom