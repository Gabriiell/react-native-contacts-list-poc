import React, { FunctionComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { ContactNavigatorParams } from './ContactScreen';

type Props = {
  route: RouteProp<ContactNavigatorParams, 'ContactDetail'>;
};

const ContactDetailScreen: FunctionComponent<Props> = ({ route }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 40, marginBottom: 20 }}>{route.params.contact.id}</Text>
    <Text style={{ fontSize: 40, marginBottom: 20 }}>{route.params.contact.name}</Text>
    <Text style={{ fontSize: 40, marginBottom: 20 }}>{route.params.contact.phone}</Text>
  </View>
);

export default ContactDetailScreen;
