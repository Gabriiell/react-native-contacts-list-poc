import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';

export default class App extends React.Component<{}, { isAuthenticated: boolean; }> {
  state = {
    isAuthenticated: false
  };

  authenticate = () => {
    this.setState({
      isAuthenticated: true,
    });
  };

  render() {
    return (
      <NavigationContainer>
        {!this.state.isAuthenticated && <LoginScreen onAuth={this.authenticate} />}
        {this.state.isAuthenticated && <MainScreen />}
      </NavigationContainer>
    );
  }
}
