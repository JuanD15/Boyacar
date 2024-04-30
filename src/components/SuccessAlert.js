// SuccessAlert.js
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function useSuccessAlert() {
  const navigation = useNavigation();

  const handleAccept = () => {
    navigation.navigate('Login');
  };

  return () => {
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
    );
  };
};
