import { createAction } from '@reduxjs/toolkit';

const contactDelete = createAction('contact/delete');

const contactDeleteRequest = createAction('contact/deleteRequest');
const contactDeleteSuccess = createAction('contact/deleteSuccess');
const contactDeleteError = createAction('contact/deleteError');

const contactAddRequest = createAction('contact/addRequest');
const contactAddSuccess = createAction('contact/addSuccess');
const contactAddError = createAction('contact/addError');

const contactGetRequest = createAction('contact/getRequest');
const contactGetSuccess = createAction('contact/getSuccess');
const contactGetError = createAction('contact/getError');

export default {
  contactDelete,
  contactAddRequest,
  contactAddSuccess,
  contactAddError,
  contactGetRequest,
  contactGetSuccess,
  contactGetError,
  contactDeleteRequest,
  contactDeleteSuccess,
  contactDeleteError,
};
