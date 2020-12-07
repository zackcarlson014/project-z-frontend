export const fetchNotesSuccess = (notes) => {
    return {
        type: 'FETCH_NOTES_SUCCESS',
        notes
    }
}

export const loginSuccess = (user) => {
    return {
        type: 'LOGIN_SUCCESS',
        user
    }
}

export const deleteNote = (id) => {
    return {
        type: 'DELETE_NOTE',
        id
    }
}

export const addNote = (newNote) => {
    return {
        type: 'ADD_NOTE',
        newNote
    }
}

export const editNote = (updatedNote) => {
    return {
        type: 'EDIT_NOTE',
        updatedNote
    }
}

export const editNoteSuccess = (note) => {
    return {
        type: 'EDIT_NOTE_SUCCESS',
        note
    }
}

export const showNote = (note) => {
    return {
        type: 'SHOW_NOTE',
        note
    }
}
