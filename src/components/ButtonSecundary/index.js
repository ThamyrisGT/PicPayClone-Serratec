import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import {styles} from '../ButtonSecundary/styles';


const ButtonSecundary=( props) =>{
    return(
        <View style={styles.container}> 
            <TouchableOpacity
            style={styles.button}
            onPress={props.entrar}
            >
                <Text style={styles.text}> {props.title} </Text>
            </TouchableOpacity>
        </View>
    )
}


export default ButtonSecundary;