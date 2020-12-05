import './App.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNotesSuccess } from './actions/index.js'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import NotesContainer from './components/NotesContainer.js'
import NewNoteForm from './components/NewNoteForm.js'
import NoteShowPage from './components/NoteShowPage.js'
import NavBar from './components/NavBar.js'
import Login from './components/Login.js'


export class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/notes')
    .then(resp => resp.json())
    .then(notes => {
      this.props.fetchNotesSuccess(notes)
    })
  }


  render() {
    return (
      <Router>
        <Switch>
          <div>
              <Route exact path='/' component={loginContainer} />
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
    <Route to="/" render={() => <Redirect to="/login" />} />
    <Route path="/login" component={Login} />
  </div>
)

const defaultContainer = () => (
  <div className='App'>
    <NavBar />
    <Route exact path='/notes' component={NotesContainer} />
    {/* <Route exact path='/notes' render={routerProps => <NotesContainer {...routerProps} notes={this.props.notes}/>} /> */}
    <Route exact path='/new-note' component={NewNoteForm} />
    <Route component={NoteShowPage} path="/notes/:id" />
  </div>
)

const mapDispatchToProps = {
  fetchNotesSuccess: fetchNotesSuccess
}

// const mapStateToProps = state => {
//   return {
//     notes: state.notes
//   }
// }

export default connect(null, mapDispatchToProps)(App)

