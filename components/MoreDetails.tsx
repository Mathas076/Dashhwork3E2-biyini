import React from 'react'
import { View, Text } from 'react-native'
import IconButton from './ui/iconButton'
import CustomText from './ui/CustomText'

const MoreDetails = () => {
  return (
    <View className='h-1/2 w-screen bg-zinc-900 rounded-t-3xl p-6 flex flex-col justify-start gap-4'>
      <CustomText variant='subtitle' value='Skill'/> 
      <View className="flex-row justify-center items-center gap-4">
        <IconButton icon="footsteps" pulsar={() => console.log("pisadas")} color="black"></IconButton>
        <IconButton icon="battery-half" pulsar={() => console.log("bateria")} color="red"></IconButton>
        <IconButton icon="calculator" pulsar={() => console.log("calculadora")} color="gray"></IconButton>
        <IconButton icon="chatbox" pulsar={() => console.log("chatbox")} color="green"></IconButton>
      </View>
      <CustomText variant='subtitle' value='Contacto'/> 
      <View className="flex-row items-center gap-2">  
        <IconButton icon='mail' pulsar={()=>console.log('mail')} color='black'></IconButton>
        <CustomText variant='normal' value='mathiaszambrano@gmail.com'/>
      </View>
      <View className="flex-row items-center gap-2">  
        <IconButton icon='call' pulsar={()=>console.log('call')} color='black'></IconButton>
        <CustomText variant='normal' value='mathiaszambrano@gmail.com'/>
      </View>
    </View>
  )
}

export default MoreDetails