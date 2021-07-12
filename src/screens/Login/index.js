import React from 'react';
import {Text, View, TextInput, StatusBar} from 'react-native';
import Button from './../../components/Button';
import {styles} from './styles';
import Header from '../../components/header';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} translucent />
      <Header
        text={'Voltar'}
        screen={'Login'}
        voltar={() => navigation.navigate('Home')}
      />
      <View style={styles.containerIntern}>
        <View style={styles.containerIntern}>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="E-mail, nome de usuário ou telefone"
            returnKeyType={'next'}
            onSubmitEditing={() => {
              input2.focus();
            }}
            blurOnSubmit={false}
          />
          <TextInput
            style={styles.input}
            textContentType="password"
            placeholder="Senha"
            secureTextEntry={true}
            returnKeyType={'next'}
            ref={input => {
              input2 = input;
            }}
          />
        </View>
        <View style={styles.containerIntern}>
          <Text style={styles.text}>Esqueci minha senha</Text>
        </View>
      </View>
      <View style={styles.containerInternFooter}>
        <Button title="Entrar" activeOpacity={0.7} />
      </View>
    </View>
  );
};

export default Login;
