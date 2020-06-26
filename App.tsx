import React, { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, connect, ConnectedProps } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import { store, persistor } from './state/store';
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
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedApp />
    </PersistGate>
  </Provider>
);

export default StoreProvider;