// components/CatBreedDetailScreen.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { CatBreed } from '../types/CatBreed';

const CatBreedDetailScreen = ({ route }: any) => {
    const { breed } = route.params as { breed: CatBreed };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{breed.name}</Text>
            <Image source={{ uri: breed.image.url }} style={styles.image} />
            <Text>Origin: {breed.origin}</Text>
            <Text>Life Span: {breed.lifespan}</Text>
            <Text>Description: {breed.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginVertical: 10,
    },
});

export default CatBreedDetailScreen;