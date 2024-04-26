import { ReactElement, ReactNode } from 'react';
import Header from '../components/Auth/Header';
import Footer from '../components/Auth/Footer';
import BreadCrumbs from '../components/BreadCrumbs';
interface AuthLayoutProps {
  children: ReactNode;
}


export default function AuthLayout({ children }: AuthLayoutProps): ReactElement {
  const crumbs = [
    { id: 1, name: 'Dashboard', url: '/PostWebPortfolio/dashboard' },
    { id: 2, name: 'Posts', url: '/PostWebPortfolio/dashboard/posts' },
    { id: 3, name: 'Post Favorites', url: '/PostWebPortfolio/dashboard/posts/favorites' },
  ];

  return (

    <div className="flex flex-col h-full ">
      <Header></Header>
      <div className="container flex flex-col h-full gap-4 p-5 mx-auto ">
        <BreadCrumbs crumbs={crumbs} />
        {children}
      </div>
      <Footer></Footer>
    </div>
  )
}