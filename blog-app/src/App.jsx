import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import Home from "./components/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/posts" element={<PostList />} />
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<PostForm />} />
      </Routes>
    </BrowserRouter>
  );
}