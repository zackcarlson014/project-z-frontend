import React from 'react'
import NotesContainer from './components/NotesContainer.js'
import NewNoteForm from './components/NewNoteForm.js'
import NavBar from './components/NavBar.js'

const MainContainer = () => (
    <div>
      <NavBar />
      <Route path="/notes" component={NotesContainer} />
      <Route path="/new-note" component={NewNoteForm} />
    </div>
 )

export default MainContainer