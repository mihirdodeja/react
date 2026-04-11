import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import PostDetails from "./PostDetails";

export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="container py-5">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">
        <div>
          <h2 className="mb-1">All Posts</h2>
          <p className="text-muted mb-0">
            Review your blog entries and use the action buttons to update or remove posts.
          </p>
        </div>
        <span className="badge bg-primary rounded-pill py-2 px-3">
          {posts.length} posts
        </span>
      </div>

      {posts.length === 0 ? (
        <div className="alert alert-info">No posts available yet.</div>
      ) : (
        posts.map(p => <PostDetails key={p.id} post={p} />)
      )}
    </div>
  );
}