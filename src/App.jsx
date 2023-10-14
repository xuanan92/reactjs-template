import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import PostsList from "./features/posts/PostsList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />

        <Route path="posts">
          <Route index element={<h1>Main component here</h1>} />
          <Route path="edit/:postId" element={<h2>Child component here</h2>} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
