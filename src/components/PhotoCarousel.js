import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const UserPhotos = () => {
    //Cambiar por la url de las fotos
    const [photoUrls, setPhotoUrls] = useState([
        'imagen',
        'imagen',
        'imagen',
    ]);

    const handleAddPhoto = () => {
        // Lógica para agregar una nueva foto 
        // setPhotoUrls([...photoUrls, nuevaUrl]);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.photoContainer}>
                <Text style={styles.placeholderText}>+</Text>
            </TouchableOpacity>
            {photoUrls.map((url, index) => (
                <TouchableOpacity key={index} style={styles.photoContainer}>
                    {url === 'imagen' ? (
                        <Text style={styles.placeholderText}>+</Text>
                    ) : (
                        <Image source={{ uri: url }} style={styles.photo} />
                    )}
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    photoContainer: {
        width: 80,
        height: 80,
        backgroundColor: '#f0f0f0',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    placeholderText: {
        fontSize: 24,
        color: '#888',
    },
    photo: {
        width: 80,
        height: 80,
    },
});

export default UserPhotos;
