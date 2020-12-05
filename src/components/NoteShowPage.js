import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteNote } from '../actions/index.js'
import { Card, Image } from 'semantic-ui-react'

export class NoteShowPage extends Component {

    handleDelete = () => {
        fetch(`http://localhost:3000/notes/${this.props.id}`, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(data => {
            this.props.deleteNote(this.props.id)
        })
    }

    render() {
        return (
            <div>
                <Card>
                    <Image src={this.props.image} wrapped ui={false} width='300px' height='300px' padding='2%'/>
                    <Card.Content>
                        <Card.Header>{this.props.title}</Card.Header>
                        <Card.Description>
                            {this.props.description}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <button onClick={this.handleDelete}>delete</button>
                    </Card.Content><br/><br/>
                </Card>
            </div>
        )
    }
}
const mapDispatchToProps = {
    deleteNote: deleteNote
}

export default connect(null, mapDispatchToProps)(NoteShowPage)
