import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function TextLink({ text, onPress }) {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.textLink}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textLink: {
        fontSize: 15,
        color: "red",
        fontWeight:"500",
    },
    button: {
        alignItems: "center",
        padding: 10,
        marginTop:20
    },

})