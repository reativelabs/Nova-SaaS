import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import ProFeature from './pages/ProFeature';

import DashboardLayout from './components/DashboardLayout';
import DashboardOverview from './pages/DashboardOverview';

import ScrollToTop from './components/ScrollToTop';

const Layout = ({ children }) => {
  const location = useLocation();
  // Don't show Navbar/Footer on Dashboard, Login, Signup
  const isSpecialPage = ['/login', '/signup'].includes(location.pathname) || location.pathname.startsWith('/dashboard');

  return (
    <div className="app">
      {!isSpecialPage && <Navbar />}
      <main>
        {children}
      </main>
      {!isSpecialPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<ProFeature />} />
          <Route path="/contact" element={<ProFeature />} />
          <Route path="/blog" element={<ProFeature />} />
          <Route path="/blog/:id" element={<ProFeature />} />
          <Route path="/login" element={<ProFeature />} />
          <Route path="/signup" element={<ProFeature />} />


          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout><DashboardOverview /></DashboardLayout>} />
          <Route path="/dashboard/team" element={<DashboardLayout><ProFeature /></DashboardLayout>} />
          <Route path="/dashboard/analytics" element={<DashboardLayout><ProFeature /></DashboardLayout>} />
          <Route path="/dashboard/settings" element={<DashboardLayout><ProFeature /></DashboardLayout>} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
