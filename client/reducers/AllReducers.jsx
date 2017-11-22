import { combineReducers } from 'redux';
import reducerSignupStore from './reducerSignupStore.jsx';

//combine in to one big object
const AllReducers = combineReducers({
  reducerSignupStore: reducerSignupStore
});

export default AllReducers;