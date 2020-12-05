
import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react'

export class NavBar extends Component {
  state = { 
    activeItem: 'home'
  }

  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name
    })
  }

  render() {
    const { activeItem } = this.state
    return (
      <Menu>
        <Menu.Item
          as={NavLink}
          to='/notes'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          as={NavLink}
          to='/new-note'
          name='new-note'
          active={activeItem === 'new-note'}
          onClick={this.handleItemClick}
        >
          Create New Note
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to='/login'
          name='login'
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
        >
          Login
        </Menu.Item>
      </Menu>
    )
  }
}

export default NavBar
