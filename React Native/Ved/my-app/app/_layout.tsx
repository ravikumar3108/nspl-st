
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View , Text, SafeAreaView } from 'react-native';
import Home from "../components/mycompo/Home"
import About from "../components/mycompo/About"
import Profile from "../components/mycompo/Profile"

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
     <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="About" component={About}/>
      <Stack.Screen name="Profile" component={Profile}/>
    </Stack.Navigator>
  );
}
