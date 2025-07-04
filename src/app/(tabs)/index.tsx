import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const router = useRouter();

export default function HomeScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <Image style={styles.logo}
                    source={require('../../assets/images/padelpro.png')}
                />
            </View>
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
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#fff',
    },
    logo: {
        width: 280,
        height: 280,
        marginTop: -50,
        marginBottom: 24,
    },
    slogan: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 150,
        color: '#1a1a1a',
    },
    button: {
        backgroundColor: '#5DD536',
        alignItems: 'center',
        width:  250,
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 8,
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
        width: '70%',
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
        color: '#5DD536',
    },
    infoText: {
        fontSize: 15,
        color: '#444',
        textAlign: 'center',
        marginBottom: 8,
    },

});