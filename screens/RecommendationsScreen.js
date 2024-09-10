import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function RecommendationsScreen() {
    const [days, setDays] = useState('');
    const [recommendations, setRecommendations] = useState('');

    const getRecommendations = async () => {
        try {
            const response = await fetch('https://your-api-endpoint.com/get-recommendations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ days }),
            });
            const data = await response.json();
            setRecommendations(data.recommendations);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Número de días en la ciudad"
                keyboardType="numeric"
                value={days}
                onChangeText={setDays}
            />
            <Button title="Obtener Recomendaciones" onPress={getRecommendations} />
            {recommendations ? <Text>{recommendations}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
});
