import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import theme from './src/global/theme';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
      name="Home" 
      component={Home} 
      options={{headerShown:false}} 
      />
      <Stack.Screen 
      name="Login" 
      component={Login} 
      options={{headerShown:false}} 
        // headerTitleAlign: 'center',
        // headerStyle: {backgroundColor:theme.colors.secundary},
        // headerTintColor: theme.colors.primary,
        // headerTitleStyle: {color:"black"},
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
};
export default App;
