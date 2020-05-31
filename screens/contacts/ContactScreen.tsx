import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddContactScreen, { ContactSubmit } from './AddContactScreen';
import ContactListScreen from './ContactListScreen';
import ContactDetailScreen from './ContactDetailScreen';
import Contact from '../../contacts';
import { fetchContacts } from '../../api';

export type ContactNavigatorParams = {
  ContactList: undefined;
  AddContact: undefined;
  ContactDetail: { contact: Contact };
};

const Stack = createStackNavigator<ContactNavigatorParams>();

export default class ContactScreen extends React.Component<{}, { contacts: Contact[] }> {
  state = {
    contacts: [],
  };

  componentDidMount() {
    this.getContacts();
  }

  async getContacts() {
    const contacts = await fetchContacts();
    this.setState({ contacts });
  }

  addContact = (contact: ContactSubmit) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { ...contact, id: prevState.contacts.length + 1 }],
    }));
  };

  render() {
    return (
      <Stack.Navigator initialRouteName='ContactList'>
        <Stack.Screen name='ContactList' options={{ headerTitle: 'Contacts' }}>
          {(props) => <ContactListScreen {...props} contacts={this.state.contacts} />}
        </Stack.Screen>
        <Stack.Screen name='AddContact' options={{ headerTitle: 'New Contact' }}>
          {(props) => <AddContactScreen {...props} onSubmit={this.addContact} />}
        </Stack.Screen>
        <Stack.Screen
          name='ContactDetail'
          component={ContactDetailScreen}
          options={{ headerTitle: 'Contact Detail' }}
        />
      </Stack.Navigator>
    );
  }
}
