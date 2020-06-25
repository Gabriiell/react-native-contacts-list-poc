import React, { FunctionComponent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Text, Button, View, StyleSheet } from 'react-native';
import { login } from '../state/actions';

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

const connector = connect(null, { login });
type PropsFromRedux = ConnectedProps<typeof connector>

const LoginScreen: FunctionComponent<PropsFromRedux> = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>Coming soon...</Text>
    <Button title='Login' onPress={() => props.login('username', 'password')} />
  </View>
);

export default connector(LoginScreen);
