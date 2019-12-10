import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser} from '../redux/reducer'
import axios from 'axios'


class Register extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: ''
      ,password: ''
    }
  }

  handleInput = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleRegister = () => {
    const {email, password} = this.state
    axios.post('/api/register', {email, password})
      .then( res => {
        this.props.getUser(res.data)
        this.props.history.push('/dash')
      })
      .catch( err => console.log(err))
  }

  render() {
    return(
      <div>
        <input 
          name="email" 
          maxLength='100' 
          placeholder='Email'
          onChange={ e => this.handleInput(e)} />
        <input 
          type='password' 
          name='password'
          maxLength='20' 
          placeholder='Password' 
          onChange={ e => this.handleInput(e)} />
        <button onClick={this.handleRegister} >Register</button>
        <Link to='/'>Log in</Link>
      </div>
    )
  } 
}

export default connect(null, {getUser})(Register)