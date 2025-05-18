
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search, MapPin, Briefcase } from 'lucide-react';

const Hero: React.FC = () => {
  const handleBrowseJobs = () => {
    // Navigate to jobs page
    window.location.href = '/jobs';
  };

  return (
    <section className="relative bg-gradient-to-r from-msme-purple to-msme-blue py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Hero Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Find Your Perfect Job Match in MSME Sector
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Connect with growing Micro, Small, and Medium Enterprises offering diverse career opportunities across India
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-white text-msme-purple hover:bg-gray-100"
                onClick={handleBrowseJobs}
              >
                <Briefcase className="mr-2 h-5 w-5" />
                Browse Jobs
              </Button>
              <Link to="/msme-solutions">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white/10"
                >
                  MSME Solutions
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Job Search Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Quick Job Search
            </h2>
            <form className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Job title or keywords"
                  className="pl-10 w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-msme-purple"
                />
              </div>
              
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Location (City or Remote)"
                  className="pl-10 w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-msme-purple"
                />
              </div>
              
              <Button className="w-full bg-msme-purple hover:bg-msme-darkPurple">
                Search Jobs
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
