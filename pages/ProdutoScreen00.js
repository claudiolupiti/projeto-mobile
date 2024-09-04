import React, {useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
 
export default function ProdutoScreen({route}) {

    const {username, password} = route.params || {};
    
    const handleBotaoVoltarHome = () => {
        navigation.navigate ('Home', {
        })         
    };   
   
    useEffect(() => {
        console.log('Tela Produto Carregada');
    }, [username, password]);

    return (        

        <View style={styles.container}>
       
            <Text>Seja Bem Vindo TELA de Produtos</Text>

            <TouchableOpacity style={styles.button} onPress={handleBotaoVoltarHome}>
                    <Text style={styles.textButton}>Voltar-Home</Text>
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
    button: { 
        justifyContent: 'center',        
        alignItems: 'center',
        backgroundColor: 'red',
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