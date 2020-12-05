export const fetchNotesSuccess = (notes) => {
    return {
        type: 'FETCH_NOTES_SUCCESS',
        notes

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