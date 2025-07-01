import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const router = useRouter();

export default function HomeScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require('../../assets/images/PadelPro.png')} style={styles.logo} resizeMode="contain" />
            <Text style={styles.slogan}>
                Donde la pasión por el pádel se vive en cada punto.
            </Text>
            <TouchableOpacity style={styles.button}
            onPress={() => router.push('/(tabs)/register')}
            >
                <Text style={styles.buttonText}>Iniciar registro</Text>
            </TouchableOpacity>
            <View style={styles.infoSection}>
                <Text style={styles.infoTitle}>Clubs de Pádel</Text>
                <Text style={styles.infoText}>
                    Descubre y reserva canchas en los mejores clubs de pádel de tu ciudad. 
                    Explora horarios, disponibilidad y servicios exclusivos para jugadores de todos los niveles.
                </Text>
                <Text style={styles.infoText}>
                    ¡Reserva tu cancha fácilmente y vive la experiencia PadelPro!
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#fff',
    },
    logo: {
        width: 180,
        height: 180,
        marginTop: 40,
        marginBottom: 24,
    },
    slogan: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 32,
        color: '#1a1a1a',
    },
    button: {
        backgroundColor: '#16a085',
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 30,
        marginBottom: 40,
        elevation: 2,
        overflow: 'hidden',

    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },
    infoSection: {
        width: '100%',
        backgroundColor: '#f7f7f7',
        borderRadius: 16,
        padding: 20,
        marginTop: 10,
        alignItems: 'center',
    },
    infoTitle: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10,
        color: '#16a085',
    },
    infoText: {
        fontSize: 15,
        color: '#444',
        textAlign: 'center',
        marginBottom: 8,
    },

});