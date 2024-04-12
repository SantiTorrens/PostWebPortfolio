import { ReactElement, ReactNode } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
interface MainLayoutProps {
  children: ReactNode;
}


export default function MainLayout({ children }: MainLayoutProps): ReactElement {
  return (

    <div className=" flex flex-col h-full">
      <Header></Header>
      <div className="container mx-auto p-5 h-full">
        {children}
      </div>
      <Footer></Footer>
    </div>
  )
}