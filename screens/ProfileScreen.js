// screens/ProfileScreen.js

import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { getProfile, updateProfile } from '../utils/api';

export default function ProfileScreen() {
    const [profile, setProfile] = useState({ name: '', email: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await getProfile();
                setProfile(data);
            } catch (err) {
                setError('Error al obtener perfil: ' + err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const handleUpdate = async () => {
        try {
            await updateProfile(profile);
            alert('Perfil actualizado');
        } catch (err) {
            alert('Error al actualizar perfil: ' + err.message);
        }
    };

    if (loading) return <Text>Cargando...</Text>;
    if (error) return <Text>{error}</Text>;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil</Text>
            <TextInput
                style={styles.input}
                value={profile.name}
                onChangeText={(text) => setProfile({ ...profile, name: text })}
                placeholder="Nombre"
            />
            <TextInput
                style={styles.input}
                value={profile.email}
                onChangeText={(text) => setProfile({ ...profile, email: text })}
                placeholder="Correo Electrónico"
            />
            <Button title="Actualizar Perfil" onPress={handleUpdate} />
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
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});
