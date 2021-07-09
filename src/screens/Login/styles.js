import {StyleSheet} from 'react-native';
import  theme  from '../../global/theme';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 20
      //backgroundColor:theme.colors.background
    },
    containerInterno: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    containerInternoFundo: {
      flex: 1,
      width: '100%',
      justifyContent: 'flex-end'
    },
    entradaTexto: {
      minWidth: '100%',
      borderColor: '#777',
      borderWidth: 1,
      borderRadius: 20,
      paddingHorizontal: 20,
    },
    texto: {
      fontFamily: theme.fonts.semibold,
      fontSize:20,
      color: theme.colors.primary,
      textDecorationLine: 'underline',
    },
  });

