import React from 'react';
import {Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
return <Text styles = {styles.textStyle}>This is Home Screen.</Text>
};

const styles = StyleSheet.create({
    textStyle : {
        fontSize : 20
    }
});

export default HomeScreen;