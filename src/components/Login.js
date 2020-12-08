import React, { Component } from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { loginSuccess } from '../actions/index.js'
import { Redirect } from 'react-router'

export class Login extends Component {

    state ={
        username: '',
        password: '',
        redirect: false
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            name: this.state.username,
            password: this.state.password,
        } 

        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }
        fetch('http://localhost:3000/users', reqObj)
        .then(resp => resp.json())
        .then(newUser => {
            this.props.loginSuccess(newUser)
            this.setState({
                username: '',
                password: '',
                redirect: true
            })
        })
    }


    render() {
        if (this.state.redirect === true) {
            return (
                <Redirect to='/notes'/>
            )
        }
        return (
            <div>
                <br/><h1>Welcome To Flatnote!!</h1>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='blue' textAlign='center'>
                            Log-in to your account
                        </Header>
                        <Form size='large' onSubmit={this.handleSubmit}>
                            <Segment stacked>
                            <Form.Input onChange={this.handleChange} icon='user' name='username' value={this.state.username} iconPosition='left' placeholder='Username' />
                            <Form.Input
                                onChange={this.handleChange}
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                name='password'
                                value={this.state.password}
                                type='password'
                            />

                            <Button color='blue' fluid size='large'>
                                Login
                            </Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}



export default connect(null, { loginSuccess })(Login)
