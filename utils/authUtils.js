import * as SecureStore from 'expo-secure-store';

export const storeToken = async (token) => {
    await SecureStore.setItemAsync('authToken', token);
};

export const getToken = async () => {
    return await SecureStore.getItemAsync('authToken');
};
export const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync('authToken');
        console.log('Token eliminado correctamente');
    } catch (error) {
        console.error('Error al eliminar el token:', error);
    }
};
