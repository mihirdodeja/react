import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";

export default function Home() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="container py-5">
      <div className="bg-light rounded-4 shadow-sm p-5 mb-5 text-center">
        <span className="badge bg-primary mb-3">Featured Gallery</span>
        <h1 className="display-6 fw-bold">Create and share beautiful posts</h1>
        <p className="text-muted mx-auto" style={{ maxWidth: "680px" }}>
          Browse the latest gallery entries, enjoy featured images, and keep your feed fresh with vibrant posts.
        </p>
      </div>

      <div className="row g-4">
        {posts.map(post => (
          <div className="col-lg-4 col-md-6" key={post.id}>
            <div className="card h-100 shadow-sm border-0 overflow-hidden">
              {post.image ? (
                <img
                  src={post.image}
                  alt={post.title}
                  className="card-img-top"
                  style={{ height: "240px", objectFit: "cover" }}
                />
              ) : (
                <div
                  className="bg-secondary bg-opacity-10 d-flex align-items-center justify-content-center"
                  style={{ height: "240px" }}
                >
                  <span className="text-muted">No image available</span>
                </div>
              )}
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text text-truncate">{post.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}