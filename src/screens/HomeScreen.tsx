import React from 'react'
import { ImageBackground, Text, View } from 'react-native';
import styles from '../styles/global'

const HomeScreen = () => {

    return (
        <View style={{flex:1}}>
            <ImageBackground 
                source={require('../../assets/images/bg.png')}
                style={styles.imageBackground}
                  resizeMode="cover"
            >
                <Text style={styles.text}>Welcome to Home Screen</Text>
            </ImageBackground>
        </View>
    );
}


export default HomeScreen