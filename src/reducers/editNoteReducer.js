const editNoteReducer = (state=[], action) => {
    switch(action.type) {
        case 'EDIT_NOTE':
            return action.updatedNote
        // case 'EDIT_NOTE_SUCCESS':
        //     return action.note
        default:
            return state
    }
}

export default editNoteReducer