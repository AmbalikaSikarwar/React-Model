import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../redux/actions/post';


class Home extends Component { 

  componentDidMount()
  {
    this.props.getPosts()
  }

  render(){ 
    console.log(11111, this.props)
    return ( 
        <div>
          {
                this.props.posts.posts.map((post, index) => {
                   return (
                       <div key={index}>
                         <p>{post.id}</p>
                         <p>{post.name}</p>
  
                    </div>
                   )
                })
            }    
      </div>
    ) 
  } 
} 

const mapStateToProps = (state) => {
  console.log(2222222, state.posts)
  return {
     posts: state.posts
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(getPosts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);