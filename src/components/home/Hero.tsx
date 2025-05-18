
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-msme-lightPurple to-msme-lightBlue py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="animate-fade-in text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-msme-purple">Connecting</span> Talent with MSME Opportunities
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 animate-fade-in" style={{animationDelay: "0.2s"}}>
            Finding the perfect job match for job seekers and empowering Micro, Small, and Medium Enterprises with specialized recruitment solutions.
          </p>
          
          <div className="bg-white rounded-lg shadow-xl p-4 md:p-6 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: "0.3s"}}>
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
              <div className="flex-grow">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Job title, skills, or keywords"
                    className="pl-10 pr-4 py-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-msme-purple"
                  />
                </div>
              </div>
              <div className="flex-grow md:max-w-xs">
                <select
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-msme-purple"
                >
                  <option value="">All job types</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="internship">Internship</option>
                </select>
              </div>
              <Button className="bg-msme-purple hover:bg-msme-darkPurple py-6">
                Search Jobs
              </Button>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center space-x-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Link to="/jobs">
              <Button variant="outline" className="border-msme-purple text-msme-purple hover:bg-msme-lightPurple">
                Browse All Jobs
              </Button>
            </Link>
            <Link to="/msme-solutions">
              <Button className="bg-msme-blue hover:bg-blue-600">
                MSME Solutions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
