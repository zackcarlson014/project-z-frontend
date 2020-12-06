import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteNote } from '../actions/index.js'
import { Container } from 'semantic-ui-react'

export class NoteShowPage extends Component {

    handleDelete = () => {
        fetch(`http://localhost:3000/notes/${this.props.note.id}`, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(data => {
            this.props.deleteNote(this.props.note.id)
        })
    }

    render() {
        return (
            <Container>
                <h1>{this.props.note.title}</h1><br/>
                <img src={this.props.note.image}/>
                <p>{this.props.note.description}</p>
                <button onClick={this.handleDelete}>Delete Note</button>
            </Container>

        )
    }
}
const mapDispatchToProps = {
    deleteNote: deleteNote
}

const mapStateToProps = state => {
    return {
        note: state.note
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteShowPage)

            