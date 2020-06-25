import { combineReducers } from "redux";
import Contact, { TestingContacts } from "../contacts"
import { AddContactAction, ADD_CONTACT, LoginAction, LOGIN_SUCCESS, LOGIN_FAIL } from "./actions"

type ContactState = Contact[];

type UserState = {
    token?: string;
    loginError?: string;
};

function contactsReducer(state = TestingContacts.getContacts(), action: AddContactAction): ContactState {
    if (action.type !== ADD_CONTACT) {
        return state;
    }

    const contact = action.payload;

    if (contact.id < 1) {
        contact.id = state.length + 1;
    }

    return [...state, contact];
}

function userReducer(state = {}, action: LoginAction): UserState {
    if (action.type === LOGIN_SUCCESS) {
        return action.payload;
    }

    if (action.type === LOGIN_FAIL) {
        return {
            loginError: action.payload.errorMessage
        };
    }

    return state;
}

export type RootState = {
    contacts: ContactState;
    user: UserState;
};

export default combineReducers<RootState>({ contacts: contactsReducer, user: userReducer });