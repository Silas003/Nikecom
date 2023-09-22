import { View, Text,StyleSheet,Image } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Swiper from 'react-native-swiper'
const Slider = () => {
    const [no,setno]=useState([1,2,3,4,5])

  return (
    <Swiper 
    style={styles.wrapper}
    //autoplay
    dotColor='red'
   // dot={<CustomDot />}
   // activeDot={<CustomActiveDot />}
    
    >
    {
        no.map((item,index)=>(
            <View style={{height:hp(20.4),paddingTop:10}} className='space-x-3 pt-6 rounded-3xl bg-neutral-300' key={index}>
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
            <Image source={require('../assets/Green.png')} style={{justifyContent:'center',marginTop:hp(-8)}}/>
        </View>

      </View>
    
        ))
    }
  </Swiper>

  )
}


const CustomDot = () => (
  <View style={{backgroundColor:'rgba(0,0,0,.2)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginBottom: 3,}} />
);

const CustomActiveDot = () => (
  <View style={{backgroundColor: '#007aff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginBottom: 3,}} />
);
const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })

export default Slider