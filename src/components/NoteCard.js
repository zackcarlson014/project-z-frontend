import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteNote, showNote, editNote } from '../actions/index.js'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export class NoteCard extends Component {

    handleDelete = () => {
        fetch(`http://localhost:3000/notes/${this.props.id}`, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(data => {
            this.props.deleteNote(this.props.id)
        })
    }

    handleShow = () => {
        this.props.showNote(this.props)
    }

    handleEdit = () => {
        this.props.editNote(this.props)
    }

    render() {
        return (
                <Card>
                    <Image src={this.props.image} wrapped ui={false} width='300px' height='300px' padding='2%'/>
                    <Card.Content>
                        <Card.Header>{this.props.title}</Card.Header>
                        <Card.Description>
                            {this.props.description}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <Link key={this.props.id} exact to={`/notes/${this.props.id}`} ><button onClick={this.handleShow}>View Note</button></Link>
                    <Link key={this.props.id} exact to={`/notes/edit/${this.props.id}`} ><button onClick={this.handleEdit}>Edit Note</button></Link>
                    <button onClick={this.handleDelete}>Delete Note</button>
                    </Card.Content><br/><br/>
                </Card>
        )
    }
}

const mapDispatchToProps = {
    deleteNote: deleteNote,
    showNote: showNote,
    editNote: editNote
}



export default connect(null, mapDispatchToProps)(NoteCard)
