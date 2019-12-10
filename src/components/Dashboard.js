import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import PostDisplay from './PostDisplay'



class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get(`/api/posts/${this.props.user.user_id}`)
      .then( res => {
        this.setState({
          posts: res.data
        })
      })
  }


  render() {
    // console.log(this.props)
    const mappedPosts = this.state.posts.map( (post, i) => {
      return <PostDisplay key={i} post={post} />
    })
  
    return(
      <div>
        {mappedPosts}
      </div>
    )
  } 
}

const mapStateToProps = (reduxState) => {
  return reduxState
}

export default connect(mapStateToProps)(Dashboard)