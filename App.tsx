import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import { store } from './state/store';

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
      <Provider store={store}>
        <NavigationContainer>
          {!this.state.isAuthenticated && <LoginScreen onAuth={this.authenticate} />}
          {this.state.isAuthenticated && <MainScreen />}
        </NavigationContainer>
      </Provider>
    );
  }
}
