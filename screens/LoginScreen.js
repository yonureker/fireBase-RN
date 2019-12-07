import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const LoginScreen = props => {
  return (
    <View style={styles.container}>
      <Button title="Sign In With Google" onPress={() => alert('Button Pressed')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default LoginScreen;