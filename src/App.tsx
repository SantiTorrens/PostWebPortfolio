import './App.css'
import './styles/global.css'
import Dashboard from './views/Auth/index.tsx';
import PostList from './views/Auth/Posts/List.tsx';
import Home from './views/index'
import Login from './views/Login/index.tsx'
import Posts from './views/Posts/index.tsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './views/SignUp.tsx/index.tsx';
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
            <Route path="/PostWebPortfolio/" element={<Home />} />
            <Route path="/PostWebPortfolio/login" element={<Login />} />
            <Route path="/PostWebPortfolio/posts" element={<Posts />} />
            <Route path="/PostWebPortfolio/signUp" element={<SignUp />} />

            {/* Auth Routes */}

            <Route path="/PostWebPortfolio/dashboard" element={<ProtectedRoute><Dashboard /> </ProtectedRoute>} />
            <Route path="/PostWebPortfolio/dashboard/posts" element={<ProtectedRoute><PostList /></ProtectedRoute>} />
            <Route path="/PostWebPortfolio/dashboard/posts/favorites" element={<ProtectedRoute><Favorites /></ProtectedRoute>} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
