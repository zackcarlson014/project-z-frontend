const editNoteReducer = (state=[], action) => {
    switch(action.type) {
        case 'EDIT_NOTE':
            return action.updatedNote
        default:
            return state
    }
}

export default editNoteReducer