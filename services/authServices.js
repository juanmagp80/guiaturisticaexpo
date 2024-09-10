import * as SecureStore from 'expo-secure-store';

export const storeToken = async (token) => {
    await SecureStore.setItemAsync('authToken', token);
};

export const getToken = async () => {
    return await SecureStore.getItemAsync('authToken');
};
