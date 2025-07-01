import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Simulación de función de registro y envío de verificación
async function registerUser(email: string, password: string) {
    // Aquí deberías integrar tu backend o servicio de autenticación (por ejemplo, Firebase)
    // Este es un ejemplo simulado:
    if (!email.includes('@')) throw new Error('Correo inválido');
    // Simula envío de correo de verificación
    return true;
    
}

function SocialLoginButtons({ onGooglePress, onIcloudPress }: { onGooglePress: () => void;  onIcloudPress: () => void }) {
    return (
        <View style={{ flexDirection: 'column', justifyContent: 'center', margin: 10 }}>
            <TouchableOpacity
                style={{
                    margin: 20,
                    backgroundColor: '#16a085',
                    borderRadius: 15,
                    padding: 12,
                    marginHorizontal: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2,
                }}
                onPress={onGooglePress}
            >
                
                <FontAwesome name="google" size={28} color="#fff" padding="5" />
                <Text style={{ color: '#fff', fontSize: 16, marginBottom: 4 }}>Registrarse con Google</Text>
            </TouchableOpacity>
             <TouchableOpacity
                style={{
                    margin: 20,
                    backgroundColor: '#16a085',
                    borderRadius: 15,
                    padding: 12,
                    marginHorizontal: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    gap: 2,
                }}
                onPress={onIcloudPress}
            >
                <FontAwesome name="apple" size={28} color="#fff" padding="5" />
                <Text style={{ color: '#fff', fontSize: 16, marginBottom: 4 }}>Registrarse con Iphone</Text>
                
            </TouchableOpacity>
        </View>
    );
}

export default function RegisterScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        setLoading(true);
        try {
            await registerUser(email, password);
            Alert.alert(
                'Registro exitoso',
                'Se ha enviado un correo de verificación. Por favor, revisa tu bandeja de entrada.'
            );
            setEmail('');
            setPassword('');
        } catch (error: any) {
            Alert.alert('Error', error.message || 'No se pudo registrar el usuario');
        } finally {
            setLoading(false);
        }
    };

    return (
        
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/PadelPro.png')}
                style={{ width: 120, height: 120, alignSelf: 'center', marginBottom: 32 }}
                resizeMode="contain"
            />

            <Text style={styles.title}>Registro de Usuario</Text>
            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity
                style={styles.registerButton}
                onPress={() => router.push('../index') }
            >
                <Text style={styles.ButtonText}>Registrarse</Text>
            </TouchableOpacity>

            <SocialLoginButtons
                onGooglePress={() => Alert.alert('Google Login', 'Funcionalidad de Google Login no implementada')}
                onIcloudPress={() => Alert.alert('Microsoft Login', 'Funcionalidad de Iphone Login no implementada')}
                >             
            </SocialLoginButtons>
        </View>
         
   
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 24,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        fontSize: 16,
    },
    registerButton: {
        backgroundColor: '#16a085',
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 15,
        marginTop: 20,
        marginBottom: 40,
        elevation: 2,
        overflow: 'hidden',
    },
    ButtonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    }
});