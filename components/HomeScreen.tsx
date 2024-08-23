// components/HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { CatBreed } from '../types/CatBreed';

const HomeScreen = ({ navigation }: any) => {
    const [breeds, setBreeds] = useState<CatBreed[]>([]);

    useEffect(() => {
        const fetchBreeds = async () => {
            const response = await fetch('https://api.thecatapi.com/v1/breeds?limit=10', {
                headers: {
                    'x-api-key': 'live_VAsgDzpM2cmIPLe8PYFUClLxZtqPuemLySWKCcmB4C7CV82mXRhxrl4jJSM6SDan' 
                }
            });
            const data = await response.json();
            setBreeds(data);
        };

        fetchBreeds();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={breeds}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('CatBreedDetail', { breed: item })}
                    >
                        <Text style={styles.item}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default HomeScreen;