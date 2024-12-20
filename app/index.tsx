import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import {createDrawerNavigator} from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

const HomeScreen = () => (
  <View >
    <Text>Home Screen</Text>
    <TouchableOpacity onPress={() => router.push('/details')}>
      <Text>Go to Details</Text>
    </TouchableOpacity>
  </View>
);

const DetailsScreen = () => (
  <View>
    <Text>Details Screen</Text>
    <TouchableOpacity onPress={() => router.push('/')}>
      <Text>Go to Index</Text>
    </TouchableOpacity>
  </View>
);


// Custom Drawer Content
const CustomDrawerContent = (props: any) => (
  <View>
    <View>
      <Text>👤</Text>
      <Text>User Name</Text>
    </View>
  </View>
);
export default function Index() {
  return (
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator>
  );
}