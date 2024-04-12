import './App.css'
import Dashboard from './views/Auth';
import Create from './views/Auth/Posts/Create';
import PostList from './views/Auth/Posts/List';
import Home from './views/index'
import Login from './views/Login/'
import Posts from './views/Posts/'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './views/SignUp.tsx';


function App() {

  return (
    <div className="w-full h-full">
      <Router>
        <div className="w-full h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/signUp" element={<SignUp />} />

            {/* Auth Routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/posts" element={<PostList />} />
            <Route path="/dashboard/posts/create" element={<Create />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
