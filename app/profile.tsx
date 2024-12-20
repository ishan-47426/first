import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { router } from 'expo-router';

const profile = () => {
  return(
          <View>
              <Text>profile
              </Text>
              <TouchableOpacity onPress={()=>router.back()}>
                  <Text>Go Back</Text>
              </TouchableOpacity>
          </View>
    );
}

export default profile;
