
import {StyleSheet} from 'react-native';
import  theme  from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        width: '80%',
        backgroundColor:theme.colors.primary,
        borderColor:theme.colors.primary,
        borderWidth: 3,
        borderRadius:15,
    },
    text:{
        fontSize: 23,
        fontFamily:theme.fonts.light,
        textAlign: "center",
        color:theme.colors.secundary
    }
});