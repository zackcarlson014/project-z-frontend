import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editNote } from '../actions/index.js'
import { Form } from 'semantic-ui-react'
import { Redirect } from 'react-router'

const options = [
    { key: 'm', text: 'Scholarly', value: 'scholarly' },
    { key: 'f', text: 'Netflix Show Ideas', value: 'netflix' },
    { key: 'o', text: "Just 'Cuz" , value: 'fun' },
  ]

export class EditNoteForm extends Component {

    state = {
        title: '',
        image: '',
        description: '',
        category: '',
        redirect: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
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

export default connect(null, { editNote })(EditNoteForm)
