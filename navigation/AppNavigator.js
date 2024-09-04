import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen   from '../pages/LoginScreen';
import HomeScreen    from '../pages/HomeScreen';
import ProdutoScreen from '../pages/ProdutoScreen';
import PerfilScreen  from '../pages/PerfilScreen';
import ContatoScreen from "../pages/ContatoScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name="Login"   component={LoginScreen} />
                <Stack.Screen name="Home"    component={HomeScreen} />
                <Stack.Screen name="Produto" component={ProdutoScreen} />
                <Stack.Screen name="Perfil"  component={PerfilScreen} />
                <Stack.Screen name="Contato" component={ContatoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}