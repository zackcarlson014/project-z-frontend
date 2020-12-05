import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

export class Login extends Component {

    state ={
        username: '',
        password: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Welcome To Notes!!</h1>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='blue' textAlign='center'>
                            Log-in to your account
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                            <Form.Input onChange={this.handleChange} icon='user' name='username' iconPosition='left' placeholder='Username' />
                            <Form.Input
                                onChange={this.handleChange}
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                name='password'
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

export default Login
