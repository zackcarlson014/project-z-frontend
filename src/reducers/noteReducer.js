const noteReducer = (state=[], action) => {
    switch(action.type) {
        // case 'LOGIN_SUCCESS':
        //     return action.user.notes
        case 'FETCH_NOTES_SUCCESS':
            return action.notes
        case 'DELETE_NOTE':
            const updatedNotes = state.filter(n => n.id !== action.id)
            return updatedNotes
        case 'ADD_NOTE':
            return [...state, action.newNote]
        default:
            return state
    }
}

export default noteReducer