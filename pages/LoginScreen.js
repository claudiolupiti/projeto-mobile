import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image} from "react-native";
import Input from "../components/input";

export default function LoginScreen ({ navigation }) {
    const [username, setUsername] = useState ('User-Claudio-Lupi');
    const [password, setPassword] = useState ('senai123');

    const handleLogin = () => {
        if (username === 'User-Claudio-Lupi' && password === 'senai123') {
            navigation.navigate ('Home', {
                username: username,
                password: password,
            });

        } else {
            alert ('Usuario ou Senha incorretos, preencha novamente !');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.BackgroundContainer}>

                <Image source={require('../assets/imglogin.png')} style={styles.logo}/>

                <View style={styles.InputContainer}>
                    <Input placeholder={"Usuario"} value={username} onChangeText={setUsername} />
                    <Input placeholder={"Senha"}   value={password} onChangeText={setPassword} secureTextEntry/>               
                </View>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    ); 
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',        
        padding: 16,
        BackgroundColor: '#f0f0f0',
    },
    BackgroundContainer: {
        width: '100%',
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,        
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        alignItems: 'center',        
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20
    },
    InputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    button: { 
        justifyContent: 'center',        
        alignItems: 'center',
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
        height: 45,
        width: '100%',
    },
    textButton: {
        fontSize: 18,
        color: 'white',
    },

});