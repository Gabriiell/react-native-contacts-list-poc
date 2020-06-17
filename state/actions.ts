import Contact from "../contacts";

export const ADD_CONTACT = 'SEND_MESSAGE';

export interface AddContactAction {
    type: typeof ADD_CONTACT
    payload: Contact
}

export function getAddContactAction(contact: Contact): AddContactAction {
    return {
        type: ADD_CONTACT,
        payload: contact
    };
}
