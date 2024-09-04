import React, {useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({route, navigation}) {
               
    const {username, password} = route.params || {};

    const produto = () => {
        navigation.navigate ('Produto', {            
        });
    } 
    const perfil = () => {
        navigation.navigate ('Perfil', {            
        });
    } 

    useEffect(() => {
        console.log('Tela Home Carregada');
    }, [username, password]);

    return (        

        <View style={styles.container}>

            <Text>Seja Bem Vindo Home</Text>
            {username && <Text>Usuario Logado: {username}</Text>}

            <Image source={require('../assets/imghome.png')} style={styles.logo}/>

            <TouchableOpacity style={styles.button} onPress={produto}>
                    <Text style={styles.textButton}>Produto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={perfil}>
                    <Text style={styles.textButton}>Perfil</Text>
            </TouchableOpacity>

        </View>
    );    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 30,
        marginTop: 30,
        borderRadius: 30,
    },
    button: { 
        justifyContent: 'center',        
        alignItems: 'center',
        backgroundColor: 'green',
        borderRadius: 10,
        padding: 10,
        height: 50,
        width: '70%',
        marginTop: 20,
    },
    textButton: {
        fontSize: 22,
        color: 'white'
    },

});