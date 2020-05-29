export default interface Contact {
  id: number;
  name: string;
  phone: string;
}

export class TestingContacts {
  static getContacts() {
    const contacts: Array<Contact> = [];

    for (let i = 1; i <= 10; i++) {
      contacts.push({
        id: i,
        name: `Contact ${i}`,
        phone: `${i}${i}${i}${i}-${i}${i}${i}${i}`,
      });
    }

    return contacts;
  }
}
