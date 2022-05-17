const posts = [{"id": 1, "name": "test1"}, {"id": 2, "name": "test2"}]

export const getPosts = () => {
   console.log(333333)
    return {
      type: "GET_POSTS",
      payload: posts
    };
};

export const addPost = (post) => {
    return {
      type: "ADD_POST",
      payload: post
    };
};

export const updatePost = (post) => {
    return {
      type: "UPDATE_POST",
      payload: post
    };
};

  
  
