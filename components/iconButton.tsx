import { View, Text } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

interface IconButtonProps{
    pulsar: ()=>void;//metodo
    icon: string;//cadena
    enlace?: string;//cadena
    color: string;//cadena
}

const IconButton = ({icon, pulsar, color, enlace}:IconButtonProps) => {
  return (
    <Pressable onPress={pulsar} className='bg-white rounded-xl p-2 border-b-4 border-r-2 border-gray-500'>
        <Ionicons name={icon as any} size={32} color={color} />
    </Pressable>
  )
}

export default IconButton