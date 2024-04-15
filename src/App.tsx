import './App.css'
import './styles/global.css'
import Dashboard from './views/Auth';
import PostList from './views/Auth/Posts/List';
import Home from './views/index'
import Login from './views/Login/'
import Posts from './views/Posts/'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './views/SignUp.tsx';
import Favorites from './views/Auth/Posts/Favorites.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';
import { Toaster } from 'sonner';


function App() {
  return (
    <div className="w-full h-full">
      <Toaster position="bottom-right" richColors/>

      <Router>
        <div className="w-full h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/signUp" element={<SignUp />} />

            {/* Auth Routes */}

            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /> </ProtectedRoute>} />
            <Route path="/dashboard/posts" element={<ProtectedRoute><PostList /></ProtectedRoute>} />
            <Route path="/dashboard/posts/favorites" element={<ProtectedRoute><Favorites /></ProtectedRoute>} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
