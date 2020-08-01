import { createReducer } from '@reduxjs/toolkit';
import contactActions from './contactActions';

const addContact = (state, action) => {
  return [...state, action.payload];
};

const getContact = (state, action) => {
  return [...state, ...action.payload];
};

const deleteContact = (state, action) => {
  return state.filter(el => el.id !== Number(action.payload));
};

const contactReducer = createReducer([], {
  [contactActions.contactAddSuccess]: addContact,
  [contactActions.contactGetSuccess]: getContact,
  [contactActions.contactDeleteSuccess]: deleteContact,
});

export default contactReducer;
