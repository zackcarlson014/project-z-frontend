const noteReducer = (state=[], action) => {
    let updatedNotes = []
    switch(action.type) {
        case 'FETCH_NOTES_SUCCESS':
            return action.notes
        case 'DELETE_NOTE':
            updatedNotes = state.filter(n => n.id !== action.id)
            return updatedNotes
        case 'ADD_NOTE':
            return [...state, action.newNote]
        case 'EDIT_NOTE_SUCCESS':
            updatedNotes = state.map(n => {
                if (n.id === action.note.id) {
                    return action.note
                }
                else {
                    return n
                }
            })
            return updatedNotes 
        default:
            return state
    }
}

export default noteReducer