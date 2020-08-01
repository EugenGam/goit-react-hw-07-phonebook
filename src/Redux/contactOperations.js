import axios from 'axios';
import contactActions from './contactActions';

const checkContact = (contacts, name) => {
  let check = true;
  if (contacts.length > 0) {
    contacts.forEach(el => {
      if (el.name === name) {
        alert('You already have this contact');
        check = false;
      } else check = true;
    });
  }
  return check;
};

const contactAdd = (name, number) => (dispatch, getState) => {
  dispatch(contactActions.contactAddRequest());

  if (checkContact(getState().contacts, name)) {
    axios
      .post('http://localhost:2000/contacts', { name, number })
      .then(response =>
        dispatch(contactActions.contactAddSuccess(response.data)),
      )
      .catch(error => dispatch(contactActions.contactAddError(error)));
  } else
    dispatch(contactActions.contactAddError('Already have this contact...'));
};

const contactGet = () => dispatch => {
  dispatch(contactActions.contactGetRequest());

  axios
    .get('http://localhost:2000/contacts')
    .then(response => dispatch(contactActions.contactGetSuccess(response.data)))
    .catch(error => dispatch(contactActions.contactGetError(error)));
};

const contactDelete = contactId => dispatch => {
  dispatch(contactActions.contactDeleteRequest());

  axios
    .delete(`http://localhost:2000/contacts/${contactId}`)
    .then(() => dispatch(contactActions.contactDeleteSuccess(contactId)))
    .catch(error => dispatch(contactActions.contactDeleteError(error)));
};

export default { contactAdd, contactGet, contactDelete };
