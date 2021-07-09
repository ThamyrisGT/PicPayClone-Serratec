import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';

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
      options={{
        title:'Login',
        headerTitleAlign: 'center',
      }} 
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
};
export default App;
