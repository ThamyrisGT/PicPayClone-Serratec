import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
//import { styles } from '../login/styles';

const Login = () => {
    return (
      <View>
        <ImageBackground
          source={require('./src/assets/background.jpg')}
          resizeMode="cover"
          style={{width:'100%',height:'100%'}}
          >
          <Text> Com o PicPay seus pagamentos são mais simples e seguros.</Text>
        </ImageBackground>
        {/* <Button
        title:Login
        onPress={()=> navigator.navigate('Home')}/> */}
      </View>
    );
  };
  
  export default Login;