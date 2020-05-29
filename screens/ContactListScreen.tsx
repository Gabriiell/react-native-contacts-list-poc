import React, { FunctionComponent } from 'react';
import { Text, SectionList, Button, View, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import Contact from '../contacts';
import ContactRow from './ContactRow';
import { ContactNavigatorParams } from './ContactScreen';

interface ContactsBySection {
  [key: string]: Contact[];
}

type Props = {
  contacts: Contact[];
  navigation: StackNavigationProp<ContactNavigatorParams, 'ContactList'>;
};

const ContactListScreen: FunctionComponent<Props> = (props) => {
  const contactsByRange = props.contacts.reduce((obj: ContactsBySection, contact: Contact) => {
    const from = Math.floor(contact.id / 100) * 100;
    const to = from + 99;
    const section = `${from} - ${to}`;

    return {
      ...obj,
      [section]: [...(obj[section] || []), contact],
    };
  }, {});

  const contactsBySection = Object.keys(contactsByRange).map((range) => ({
    title: range,
    data: contactsByRange[range],
  }));

  const navigateContactDetail = (contact: Contact) => {
    props.navigation.navigate('ContactDetail', { contact });
  }; 

  return (
    <View style={styles.container}>
      <Button title='Add contact' onPress={() => props.navigation.navigate('AddContact')} />
      <SectionList
        renderSectionHeader={(obj) => <Text>{obj.section.title}</Text>}
        renderItem={(obj) => <ContactRow key={obj.item.id} contact={obj.item} onSelect={navigateContactDetail} />}
        sections={contactsBySection}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingLeft: 50 }}
      ></SectionList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ContactListScreen;
