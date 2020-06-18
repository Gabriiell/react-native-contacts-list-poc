import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddContactScreen from './AddContactScreen';
import ContactListScreen from './ContactListScreen';
import ContactDetailScreen from './ContactDetailScreen';
import Contact from '../../contacts';

export type ContactNavigatorParams = {
  ContactList: undefined;
  AddContact: undefined;
  ContactDetail: { contact: Contact };
};

const Stack = createStackNavigator<ContactNavigatorParams>();

const ContactScreen: FunctionComponent = () => (
  <Stack.Navigator initialRouteName='ContactList'>
    <Stack.Screen name='ContactList' component={ContactListScreen} options={{ headerTitle: 'Contacts' }} />
    <Stack.Screen name='AddContact' component={AddContactScreen} options={{ headerTitle: 'New Contact' }} />
    <Stack.Screen
      name='ContactDetail'
      component={ContactDetailScreen}
      options={{ headerTitle: 'Contact Detail' }}
    />
  </Stack.Navigator>
);

export default ContactScreen;
