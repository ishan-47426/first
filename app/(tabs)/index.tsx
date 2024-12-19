import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
    const [count, setCount] = useState(0);

    const handlePress = () => {
        setCount(count + 1);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Button Press Count: {count}</Text>
            <Button title="Press Me" onPress={handlePress} />
            <TouchableOpacity style={styles.touchable} onPress={handlePress}>
                <Text style={styles.touchableText}>Custom Touchable</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eef',
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
    },
    touchable: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#6b5b95',
        borderRadius: 5,
    },
    touchableText: {
        color: '#fff',
        fontSize: 16,
    },
});
