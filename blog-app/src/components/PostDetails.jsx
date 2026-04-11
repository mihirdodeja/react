import { useDispatch } from "react-redux";
import { deletePost } from "../redux/actions";
import { useNavigate } from "react-router-dom";

export default function PostDetails({ post }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="card mb-4 shadow-sm border-0 overflow-hidden">
      <div className="row g-0 align-items-center">
        <div className="col-md-4">
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="img-fluid h-100 w-100"
              style={{ objectFit: "cover", minHeight: "220px" }}
            />
          ) : (
            <div
              className="bg-secondary bg-opacity-10 d-flex align-items-center justify-content-center"
              style={{ minHeight: "220px" }}
            >
              <span className="text-muted">No image available</span>
            </div>
          )}
        </div>

        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="text-muted mb-4">{post.content}</p>
            <div className="d-flex flex-wrap gap-2">
              <button
                className="btn btn-outline-warning"
                onClick={() => navigate("/add", { state: post })}
              >
                Edit
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => dispatch(deletePost(post.id))}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}