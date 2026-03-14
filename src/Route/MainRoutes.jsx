import { Route, Routes } from 'react-router-dom'
import  { Suspense, lazy } from 'react';

const Home = lazy(() => import('../HomeComponents/Home'));
const Portfolio = lazy(() => import('../portfolio/Portfolio'));
const AboutUs = lazy(() => import('../HomeComponents/Aboutus'));

const MainRoutes = () => {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-yellow-400 text-xl font-poppins">Loading VzualVibe...</p>
        </div>
      </div>
    }>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>
    </Suspense>
  )
}

export default MainRoutes
