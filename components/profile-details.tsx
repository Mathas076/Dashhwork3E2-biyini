import React from 'react';
import { Image, Text, View } from 'react-native';
import "../global.css";
import IconButton from "./ui/iconButton";
import CustomText from "./ui/CustomText";

const ProfileDetails = () => {
  return (
  <View className="flex justify-center items-center h-1/2">
    <Image 
      source={require('../assets/images/profile-icon.png')} 
      className="max-h-36 max-w-36 rounded-full"
    />
    <CustomText variant="title" value="Mathias Zambrano"/>
    <CustomText variant="subtitle" value="Discipulo de gogigagagagigo"/>
    <View className='flex-row  gap-4'>
    <IconButton icon='logo-instagram' pulsar={()=>console.log('instagram')} color="magenta"></IconButton>
    <IconButton icon='logo-facebook' pulsar={()=>console.log('facebook')} color="blue"></IconButton>
    <IconButton icon='logo-twitter' pulsar={()=>console.log('twitter')} color="lightblue"></IconButton>
    <IconButton icon='logo-whatsapp' pulsar={()=>console.log('whatsapp')} color="lime"></IconButton>
    </View>

  </View>
  )
}

export default ProfileDetails
