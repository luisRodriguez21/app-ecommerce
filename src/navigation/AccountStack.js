import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import Account from '../screens/Account';

const Stack = createStackNavigator();

export default function AccountStack () {
  
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='account'
                component={Account}
                options={{ title: "Cuenta", headerShown: false }}
             /> 
        </Stack.Navigator>
    )

}
