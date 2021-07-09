
import {StyleSheet} from 'react-native';
import  theme  from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    img:{
        width:'100%', 
        height:'110%',
        backgroundColor:'#BBBCB7'
    },
    containerText:{
        flex:1,
        justifyContent:'center',
        marginHorizontal: 30,
    
    },
    text:{
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "left",
        color:theme.colors.secundary
    }
});