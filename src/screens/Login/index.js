import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import { styles } from './styles';

const Login = () => {
    return (
      <View>
        <ImageBackground
          source={require('../../assets/background.png')}
          style={styles.img}
          >
            <View style={styles.containerText}>
          <Text style={styles.text}>
            Com o PicPay seus {` `} pagamentos
            são mais{` `}
             simples e seguros.
           </Text>
          </View>
        </ImageBackground>
        {/* <Button
        title:Login
        onPress={()=> navigator.navigate('Home')}/> */}
      </View>
    );
  };
  
  export default Login;