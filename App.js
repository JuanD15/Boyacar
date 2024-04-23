import * as Font from 'expo-font';
import RootNavigator from './navigation/main';
import { useEffect, useState, T } from 'react';
import { Text } from 'react-native';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Inter_300Light': require('./assets/fonts/Inter-Light.ttf'),
        'Inter_400Regular': require('./assets/fonts/Inter-Regular.ttf'),
      });

      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <Text>Cargando...</Text>;
  }
  return <RootNavigator />;
}



