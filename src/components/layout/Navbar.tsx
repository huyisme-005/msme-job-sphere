
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import AuthDialog from '@/components/auth/AuthDialog';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const location = useLocation();
  const { toast } = useToast();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/jobs', label: 'Jobs' },
    { path: '/msme-solutions', label: 'MSME Solutions' },
    { path: '/about', label: 'About' },
  ];

  const handleAuthClick = (action: 'Sign In' | 'Register') => {
    setAuthMode(action === 'Sign In' ? 'signin' : 'signup');
    setAuthDialogOpen(true);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-bold text-xl text-msme-purple">MSME<span className="text-msme-blue">JobSphere</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-msme-purple font-semibold'
                    : 'text-gray-600 hover:text-msme-purple hover:bg-msme-lightPurple/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline" 
              className="border-msme-purple text-msme-purple hover:bg-msme-lightPurple"
              onClick={() => handleAuthClick('Sign In')}
            >
              Sign In
            </Button>
            <Button 
              className="bg-msme-purple hover:bg-msme-darkPurple"
              onClick={() => handleAuthClick('Register')}
            >
              Register
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white pb-3 px-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-msme-lightPurple text-msme-purple'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-2">
              <Button 
                variant="outline" 
                className="border-msme-purple text-msme-purple"
                onClick={() => {
                  handleAuthClick('Sign In');
                  setMobileMenuOpen(false);
                }}
              >
                Sign In
              </Button>
              <Button 
                className="bg-msme-purple hover:bg-msme-darkPurple"
                onClick={() => {
                  handleAuthClick('Register');
                  setMobileMenuOpen(false);
                }}
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Auth Dialog */}
      <AuthDialog 
        open={authDialogOpen}
        onOpenChange={setAuthDialogOpen}
      />
    </nav>
  );
};

export default Navbar;
