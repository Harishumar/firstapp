import React from 'react';
import { Text, StyleSheet } from 'react-native';

const FirstComponents = () => {
    return <Text styles = {styles.textStyle}>This is First Component !!</Text>; 
};

const styles = StyleSheet.create({
    textStyle : {
        fontSize : 20
    }
});

export default FirstComponents;