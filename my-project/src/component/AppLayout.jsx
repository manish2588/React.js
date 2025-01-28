import Header from './Header';
import Footer from './Footer';
import { Outlet, useNavigation, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function AppLayout() {
  const loading = useNavigation();
  const location = useLocation(); // Track route changes

  if (loading.state === "loading") return <h1>Loading...</h1>;

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        {/* Key changes trigger exit animations */}
        <div key={location.key}> 
          <Outlet />
        </div>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default AppLayout;