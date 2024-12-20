import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

const DetailsScreen = () => {
  return (
    <View >
      <Text>Details Screen</Text>
      <Text>
        This is the Details page. You can use this page to display specific information.
      </Text>
      <TouchableOpacity
        onPress={() => router.push('/home')}
      >
        <Text >Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsScreen;