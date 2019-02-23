import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TextFields from '../components/molecules/TextFields'

class Login extends Component {
  state = {
    errorMessage: '',
    email: '',
    password: ''
  }

  $onChange = fieldName => e => {
    this.setState({ [fieldName]: e.currentTarget.value })
  }
  $keyUp = () => {
    const { email, password } = this.state

    return email.length >= 5 && password.length >= 5
      ? this.setState({ btnDisabled: false })
      : this.setState({ btnDisabled: true })
  }
  $submit = e => {
    e.preventDefault()
    const { email, password } = this.state
    const data = {
      email: email,
      password: password,
    }

    console.log(data)

  }

  render() {
    const { email, password } = this.state
    return (
      <div>
        <Link to='/' children='Home' />
        <h2>Login</h2>
        <TextFields type='email' value={email} name='Email' onChange={() => this.$onChange('email')} onKeyUp={this.$keyUp} />
        <TextFields type='password' value={password} name='Password' onChange={() => this.$onChange('password')} onKeyUp={this.$keyUp} />
        <button onClick={this.$submit}>push</button>
      </div>
    )
  }
}

export default Login