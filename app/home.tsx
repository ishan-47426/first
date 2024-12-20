import React from "react"
import { View ,Text, TouchableOpacity} from "react-native"
import { router } from "expo-router";


const home=()=>{
    return(
        <View>
            <Text>
                home
            </Text>
            <TouchableOpacity onPress={()=>router.push('/profile')}>
                <Text>Go to profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>router.back()}>
                <Text>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
};

export default home;