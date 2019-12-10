import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import {getUser} from '../redux/reducer'



class Landing extends Component {
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

  handleLogin = () => {
    axios.post('/api/login', {email: this.state.email, password: this.state.password})
      .then( res => {
        this.props.getUser(res.data)
        this.props.history.push('/dash')
      })
      .catch( err => console.log(err))
  }

  render() {
    // console.log(this.props)
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
          onChange={ e => this.handleInput(e)}/>
        <button onClick={this.handleLogin} >Log in</button>
        <Link to='/register'>Register</Link>
      </div>
    )
  } 
}



export default connect(null, {getUser})(Landing)