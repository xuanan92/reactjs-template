import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import PostsList from "./features/posts/PostsList";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/posts">
          <Route index element={<PostsList />} />
          <Route path="edit/:postId" element={<h2>Child component here</h2>} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
