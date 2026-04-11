import axios from "axios";
const API = "http://localhost:5000/posts";

// GET
export const fetchPosts = () => async dispatch => {
  const res = await axios.get(API);
  dispatch({ type: "FETCH", payload: res.data });
};

// ADD
export const addPost = post => async dispatch => {
  const res = await axios.post(API, post);
  dispatch({ type: "ADD", payload: res.data });
};

// UPDATE
export const updatePost = post => async dispatch => {
  const res = await axios.put(`${API}/${post.id}`, post);
  dispatch({ type: "UPDATE", payload: res.data });
};

// DELETE
export const deletePost = id => async dispatch => {
  await axios.delete(`${API}/${id}`);
  dispatch({ type: "DELETE", payload: id });
};