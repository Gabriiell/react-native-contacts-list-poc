import React, { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, connect, ConnectedProps } from 'react-redux'
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import { store } from './state/store';
import { RootState } from './state/reducer';

const mapStateToProps = ({ user }: RootState) => ({
  isAuthenticated: !!(user && user.token && !user.loginError)
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const App: FunctionComponent<PropsFromRedux> = (props) => (
  <NavigationContainer>
    {!props.isAuthenticated && <LoginScreen />}
    {props.isAuthenticated && <MainScreen />}
  </NavigationContainer>
);

const ConnectedApp = connector(App);

const StoreProvider: FunctionComponent = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);

export default StoreProvider;