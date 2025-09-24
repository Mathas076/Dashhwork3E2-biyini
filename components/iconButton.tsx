import { View, Text } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

interface IconButtonProps{
    pulsar: ()=>void;//metodo
    icon: string;//cadena
    enlace?: string;//cadena
}

const IconButton = ({icon, pulsar, enlace}:IconButtonProps) => {
  return (
    <Pressable onPress={pulsar}>
        <Ionicons name={icon as any} size={32} color="black" />
    </Pressable>
  )
}

export default IconButton