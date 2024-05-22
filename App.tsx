import { StatusBar, Text } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { AnimationContextProvider } from './src/context/AnimationContext';
import { Routes } from './src/routes';


export default function App() {

  const [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (!fontsLoaded) {
    return (
      <Text>loading;......</Text>
    );
  }

  return (
    <AnimationContextProvider>

      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

     <Routes/>

    </AnimationContextProvider>
  );
}
