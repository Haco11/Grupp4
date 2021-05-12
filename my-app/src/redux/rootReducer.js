import { combineReducers } from 'redux';
import threadReducer from './threadSlice';
import commentReducer from './commentSlice';

const rootReducer = combineReducers({
    thread: threadReducer,
    comment: commentReducer
});

export default rootReducer;