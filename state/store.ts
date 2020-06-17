import { createStore } from 'redux'
import { contactsReducer } from './reducer';

export const store = createStore(contactsReducer);
