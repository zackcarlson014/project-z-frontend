import './App.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNotesSuccess } from './actions/index.js'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import NotesContainer from './components/NotesContainer.js'
import NewNoteForm from './components/NewNoteForm.js'
import NavBar from './components/NavBar.js'
import Login from './components/Login.js'


export class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/notes')
    .then(resp => resp.json())
    .then(notes => {
      this.props.fetchNotesSuccess(notes)
      console.log('notes', notes)
    })
  }


  render() {
    return (
      <Router>
        <Switch>
          <div>
              {/* <NavBar /> */}
              <Route exact path='/login' component={loginContainer} />
              <Route component={defaultContainer} />
          </div>
        </Switch>
      </Router>
    )
  }
}

const loginContainer = () => (
  <div className='App'>
    <Route exact path="/" render={() => <Redirect to="/login" />} />
    <Route path="/login" component={Login} />
  </div>
)

const defaultContainer = () => (
  <div className='App'>
    <NavBar />
    <Route exact path='/notes' component={NotesContainer} />
    <Route exact path='/new-note' component={NewNoteForm} />
  </div>
)

const mapDispatchToProps = {
  fetchNotesSuccess: fetchNotesSuccess
}

export default connect(null, mapDispatchToProps)(App)

