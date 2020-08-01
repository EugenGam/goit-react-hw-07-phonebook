import { createReducer } from '@reduxjs/toolkit';
import contactActions from './contactActions';

const loadingReducer = createReducer(false, {
  [contactActions.contactAddRequest]: () => true,
  [contactActions.contactAddSuccess]: () => false,
  [contactActions.contactAddError]: () => false,
  [contactActions.contactGetRequest]: () => true,
  [contactActions.contactGetSuccess]: () => false,
  [contactActions.contactGetError]: () => false,
  [contactActions.contactDeleteRequest]: () => true,
  [contactActions.contactDeleteSuccess]: () => false,
  [contactActions.contactDeleteError]: () => false,
});

export default loadingReducer;
