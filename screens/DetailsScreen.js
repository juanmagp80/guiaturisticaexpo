import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DetailsScreen({ route }) {
    const { place } = route.params; // Suponiendo que pasas información del lugar desde otra pantalla

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{place.name}</Text>
            <Text>{place.description}</Text>
            {/* Puedes agregar más detalles aquí */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});