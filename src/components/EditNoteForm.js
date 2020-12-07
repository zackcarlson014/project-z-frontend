import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editNoteSuccess } from '../actions/index.js'
import { Form } from 'semantic-ui-react'
import { Redirect } from 'react-router'

const options = [
    { key: 'm', text: 'Scholarly', value: 'scholarly' },
    { key: 'f', text: 'Netflix Show Ideas', value: 'netflix' },
    { key: 'o', text: "Just 'Cuz" , value: 'fun' },
  ]

export class EditNoteForm extends Component {

    state = {
        title: this.props.updatedNote.title,
        image: this.props.updatedNote.image,
        description: this.props.updatedNote.description,
        category: '',
        redirect: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {

        const updatedNote = {
            title: this.state.title,
            image: this.state.image,
            description: this.state.description,
        }

        const reqObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedNote)
        }
        
        fetch(`http://localhost:3000/notes/${this.props.updatedNote.id}`, reqObj)
        .then(resp => resp.json())
        .then(note => {
            console.log(note, "this is the note from the patch")
            this.props.editNoteSuccess(note)
            this.props.history.push('/notes')
        })
        
    }

    
    render() {
        if (this.state.redirect === true) {
            return (
                <Redirect to='/notes'/>
            )
        }
        return (
            <Form onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Input onChange={this.handleChange} label='Title' value={this.state.title} name='title' placeholder='Note title...' />
              <Form.Input onChange={this.handleChange} label='Image' value={this.state.image} name='image' placeholder='Image URL...' />
              <Form.Select
                fluid
                label='Category'
                options={options}
                placeholder='Category...'
              />
            </Form.Group>
            <Form.TextArea onChange={this.handleChange} label='Note Description' name='description' value={this.state.description} placeholder="Here's to the blank page..." />
            <Form.Button type='submit'>Submit</Form.Button>
          </Form>
        )
    }
}

const mapStateToProps = state => {
    return {
        updatedNote: state.updatedNote
    }
}

export default connect(mapStateToProps, { editNoteSuccess })(EditNoteForm)
