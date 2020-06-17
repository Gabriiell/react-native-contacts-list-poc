import Contact, { TestingContacts } from "../contacts"
import { AddContactAction, ADD_CONTACT } from "./actions"

export interface ContactState {
    contacts: Contact[];
}

const initialState: ContactState = {
    contacts: TestingContacts.getContacts()
}

export function contactsReducer(state = initialState, action: AddContactAction): ContactState {
    if (action.type !== ADD_CONTACT) {
        return state;
    }

    const contact = action.payload;

    if (contact.id < 1) {
        contact.id = state.contacts.length + 1;
    }

    return {
        contacts: [...state.contacts, contact]
    };
}
