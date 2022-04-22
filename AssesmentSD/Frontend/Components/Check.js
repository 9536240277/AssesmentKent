import React, {useState} from 'react'
import CheckBox from "expo-checkbox";
import { StyleSheet, Text, View } from 'react-native'
import Button from './Button';
export default function Check({ title,onPress }) {
    const [agree, setAgree] = useState(false);

    return (
        <>
        <View style={styles.wrapper}>
            <CheckBox
                value={agree}
                onValueChange={() => setAgree(!agree)}
                color={agree ? "red" : "black"}
            />
            <Text style={styles.text}>
                I have read and agreed with the terms and conditions.
            </Text>
        </View>
        <Button title={title} disabled={!agree} onPress={onPress} backgroundColor={agree ? "red" : "black"}></Button>
        </>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        paddingVertical: 10,
        marginRight:10,
        marginLeft:10,
        marginTop:20,
        marginBottom:10
    },
    text: {
        marginLeft: 10,
        fontSize:16,
        color:"black",
        lineHeight:14,
        
    },

})