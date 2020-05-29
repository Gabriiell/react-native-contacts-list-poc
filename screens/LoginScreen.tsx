import React, { FunctionComponent } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

const LoginScreen: FunctionComponent<{ onAuth: () => void }> = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>Coming soon...</Text>
    <Button title='Login' onPress={() => props.onAuth()} />
  </View>
);

export default LoginScreen;
