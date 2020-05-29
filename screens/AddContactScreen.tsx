import React from 'react';
import { TextInput, Button, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ContactNavigatorParams } from './ContactScreen';

const styles = StyleSheet.create({
  input: {
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
  },
});

export interface ContactSubmit {
  name: string;
  phone: string;
}

type Props = {
  onSubmit: (contact: ContactSubmit) => void;
  navigation: StackNavigationProp<ContactNavigatorParams, 'AddContact'>;
}

type State = {
  name: string;
  phone: string;
  isValidForm: boolean;
}

export default class AddContactScreen extends React.Component<Props, State> {
  state: State = {
    name: '',
    phone: '',
    isValidForm: false,
  };

  onNameChange = (name: string) => {
    this.setState({ name }, this.validateForm);
  };

  onPhoneChange = (phone: string) => {
    this.setState({ phone }, this.validateForm);
  };

  validateForm = () =>
    this.setState({
      isValidForm: !!(this.state.phone && this.state.name),
    });

  submit = () => {
    this.props.onSubmit({ name: this.state.name, phone: this.state.phone });
    this.props.navigation.goBack();
  };

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={{ flex: 1, justifyContent: 'center' }}>
        <TextInput placeholder='Name' style={styles.input} value={this.state.name} onChangeText={this.onNameChange} />
        <TextInput
          placeholder='Phone'
          keyboardType='phone-pad'
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.onPhoneChange}
        />
        <Button title='Submit' disabled={!this.state.isValidForm} onPress={this.submit} />
      </KeyboardAvoidingView>
    );
  }
}
