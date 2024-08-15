import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import styles from '../styles/global';
import stylesHome from '../styles/home'

const HomeScreen = () => {

    return (
        <View style={styles.container}>
            {/* Background Image */}
            <ImageBackground 
                source={require('../../assets/images/bg.png')}
                style={styles.imageBackground}
            />

            {/* Text Overlay */}
            <View style={styles.textContainer}>
                <Text style={stylesHome.text}>Welcome to Home Screen</Text>
                <Text style={styles.text}>Enjoy your stay!</Text>
            </View>
        </View>
    );
}

export default HomeScreen;
