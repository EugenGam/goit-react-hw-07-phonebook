import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactReducer';
import loadingReducer from './loadingReducer';
import filterReducer from './filterReducer';
import themeReducer from './themeReducer';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    theme: themeReducer,
    loading: loadingReducer,
  },
});

export default store;
