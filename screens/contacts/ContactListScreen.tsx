import React from 'react';
import { Text, SectionList, Button, View, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { connect, ConnectedProps } from 'react-redux';

import Contact from '../../contacts';
import ContactRow from './ContactRow';
import { ContactNavigatorParams } from './ContactScreen';
import { RootState } from '../../state/reducer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

interface ContactsBySection {
  [key: string]: Contact[];
}

type Props = {
  navigation: StackNavigationProp<ContactNavigatorParams, 'ContactList'>;
};

const mapState = (state: RootState) => ({
  contacts: state.contacts
});

const connector = connect(mapState);
type PropsFromRedux = ConnectedProps<typeof connector>;

class ContactListScreen extends React.Component<Props & PropsFromRedux, {}> {
  render() {
    const contactsByRange = this.props.contacts.reduce((obj: ContactsBySection, contact: Contact) => {
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
      this.props.navigation.navigate('ContactDetail', { contact });
    };

    return (
      <View style={styles.container}>
        <Button title='Add contact' onPress={() => this.props.navigation.navigate('AddContact')} />
        <SectionList
          renderSectionHeader={(obj) => <Text>{obj.section.title}</Text>}
          renderItem={(obj) => <ContactRow key={obj.item.id} contact={obj.item} onSelect={navigateContactDetail} />}
          sections={contactsBySection}
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingLeft: 50 }}
        ></SectionList>
      </View>
    );
  }
};

export default connector(ContactListScreen);
