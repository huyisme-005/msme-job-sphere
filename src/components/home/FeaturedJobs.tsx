
import React from 'react';
import { Button } from '@/components/ui/button';
import JobCard, { JobProps } from '@/components/jobs/JobCard';
import { Link } from 'react-router-dom';

const featuredJobs: JobProps[] = [
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
  }
];

const FeaturedJobs: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Job Opportunities</h2>
            <p className="mt-2 text-gray-600">Explore top positions from MSMEs across India</p>
          </div>
          <Link to="/jobs" className="mt-4 md:mt-0">
            <Button variant="outline" className="border-msme-purple text-msme-purple hover:bg-msme-lightPurple/50">
              View All Jobs
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">Looking for specialized talent for your MSME?</p>
          <Link to="/msme-solutions">
            <Button className="bg-msme-purple hover:bg-msme-darkPurple">
              Explore MSME Hiring Solutions
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
