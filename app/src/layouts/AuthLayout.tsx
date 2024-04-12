import { ReactElement, ReactNode } from 'react';
import Header from '../components/Auth/Header';
import Footer from '../components/Auth/Footer';
interface AuthLayoutProps {
  children: ReactNode;
}


export default function AuthLayout({ children }: AuthLayoutProps): ReactElement {
  return (

    <div className=" flex flex-col h-full">
      <Header></Header>
      <div className="container mx-auto p-5  h-full">
        {children}
      </div>
      <Footer></Footer>
    </div>
  )
}