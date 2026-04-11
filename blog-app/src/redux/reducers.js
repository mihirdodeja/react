const initialState = {
  posts: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH":
      return { ...state, posts: action.payload };

    case "ADD":
      return { ...state, posts: [...state.posts, action.payload] };

    case "UPDATE":
      return {
        ...state,
        posts: state.posts.map(p =>
          p.id === action.payload.id ? action.payload : p
        )
      };

    case "DELETE":
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.payload)
      };

    default:
      return state;
  }
};

export default rootReducer;