import React from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SuccessAlert = () => {
  const navigation = useNavigation();

  const handleAccept = () => {
    navigation.navigate('Login'); // Reemplaza 'Login' con la pantalla de login real
  };

  return (
    Alert.alert(
      'Éxito',
      'El pasajero se ha agregado correctamente.',
      [
        {
          text: 'Aceptar',
          onPress: handleAccept,
        },
      ],
      { cancelable: false }
    )
  );
};

export default SuccessAlert;
