import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LoginScreen({ navigation }) {
    return (
        <ImageBackground
            source={require('../assets/guia.jpg')} // Reemplaza con la ruta correcta de tu imagen
            style={styles.background}
            resizeMode="contain" // Asegura que la imagen cubra toda la pantalla

        >
            <View style={styles.overlay}>
                <Text style={styles.title}>Bienvenido a Guía Turística</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={styles.buttonText}>Registrarse</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',  // Se asegura de que ocupe el ancho completo
        height: '100%', // Se asegura de que ocupe la altura completa
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Oscurece ligeramente la imagen de fondo
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 50,
        textShadowColor: 'rgba(0, 0, 0, 0.7)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#ffffff',
        paddingVertical: 15,
        paddingHorizontal: 60,
        borderRadius: 50,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        elevation: 5,
        borderWidth: 2,
        borderColor: '#00c6ff',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#0072ff',
    },
});
