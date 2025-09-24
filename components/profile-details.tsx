import React from 'react'
import { Image, Text, View } from 'react-native'
import "../global.css";
import IconButton from "./iconButton";

const ProfileDetails = () => {
  return (
  <View className="flex justify-center items-center">
    <Image 
      source={require('../assets/images/icon.png')} 
      className="max-h-36 max-w-36 rounded-full"
    />
    <Text className="text-2xl font-bold">Mathias Zambrano</Text>
    <Text className="text-xl font-bold text-gray-400">Discipulo de gogigagagigo</Text>
    <View className='flex-row  gap-4'>
    <IconButton icon='logo-instagram' pulsar={()=>console.log('instagram')} color="magenta"></IconButton>
    <IconButton icon='logo-facebook' pulsar={()=>console.log('facebook')} color="blue"></IconButton>
    <IconButton icon='logo-twitter' pulsar={()=>console.log('twitter')} color="lightblue"></IconButton>
    <IconButton icon='logo-whatsapp' pulsar={()=>console.log('linkedin')} color="lime"></IconButton>
    </View>

  </View>
  )
}

export default ProfileDetails
