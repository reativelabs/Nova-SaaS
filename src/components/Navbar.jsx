import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Briefcase } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-primary after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary' : 'text-text-main hover:text-primary';
  };

  return (
    <nav className="sticky top-0 bg-white/95 backdrop-blur-md z-50 shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-2xl font-extrabold text-primary flex items-center gap-2">
          <span className="flex items-center text-accent"><Briefcase size={32} /></span>
          <span>Nova<span className="text-accent">SaaS</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className={`font-medium relative transition-colors ${isActive('/')}`}>Home</Link>
          <Link to="/features" className={`font-medium relative transition-colors ${isActive('/features')}`}>Features</Link>
          <Link to="/pricing" className={`font-medium relative transition-colors ${isActive('/pricing')}`}>Pricing</Link>
          <Link to="/blog" className={`font-medium relative transition-colors ${isActive('/blog')}`}>Blog</Link>
          <Link to="/contact" className={`font-medium relative transition-colors ${isActive('/contact')}`}>Contact</Link>
          <Link to="/dashboard" className={`font-medium relative transition-colors ${isActive('/dashboard')}`}>Dashboard</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="font-medium text-text-main hover:text-primary transition-colors">
            Login
          </Link>
          <Link to="/signup" className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-200 border-none bg-primary text-white hover:bg-primary-hover hover:-translate-y-px hover:shadow-md">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="cursor-pointer text-primary md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white p-4 shadow-md flex flex-col gap-4 md:hidden">
          <Link to="/" className="font-medium py-2 border-b border-bg-light text-text-main hover:text-primary" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/features" className="font-medium py-2 border-b border-bg-light text-text-main hover:text-primary" onClick={() => setIsOpen(false)}>Features</Link>
          <Link to="/pricing" className="font-medium py-2 border-b border-bg-light text-text-main hover:text-primary" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link to="/blog" className="font-medium py-2 border-b border-bg-light text-text-main hover:text-primary" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/contact" className="font-medium py-2 border-b border-bg-light text-text-main hover:text-primary" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/dashboard" className="font-medium py-2 border-b border-bg-light text-text-main hover:text-primary" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link to="/login" className="font-medium py-2 border-b border-bg-light text-text-main hover:text-primary" onClick={() => setIsOpen(false)}>Login</Link>
          <Link to="/signup" className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-200 border-none bg-primary text-white hover:bg-primary-hover hover:-translate-y-px hover:shadow-md w-full mt-4 text-center" onClick={() => setIsOpen(false)}>
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
