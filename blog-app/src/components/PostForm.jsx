import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPost, updatePost } from "../redux/actions";
import { useNavigate, useLocation } from "react-router-dom";

export default function PostForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const editPost = location.state;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (editPost) {
      setTitle(editPost.title);
      setContent(editPost.content);
      setImage(editPost.image);
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    if (!title || !content) {
      alert("Fill all fields");
      return;
    }

    if (editPost) {
      dispatch(updatePost({ ...editPost, title, content, image }));
    } else {
      dispatch(addPost({ title, content, image }));
    }

    navigate("/");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-primary text-white border-0">
              <h2 className="mb-1">{editPost ? "Edit" : "Add"} Post</h2>
              <p className="small text-white-75 mb-0">
                Add a title, image, and content for your next post.
              </p>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    className="form-control"
                    value={title}
                    placeholder="Title"
                    onChange={e => setTitle(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Image URL</label>
                  <input
                    className="form-control"
                    value={image}
                    placeholder="Image URL"
                    onChange={e => setImage(e.target.value)}
                  />
                  <div className="form-text">
                    Add a direct link to an image to display it in the post.
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Content</label>
                  <textarea
                    className="form-control"
                    value={content}
                    placeholder="Content"
                    rows={6}
                    onChange={e => setContent(e.target.value)}
                  />
                </div>

                <button className="btn btn-primary px-4">
                  {editPost ? "Update" : "Add"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}