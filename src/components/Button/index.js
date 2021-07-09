import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import styles from '../Button/styles';


const Button=() =>{
    return(
        <View> 
            <TouchableOpacity
            style={styles.button}
            >
                <Text> Cadastrar </Text>
            </TouchableOpacity>
        </View>
    )
}