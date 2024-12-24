
import Header from './Header';
import Footer from './Footer';
import { Outlet, useNavigation } from 'react-router-dom';

function AppLayout() {
  const loading= useNavigation();
  if(loading.state==="loading") return <h1> Loading

  </h1>
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default AppLayout;