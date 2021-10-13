import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Header = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.Font1}>Welcome to Stockify!</Text>
        
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: "aliceblue",
        // width: 1000
        // borderRadius: 60 / 2,
    },
    Font1: {
        color: "darkorchid",
        textAlign: "center",
        backgroundColor: "aquamarine",
        fontSize: 20,
        padding: 15,
    },
    item: {
      backgroundColor: 'black',
      color: "white",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 25,
    },
  })
  
  export default Header;