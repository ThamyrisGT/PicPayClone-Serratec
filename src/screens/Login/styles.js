
import {StyleSheet} from 'react-native';
import  theme  from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    img:{
        width:'100%', 
        height:'110%',
        backgroundColor:theme.colors.background
    },
    containerText:{
        flex:1,
        justifyContent:'center',
        marginHorizontal: 30,
        marginTop:270
    
    },
    text:{
        fontSize: 28,
        textAlign: "left",
        fontFamily:theme.fonts.bold,
        color:theme.colors.secundary
    }
});