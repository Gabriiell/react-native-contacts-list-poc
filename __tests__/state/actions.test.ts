import { addContact, ADD_CONTACT, login, LOGIN_SENT } from "../../state/actions";
import Contact from "../../contacts";

describe("addContact action creator", () => {
    it("should return ADD_CONTACT action", () => {
        const contact: Contact = { id: 1, name: 'Betatester', phone: '1234' };
        expect(addContact(contact)).toEqual({ type: ADD_CONTACT, payload: contact });
    });
});

describe("login action creator", () => {
    it("should dispatch LOGIN_SENT action", () => {
        const mockDispatch = jest.fn();
        login('user', 'password')(mockDispatch);
        const firstCall = mockDispatch.mock.calls[0];
        const callParameter = firstCall[0];
        expect(callParameter).toEqual({ type: LOGIN_SENT });
    });
});
