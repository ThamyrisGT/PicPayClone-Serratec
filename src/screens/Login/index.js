import React,{useState} from 'react';
import {Text, View, TextInput, StatusBar} from 'react-native';
import Button from './../../components/Button';
import {styles} from './styles';
import Header from '../../components/header';

const Login = ({navigation}) => {
  
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} translucent />
      <Header
        text={'Voltar'}
        screen={'Login'}
        voltar={() => navigation.navigate('Home')}
      />
      <View style={styles.containerInterno}>
        <View style={styles.containerInterno}>
          <TextInput
            style={styles.entradaTexto}
            keyboardType="email-address"
            placeholder="E-mail, nome de usuário ou telefone"
            returnKeyType={'next'}
            onSubmitEditing={() => {
              input2.focus();
            }}
            blurOnSubmit={false}
          />
          <TextInput
            style={styles.entradaTexto}
            textContentType="password"
            placeholder="Senha"
            secureTextEntry={true}
            returnKeyType={'next'}
            ref={input => {
              input2 = input;
            }}
          />
        </View>

        <View style={styles.containerInterno}>
          <Text style={styles.texto}>Esqueci minha senha</Text>
        </View>
      </View>
      <View style={styles.containerInternoFundo}>
        <Button title="Entrar" activeOpacity={0.7} />
      </View>
    </View>
  );
};

export default Login;
