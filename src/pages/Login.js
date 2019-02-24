import React, { Component } from 'react'
import Button from '../components/atom/Button'
import TextFields from '../components/molecules/TextFields'

class Login extends Component {
  state = {
    errorMessage: '',
    email: '',
    password: '',
    firstName: '',
    secondName: '',   
    isAccount: false
  }
  $isAccountChange = () => this.setState({isAccount: !this.state.isAccount})
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
    let data
    e.preventDefault()
    const { email, password, firstName, isAccount } = this.state
    isAccount ? data={email, password} : data={email, firstName}

    console.log(data)

  }

  render() {
    const { email, password, firstName, isAccount } = this.state
    return (
      <div>
        <h2>Login</h2>
        {
          isAccount ? <form>
            <TextFields type='email' value={email} name='Login' onChange={() => this.$onChange('email')} onKeyUp={this.$keyUp} />
            <TextFields type='password' value={password} name='Password' onChange={() => this.$onChange('password')} onKeyUp={this.$keyUp} />
            <button onClick={this.$submit}>push</button>
          </form> : <form>
            <TextFields type='email' value={email} name='Login' onChange={() => this.$onChange('email')} onKeyUp={this.$keyUp} />
            <TextFields type='text' value={firstName} name='First Name' onChange={() => this.$onChange('firstName')} onKeyUp={this.$keyUp} />
            <TextFields type='text' value={firstName} name='Second Name' onChange={() => this.$onChange('secondName')} onKeyUp={this.$keyUp} />
            <button onClick={this.$submit}>push</button>
          </form>
        }
        {
          isAccount ? 'Not a member?' : 'Have an account?'
        }
        {
          <Button children={isAccount ? 'Sign Up' : 'Sign In'} onClick={this.$isAccountChange}/>
        }
      </div>
    )
  }
}

export default Login
