import React from 'react';
import { View, StatusBar, ImageBackground } from 'react-native';
import styles from './styles';

const Splash = ({ navigation }) => {

  setInterval(()=>{
    navigation.navigate('Home')
  }, 2000)

  return (
    <View>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ImageBackground
        source={require('../../assets/background.jpeg')}
        style={styles.img}
      />
    </View>
  );
};

export default Splash;
