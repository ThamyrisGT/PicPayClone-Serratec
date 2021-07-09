
import {StyleSheet} from 'react-native';
import  theme  from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        width: '100%',
        backgroundColor:theme.colors.primary,
        borderColor:theme.colors.primary,
        borderWidth: 3,
        borderRadius:15,
    },
    text:{
        fontSize: 23,
        fontFamily:theme.fonts.regular,
        textAlign: "center",
        color:theme.colors.secundary
    }
});
