import React from "react";
import { TextInput, StyleSheet} from "react-native";

export default function Input({placeholder, value, onChangeText, secureTextEntry}) {
    return (
        <TextInput
            style={style.Input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}                       
        />

    );
}

const style = StyleSheet.create ({
    Input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius:10,
    }
})