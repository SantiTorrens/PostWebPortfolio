import { ReactNode } from 'react'
import { Navigate, useLocation } from "react-router-dom"
import { useUserStore } from '../store/userSlice';

interface ProtectedRouteProps {
  children: ReactNode
}
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isLoggedIn } = useUserStore()
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children

};

export default ProtectedRoute;