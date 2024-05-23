import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../constants/colors';  // Ajusta la importación según la estructura de tu proyecto

const StarRating = ({ rating }) => {
    // Crea un array de 5 elementos y usa map para renderizar estrellas llenas o vacías
    const stars = Array.from({ length: 5 }, (_, index) => {
        return (
            <FontAwesome
                key={index}
                name={index < rating ? "star" : "star-o"}
                size={14}
                color={colors.PRIMARY_COLOR}
                style={styles.star}
            />
        );
    });

    return <View style={styles.starContainer}>{stars}</View>;
};

const styles = StyleSheet.create({
    starContainer: {
        flexDirection: 'row',
    },
    star: {
        marginHorizontal: 1,
    },
});

export default StarRating;
