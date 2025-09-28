import React from 'react'
import { View, Text } from 'react-native'
import IconButton from './ui/iconButton'
import CustomText from './ui/CustomText'

const MoreDetails = () => {
  return (
    <View className='h-1/2 w-screen bg-zinc-900 rounded-t-3xl p-6 flex flex-col justify-start gap-4'>
      <CustomText variant='subtitle' value='Skill'/> 
      <View className="flex-row justify-center items-center gap-4">
        <IconButton icon="airplane" pulsar={() => console.log("Instagram")} color="black"></IconButton>
        <IconButton icon="accessibility" pulsar={() => console.log("Whatsapp")} color="orange"></IconButton>
        <IconButton icon="american-football" pulsar={() => console.log("Facebook")} color="red"></IconButton>
        <IconButton icon="apps" pulsar={() => console.log("Linkedin")} color="green"></IconButton>
      </View>
      
    </View>
  )
}

export default MoreDetails