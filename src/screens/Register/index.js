import React, {useState} from 'react';
import {Text, View, TextInput, StatusBar} from 'react-native';
import Button from './../../components/Button';
import {styles} from './styles';
import Header from '../../components/header';

const Cadastro = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} translucent />
      <Header text={'Voltar'} voltar={() => navigation.navigate('Home')} />
      <View style={styles.containerInterno}>
        <View style={styles.boxInfo}>
          <Text style={styles.titulo}>Sua identificação</Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
            }}>
            Não se preocupe! Seus dados estão seguros conosco e são necessários
            para confiar sua identidade{' '}
          </Text>
          <Text style={styles.texto}>Porque Precisamos do seu CPF?</Text>
        </View>
        <View style={styles.containerInterno}>
          <View
            style={{
              width: '100%',
              height: '70%',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <TextInput
              style={styles.entradaTexto}
              keyboardType="number-pad"
              placeholder="CPF (somente números)"
              returnKeyType={'next'}
              onSubmitEditing={() => {
                input2.focus();
              }}
              blurOnSubmit={false}
            />
            <TextInput
              style={styles.entradaTexto}
              keyboardType="numbers-and-punctuation"
              placeholder="Data de nascimento (dd/mm/aaaa)"
              returnKeyType={'next'}
              ref={input => {
                input2 = input;
              }}
            />
          </View>
          <View>
            <Text
              style={{
                paddingHorizontal: '5%',
                textAlign: 'center',
                fontSize: 16,
                marginTop: 15,
              }}>
              Ao criar sua conta, você concorda com nossos
              <Text style={styles.texto}> Termo de Serviço</Text>
              <Text> e </Text>
              <Text style={styles.texto}>Politica de Privacidade</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.containerInternoFundo}>
        <Button title="Avançar" activeOpacity={0.7} />
        <View style={styles.containerInternoFundoInterno}>
          <Text style={styles.texto}>Já sou cadastrado</Text>
        </View>
      </View>
    </View>
  );
};

export default Cadastro;
