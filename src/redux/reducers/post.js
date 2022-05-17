
const initialState =  {
    posts: [],
}
const posts = (state = initialState, action) => {
    console.log(444441111, action.type)
    console.log(4444222222, action.payload)

    switch (action.type) {
      case "GET_POSTS":
        return {...state, posts: action.payload};
      case "ADD_POST":
        return state - 1;
      default:
        return state;
    }
  };
  
  export default posts;