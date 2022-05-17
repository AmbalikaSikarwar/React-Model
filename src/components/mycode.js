import React, { Component } from 'react'
class Posts extends Component {

constructor(props){
super(props)
this.state = {
posts: [],
appName: "test",
inputValue: "",
error: ""
}


this.handleChange = this.handleChange.bind(this);
this.deletePost = this.deletePost.bind(this);
this.editPost = this.editPost.bind(this);
this.updatePost = this.editPost.bind(this);
}


componentDidMount(){
this.setState({ posts: this.props.posts})
}
componentDidUpdate(prevProps, prevState)
{
}

handleChange(e){
this.setState({ inputValue : e.target.value})

}

handleClick(e){
if (this.state.inputValue != "")
{
e.preventDefault()
const ids = this.state.posts.map((post) => post.id)
console.log("iud",ids)
let post = {}
post.id = Math.max.apply(null, ids) + 1
post.name = this.state.inputValue
let posts = this.state.posts
posts.push(post)
this.setState({ posts: posts})
}
else 
{ 
this.setState({error:"Field cann't be empty"})
}
}

deletePost(id){
const posts = this.state.posts.filter((post)=>{
if (post.id != id)
{
return post

}
})
this.setState({ posts: posts})

}

editPost(id){
console.log(162222)
let newpost = this.state.posts.find((post)=>{
  return post.id == id
});
console.log(newpost)
}

render(){

return (
<div>
<div>
{1 + 23}
</div>
<div> {this.state.appName}</div>
<input type="text" value={this.state.inputValue} onChange={this.handleChange}/>
<button onClick={this.handleClick.bind(this)}>Add Post</button>
<p style={{color:"red", fontSize:"14px"}}>{this.state.error}</p>
<div>
<h2>posts</h2>
{
this.state.posts.map((post, index) => {
return (
<div key={index}>
<input type="text" value={this.state.name} onChange={this.editPost}/>
<p>{post.id}</p>
<button onClick={this.deletePost.bind(this, post.id)}>Delete Post</button>
<button onClick={this.editPost.bind(this, post.id)}>Edit Post</button>

</div>
)
})
}
</div>
</div>
)
}
}
export default Posts;