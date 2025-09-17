import React from 'react'
import { Image, Text, View } from 'react-native'
import "../global.css";

const ProfileDetails = () => {
  return (
    <View className='flex-1 justify-center items-center bg-withe w-screen h-screen'>
    <Image className='rounded-full size-[<200>]'source={require('../assets/images/icon.png')} />
    
    </View>
  )
}

export default ProfileDetails
