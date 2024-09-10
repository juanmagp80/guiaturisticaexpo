import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <LinearGradient
            colors={['#4facfe', '#00f2fe']}
            style={styles.container}
        >
            <Text style={styles.title}>Guía Turística</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Recommendations')}
            >
                <Text style={styles.buttonText}>Obtener Recomendaciones</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Map')}
            >
                <Text style={styles.buttonText}>Ver Mapa</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 40,
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        elevation: 5,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#4facfe',
    },
});
