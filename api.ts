import Contact from "./contacts";

export const fetchContacts = async () => {
  const response = await fetch('https://randomuser.me/api/?results=20&nat=us');
  const { results } = await response.json();
  const contacts: Contact[] = results.map(
    (c: any, index: number): Contact => ({
      id: index,
      name: `${c.name.first} ${c.name.last}`,
      phone: c.phone
    })
  );

  return contacts;
};

export const authenticate = (username: string, password: string) => {
  if (username === 'username' && password === 'password') {
    return Promise.resolve({ token: 'foo' });
  }

  return Promise.reject(new Error('Wrong username or password'));
};