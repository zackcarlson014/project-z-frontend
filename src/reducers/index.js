import { combineReducers } from 'redux'
import noteReducer from './noteReducer.js' 
import authReducer from './authReducer.js' 

export default combineReducers({
    notes: noteReducer,
    auth: authReducer
})