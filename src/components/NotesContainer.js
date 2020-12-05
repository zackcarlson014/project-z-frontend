import React, { Component } from 'react'
import { connect } from 'react-redux'
import NoteCard from './NoteCard.js'

// const NotesContainer = (props) => {

// }

export class NotesContainer extends Component {
    render() {
        return (
            <div>
                {this.props.notes.map(note => {
                    return <NoteCard key={note.id} {...note}/>
                })}
            </div>
        )
    }
}

const mapStateToProps = (storeState) => {
    return {
        notes: storeState.notes
    }
}

export default connect(mapStateToProps, null)(NotesContainer)
