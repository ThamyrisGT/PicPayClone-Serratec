import { StyleSheet } from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: theme.colors.secundary,
  },
  containerInterno: {
    flex: 1,
    alignItems: 'center',
 
  },
  containerInternoFundo: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',

  },
  containerInternoFundoInterno: {
    justifyContent: 'space-around',
    marginVertical: '2%',
    paddingVertical: '5%'
  },
  entradaTexto: {
    minWidth: '100%',
    borderColor: theme.colors.titleblack,
    borderWidth: 1.5,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize:20
  },
  boxInfo: {
    height: '40%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom:20
  },
  texto: {
    fontFamily: theme.fonts.semibold,
    color: theme.colors.primary,
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontSize:15,
    
  },
  titulo: {
    fontSize: 25,
    fontWeight: '300'
  },
});
