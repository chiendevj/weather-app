import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        position: 'absolute',
        width: width * 1.5, 
        height: height * 1.5,
        top: -200, 
        left: -150,
        zIndex: 0, 
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1, 
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
});
