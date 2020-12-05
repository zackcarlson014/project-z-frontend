import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteNote } from '../actions/index.js'
import { Card, Icon, Image } from 'semantic-ui-react'

export class NoteCard extends Component {

    handleDelete = () => {
        fetch(`http://localhost:3000/notes/${this.props.id}`, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(data => {
            this.props.deleteNote(this.props.id)
        })
    }

    render() {
        return (
            <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} width='300px' height='300px'/>
            <Card.Content>
                <Card.Header>{this.props.title}</Card.Header>
                <Card.Meta>
                <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    {this.props.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <button onClick={this.handleDelete}>delete</button>
            </Card.Content><br/><br/>
            </Card>
        )
    }
}

const mapDispatchToProps = {
    deleteNote: deleteNote
}

export default connect(null, mapDispatchToProps)(NoteCard)
