import { combineReducers } from 'redux';
import threadReducer from './threadSlice';

const rootReducer = combineReducers({
    thread: threadReducer,
});

export default rootReducer;