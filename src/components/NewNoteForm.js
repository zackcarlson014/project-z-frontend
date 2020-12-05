import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions/index.js'

export class NewNoteForm extends Component {

    state = {
        title: '',
        image: '',
        description: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const newNote = {
            title: this.state.title,
            image: this.state.image,
            description: this.state.description,
            user_id: 1
        }
        

        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newNote)
        }
        fetch('http://localhost:3000/notes', reqObj)
        .then(resp => resp.json())
        .then(newNote => {
            this.props.addNote(newNote)
            this.setState({
                title: '',
                image: '',
                description: ''
            })
        })
    }


    render() {
        const formStyle = {border: '4px solid black', padding: '2%', width: '420px'}
        return (
            <div className='App'>
                <div style={formStyle}>
                    <h3>Create Note</h3>
                    <form onSubmit={this.handleSubmit}>
                        <label for='title'>Title</label><br/>
                        <input type='text' name='title' onChange={this.handleChange} value={this.state.title}/><br/>
                        <label for='title'>Image</label><br/>
                        <input type='text' name='image' onChange={this.handleChange} value={this.state.image}/><br/>
                        <label for='description'>Description</label><br/>
                        <textarea rows='5' cols='50' name='description' onChange={this.handleChange} value={this.state.description}></textarea>
                        <input type='submit' />
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, { addNote })(NewNoteForm)
