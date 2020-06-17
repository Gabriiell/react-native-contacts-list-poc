import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddContactScreen from './AddContactScreen';
import ContactListScreen from './ContactListScreen';
import ContactDetailScreen from './ContactDetailScreen';
import Contact from '../../contacts';
import { store } from '../../state/store';
import { Unsubscribe } from 'redux';

export type ContactNavigatorParams = {
  ContactList: undefined;
  AddContact: undefined;
  ContactDetail: { contact: Contact };
};

const Stack = createStackNavigator<ContactNavigatorParams>();

export default class ContactScreen extends React.Component<{}, { contacts: Contact[] }> {
  private unsubscribe: Unsubscribe | undefined;

  state = {
    contacts: store.getState().contacts,
  };

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        contacts: store.getState().contacts
      });
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  render() {
    return (
      <Stack.Navigator initialRouteName='ContactList'>
        <Stack.Screen name='ContactList' options={{ headerTitle: 'Contacts' }}>
          {(props) => <ContactListScreen {...props} contacts={this.state.contacts} />}
        </Stack.Screen>
        <Stack.Screen name='AddContact' component={AddContactScreen} options={{ headerTitle: 'New Contact' }} />
        <Stack.Screen
          name='ContactDetail'
          component={ContactDetailScreen}
          options={{ headerTitle: 'Contact Detail' }}
        />
      </Stack.Navigator>
    );
  }
}
