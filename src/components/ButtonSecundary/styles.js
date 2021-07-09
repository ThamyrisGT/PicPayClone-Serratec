
import {StyleSheet} from 'react-native';
import  theme  from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        marginTop: 12,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        width: '100%',
        borderColor:theme.colors.secundary,
        borderWidth: 3,
        borderRadius:15,
    },
    text:{
        fontFamily: theme.fonts.regular,
        fontSize: 23,
        textAlign: "center",
        color:theme.colors.secundary
    }
});
