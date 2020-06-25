import Contact from "../contacts";
import { Dispatch } from "redux";
import { authenticate } from "../api";

export const ADD_CONTACT = 'SEND_MESSAGE';

export const LOGIN_SENT = 'LOGIN_SENT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export interface AddContactAction {
    type: typeof ADD_CONTACT
    payload: Contact
}

export interface LoginSentAction {
    type: typeof LOGIN_SENT
}

export interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS,
    payload: { token: string }
}

export interface LoginFailAction {
    type: typeof LOGIN_FAIL,
    payload: { errorMessage: string }
}

export type LoginAction = LoginSentAction | LoginSuccessAction | LoginFailAction;

export function addContact(contact: Contact): AddContactAction {
    return {
        type: ADD_CONTACT,
        payload: contact
    };
}

export function login(username: string, password: string) {
    return async (dispatch: Dispatch<LoginAction>): Promise<void> => {
        dispatch({ type: LOGIN_SENT });

        try {
            const token = await authenticate(username, password);
            dispatch({ type: LOGIN_SUCCESS, payload: token });
        }
        catch (err) {
            dispatch({ type: LOGIN_FAIL, payload: err.message ?? err });
        }
    };
}
