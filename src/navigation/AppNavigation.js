import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from '../screens/Home';
import Favorites from '../screens/Favorites';
import Cart from '../screens/Cart';
import AccountStack from './AccountStack';
import AwesomeIcons from 'react-native-vector-icons/FontAwesome';
import { formStyles } from '../styles';

const Tab = createMaterialBottomTabNavigator();

export default function AppNavigation (){
  

    function setIcon(route, routeStatus){
        console.log("route: ",route);
        console.log("routeStatus: ",routeStatus);
        let iconName = "";

        switch (route.name) {
            case "home":  iconName = "home"; break;
            case "favorites":  iconName = "heart";  break;
            case "cart": iconName = "shopping-cart"; break;
            case "account": iconName = "bars"; break;
            default: break;
        }
        
        return <AwesomeIcons name={iconName} style={formStyles.iconTabs} />;
    }


    return (
        <NavigationContainer>
            <Tab.Navigator 
                barStyle={formStyles.navigation} 
                activeColor="#fff"
                screenOptions={({ route }) => ({
                    tabBarIcon: (routeStatus) =>{
                        return setIcon(route, routeStatus);
                    }
                })} 
            > 
                <Tab.Screen  name='home' options={{ title: "Inicio" }} component={Home} /> 
                <Tab.Screen name='favorites' options={{ title: "Favoritos" }} component={Favorites} /> 
                <Tab.Screen name='cart' options={{ title: "Carrito" }} component={Cart} /> 
                <Tab.Screen name='account' options={{ title: "Mi cuenta" }} component={AccountStack} />    
            </Tab.Navigator>
        </NavigationContainer>
    )
  
}
