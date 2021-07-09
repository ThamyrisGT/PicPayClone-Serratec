import React from 'react';
import {View, Text, ImageBackground,StatusBar} from 'react-native';
import { styles } from './styles';
import Button from '../../components/Button';
import ButtonSecundary from '../../components/ButtonSecundary';

const Login = () => {
    return (
      <View>
        <StatusBar 
        barStyle="light-content"                
        backgroundColor="transparent"
        translucent
        />
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
           <Button
           title='Cadastrar'
           activeOpacity={0.7}
           />
           <ButtonSecundary
           title='Entrar'
           activeOpacity={false}
           />
          </View>
        </ImageBackground>
      </View>
    );
  };
  
  export default Login;