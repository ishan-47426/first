import { StyleSheet,Button, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'


const index = () => {
  return (
    <View>
      <Text
      >index</Text>
      <TouchableOpacity onPress={()=>router.push('/home')}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({})

export default index;