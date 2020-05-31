import React, { FunctionComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Contact from '../../contacts';

type Props = {
  contact: Contact;
  onSelect: (contact: Contact) => void;
};

const ContactRow: FunctionComponent<Props> = ({ contact, onSelect }) => (
  <TouchableOpacity onPress={() => onSelect(contact)} style={{ paddingTop: 20 }}>
    <Text>{contact.name}</Text>
    <Text>{contact.phone}</Text>
  </TouchableOpacity>
);

export default ContactRow;
