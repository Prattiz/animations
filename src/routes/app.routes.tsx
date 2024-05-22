import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../Screen/Home';
import { AnimationPage } from '../Screen/AnimationPage';


const Stack = createNativeStackNavigator();


export function AppRouter(){
  return(
  <Stack.Navigator screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}>

      <Stack.Screen
          name="Home"
          component={Home}
      />

      <Stack.Screen
          name="AnimationPage"
          component={AnimationPage}
      />



  </Stack.Navigator>
  )
}