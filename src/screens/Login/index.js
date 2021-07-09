import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import Button from './../../components/Button';
import {styles} from './styles';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerInterno}>
        <View style={styles.containerInterno}>
          <TextInput
            style={styles.entradaTexto}
            keyboardType="email-address"
            placeholder="E-mail, nome de usuário ou telefone"
          />
          <TextInput
            style={styles.entradaTexto}
            textContentType="password"
            placeholder="Senha"
          />
        </View>
        <View style={styles.containerInterno}>
          <Text 
            style={styles.texto}>Esqueci Minha Senha
        </Text>
        </View>
      </View>
      <View style={styles.containerInternoFundo}>
        <Button 
            title="Entrar" 
            activeOpacity={0.7}
        />
      </View>
    </View>
  );
};

export default Login;
