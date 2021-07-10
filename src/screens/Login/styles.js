import {StyleSheet} from 'react-native';
import  theme  from '../../global/theme';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 20,
      backgroundColor:theme.colors.secundary
    },
    containerInterno: {
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
    containerInternoFundo: {
      flex: 1,
      width: '100%',
      justifyContent: 'flex-end'
    },
    entradaTexto: {
      minWidth: '100%',
      borderColor: 'black',
      borderWidth: 1.5,
      borderRadius: 25,
      paddingHorizontal: 20,
      paddingVertical:10,
      fontSize:20
    },
    texto: {
      fontFamily: theme.fonts.semibold,
      fontSize:20,
      color: theme.colors.primary,
      textDecorationLine: 'underline',
    },
  });

