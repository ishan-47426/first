import { StyleSheet,Button, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from 'react-navigation-stack'
import { router } from 'expo-router'


const index = () => {
  return (
    <View>
      <Text
      >index</Text>
      <TouchableOpacity onPress={()=>router.push('/home')}>
        <Text>move</Text>
      </TouchableOpacity>
      
    </View>
  )
}


const styles = StyleSheet.create({})

export default index;