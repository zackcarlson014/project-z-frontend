const showNoteReducer = (state=[], action) => {
    switch(action.type) {
        case 'SHOW_NOTE':
            return action.note
        default:
            return state
    }
}

export default showNoteReducer