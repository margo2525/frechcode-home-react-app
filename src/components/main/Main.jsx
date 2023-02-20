import { Component } from 'react'

import ThemeButton from '../ThemeButton/ThemeButton'

import UsersList from '../UsersList'
import UsersLoader from '../usersLoader/UsersLoader'

import './style.css'

class Main extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLight: true
    }
  }

  setTheme = () => {
    const { isLight } = this.state
    this.setState({ isLight: !isLight })
  }

  render () {
    const { isLight } = this.state
    return (
      <>
        <UsersLoader />
        <ThemeButton isLight={isLight} changeTheme={this.setTheme} />
        <UsersList isLight={isLight} />
      </>
    )
  }
}

// Main;
//   ThemeButton; напис
//   UsersList;
//     UsersListItem; підсвітка

export default Main
