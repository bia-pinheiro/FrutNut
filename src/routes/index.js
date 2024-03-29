import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Main from '../pages/Main';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
    <Stack.Navigator>
        <Stack.Screen
        name='Welcome'
        component={Welcome}
        options={{ headerShown: false }}
        />

    <Stack.Screen
        name='SignIn'
        component={SignIn}
        />

    <Stack.Screen
        name='Main'
        component={Main}
        />

    </Stack.Navigator>
    )
}