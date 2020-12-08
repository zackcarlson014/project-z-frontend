import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteNote, editNote } from '../actions/index.js'
import { Container, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export class NoteShowPage extends Component {

    handleDelete = () => {
        fetch(`http://localhost:3000/notes/${this.props.note.id}`, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(data => {
            this.props.deleteNote(this.props.note.id)
            this.props.history.push('/notes')
        })
    }

    handleEdit = () => {
        this.props.editNote(this.props.note)
    }

    render() {
        return (
            <Container>
                <br/><br/><h1>{this.props.note.title}</h1><br/>
                <img src={this.props.note.image} alt='' width='300px' height='300px'/><br/><br/><br/><br/>
                <p><strong>{this.props.note.description}</strong></p><br/><br/><br/><br/>
                <Button color='red' onClick={this.handleDelete}>Delete Note</Button>
                <Link key={this.props.note.id} exact to={`/notes/edit/${this.props.note.id}`} ><Button color='blue' onClick={this.handleEdit}>Edit Note</Button></Link>
            </Container>

        )
    }
}
const mapDispatchToProps = {
    deleteNote: deleteNote,
    editNote: editNote
}

const mapStateToProps = state => {
    return {
        note: state.note
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteShowPage)

            