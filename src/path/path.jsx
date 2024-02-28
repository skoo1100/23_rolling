import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Index from '../pages';
import PostPage from '../pages/post';
import PostIdPage from '../pages/post/id';
import PostMessagePage from '../pages/post/id/message';
import ListPage from '../pages/list';

function Path() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="post" element={<PostPage />} />
        <Route path="post/:id/message" element={<PostMessagePage />} />
        <Route path="/post/:id" element={<PostIdPage />} />
        <Route path="list" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Path;
