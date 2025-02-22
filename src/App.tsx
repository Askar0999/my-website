import { Route, RouterProvider, Routes, useLocation } from 'react-router-dom'
import { routes } from './routes'
import { AnimatePresence } from 'framer-motion'
import HomePage from './pages/home.page';
import AboutPage from './pages/about.page';

function App() {
	return <RouterProvider router={routes} />
}



function AnimatePresenca () {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App
