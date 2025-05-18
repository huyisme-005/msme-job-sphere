
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import JobFilter from '@/components/jobs/JobFilter';
import JobCard, { JobProps } from '@/components/jobs/JobCard';
import { Button } from '@/components/ui/button';

const Jobs: React.FC = () => {
  const [currentFilter, setCurrentFilter] = useState<string>('all');

  const allJobs: JobProps[] = [
    {
      id: '1',
      title: 'Senior Web Developer',
      company: 'Tech Solutions MSME',
      location: 'Mumbai, India',
      jobType: 'Full-time',
      salary: '₹12L - ₹18L',
      postedDate: '2 days ago',
      featured: true,
      tags: ['React', 'JavaScript', 'Node.js']
    },
    {
      id: '2',
      title: 'Marketing Specialist',
      company: 'Creative MSME Agency',
      location: 'Delhi, India',
      jobType: 'Full-time',
      salary: '₹8L - ₹12L',
      postedDate: '1 week ago',
      tags: ['Digital Marketing', 'Social Media', 'SEO']
    },
    {
      id: '3',
      title: 'Accounting Assistant',
      company: 'Financial MSME Services',
      location: 'Remote',
      jobType: 'Part-time',
      salary: '₹20K - ₹30K monthly',
      postedDate: '3 days ago',
      tags: ['Accounting', 'Excel', 'Tally']
    },
    {
      id: '4',
      title: 'Product Design Intern',
      company: 'Innovate MSME Studio',
      location: 'Bangalore, India',
      jobType: 'Internship',
      salary: '₹15K - ₹25K monthly',
      postedDate: '5 days ago',
      featured: true,
      tags: ['UI/UX', 'Figma', 'Adobe XD']
    },
    {
      id: '5',
      title: 'Full Stack Developer',
      company: 'Software MSME Solutions',
      location: 'Hyderabad, India',
      jobType: 'Full-time',
      salary: '₹10L - ₹16L',
      postedDate: '1 day ago',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: '6',
      title: 'Content Writer',
      company: 'Media MSME Group',
      location: 'Remote',
      jobType: 'Part-time',
      salary: '₹25K - ₹40K monthly',
      postedDate: '4 days ago',
      tags: ['Content Creation', 'SEO Writing', 'Editing']
    },
    {
      id: '7',
      title: 'HR Assistant',
      company: 'Services MSME Ltd',
      location: 'Pune, India',
      jobType: 'Full-time',
      salary: '₹4L - ₹6L',
      postedDate: '6 days ago',
      tags: ['Recruitment', 'Employee Relations', 'HRIS']
    },
    {
      id: '8',
      title: 'Sales Executive',
      company: 'Growth MSME Corp',
      location: 'Chennai, India',
      jobType: 'Full-time',
      salary: '₹6L - ₹10L + Commission',
      postedDate: '1 week ago',
      tags: ['B2B Sales', 'Lead Generation', 'CRM']
    },
    {
      id: '9',
      title: 'Data Analysis Intern',
      company: 'Analytics MSME',
      location: 'Bangalore, India',
      jobType: 'Internship',
      salary: '₹12K - ₹20K monthly',
      postedDate: '3 days ago',
      tags: ['Excel', 'SQL', 'Data Visualization']
    },
  ];

  const filterJobs = (jobType: string) => {
    setCurrentFilter(jobType);
  };

  const filteredJobs = currentFilter === 'all' 
    ? allJobs 
    : allJobs.filter(job => job.jobType.toLowerCase().includes(currentFilter.toLowerCase()));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-msme-purple to-msme-blue text-white py-10 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Find Your Perfect Job Match
              </h1>
              <p className="text-lg opacity-90 mb-0">
                Browse through hundreds of MSME job opportunities across India
              </p>
            </div>
          </div>
        </div>

        {/* Jobs Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Quick Filter Buttons */}
          <div className="mb-6 flex flex-wrap gap-2">
            <Button
              variant={currentFilter === 'all' ? 'default' : 'outline'}
              className={currentFilter === 'all' ? 'bg-msme-purple hover:bg-msme-darkPurple' : ''}
              onClick={() => filterJobs('all')}
            >
              All Jobs
            </Button>
            <Button
              variant={currentFilter === 'full-time' ? 'default' : 'outline'}
              className={currentFilter === 'full-time' ? 'bg-msme-purple hover:bg-msme-darkPurple' : ''}
              onClick={() => filterJobs('full-time')}
            >
              Full-time
            </Button>
            <Button
              variant={currentFilter === 'part-time' ? 'default' : 'outline'}
              className={currentFilter === 'part-time' ? 'bg-msme-purple hover:bg-msme-darkPurple' : ''}
              onClick={() => filterJobs('part-time')}
            >
              Part-time
            </Button>
            <Button
              variant={currentFilter === 'internship' ? 'default' : 'outline'}
              className={currentFilter === 'internship' ? 'bg-msme-purple hover:bg-msme-darkPurple' : ''}
              onClick={() => filterJobs('internship')}
            >
              Internship
            </Button>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar Filters */}
            <div className="lg:w-1/4">
              <JobFilter />
            </div>
            
            {/* Job Listings */}
            <div className="lg:w-3/4">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  {filteredJobs.length} {currentFilter !== 'all' ? currentFilter : ''} Jobs Available
                </h2>
              </div>
              
              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
                
                {filteredJobs.length === 0 && (
                  <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">No jobs found</h3>
                    <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                    <Button 
                      onClick={() => filterJobs('all')}
                      className="bg-msme-purple hover:bg-msme-darkPurple"
                    >
                      View All Jobs
                    </Button>
                  </div>
                )}
              </div>
              
              {filteredJobs.length > 0 && (
                <div className="mt-8 flex justify-center">
                  <Button variant="outline" className="border-msme-purple text-msme-purple hover:bg-msme-lightPurple/50">
                    Load More Jobs
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Jobs;
