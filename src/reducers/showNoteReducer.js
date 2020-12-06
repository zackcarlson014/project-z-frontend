const showNoteReducer = (state=[], action) => {
    switch(action.type) {
        case 'DELETE_NOTE':
            const updatedNotes = state.filter(n => n.id !== action.id)
            return updatedNotes
        case 'SHOW_NOTE':
            return action.note
        default:
            return state
    }
}

export default showNoteReducer