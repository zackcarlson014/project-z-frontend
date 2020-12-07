import { combineReducers } from 'redux'
import noteReducer from './noteReducer.js' 
import authReducer from './authReducer.js' 
import showNoteReducer from './showNoteReducer.js'
import editNoteReducer from './editNoteReducer.js'

export default combineReducers({
    notes: noteReducer,
    note: showNoteReducer,
    user: authReducer,
    updatedNote: editNoteReducer
})