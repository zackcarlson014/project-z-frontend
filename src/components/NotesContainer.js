import React, { Component } from 'react'
import { connect } from 'react-redux'
import NoteCard from './NoteCard.js'

export class NotesContainer extends Component {
    render() {
        return (
            <div>
                <br/><h1>Welcome to Flatnote, {this.props.user.name}!!</h1><br/><br/>
                <div className='ui five cards'>
                    {this.props.notes.map(note => {
                        return <NoteCard key={note.id} {...note}/>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (storeState) => {
    return {
        notes: storeState.notes,
        user: storeState.user
    }
}

export default connect(mapStateToProps, null)(NotesContainer)
