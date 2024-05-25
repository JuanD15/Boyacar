import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from 'expo-secure-store'
import 'react-native-url-polyfill/auto'
import { createClient } from "@supabase/supabase-js";

const ExpoSecureAdapter = {
    getItem: (key) => {
        return SecureStore.getItemAsync(key);
    },
    setItem: (key, value) => {
        SecureStore.setItemAsync(key, value);
    },
    removeItem: (key) => {
        SecureStore.deleteItemAsync(key);
    }
}

/**
 * Inicialización de constantes y variables necesarias para la conexión
 */
const supabaseUrl = "https://qdwfpdwadbykxwymotjx.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkd2ZwZHdhZGJ5a3h3eW1vdGp4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNDQxMzQ0OSwiZXhwIjoyMDI5OTg5NDQ5fQ.j-1Mlcjp8MdeyAMtik4PSwaOwUj4pFJlrBYBgFA-syQ";
/**
 * Creación de cliente con los datos inicializados
 */
export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        detectSessionInUrl: false,
        storage: ExpoSecureAdapter
    }
}
);