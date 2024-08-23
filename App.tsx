// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import CatBreedDetailScreen from './components/CatBreedDetailScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
       
            <Stack.Navigator initialRouteName="HomeScreen">
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="CatBreedDetailScreen" component={CatBreedDetailScreen} />
            </Stack.Navigator>
    );
}