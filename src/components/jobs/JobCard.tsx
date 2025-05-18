
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Briefcase, Users, Clock } from 'lucide-react';

export interface JobProps {
  id: string;
  title: string;
  company: string;
  location: string;
  jobType: 'Full-time' | 'Part-time' | 'Internship';
  salary?: string;
  postedDate: string;
  logo?: string;
  featured?: boolean;
  tags?: string[];
}

interface JobCardProps {
  job: JobProps;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const getJobTypeColor = (type: string) => {
    switch (type) {
      case 'Full-time':
        return 'bg-green-100 text-green-800';
      case 'Part-time':
        return 'bg-blue-100 text-blue-800';
      case 'Internship':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Link to={`/job/${job.id}`}>
      <Card className="job-card hover:border-msme-purple transition-all duration-200">
        {job.featured && (
          <div className="featured-badge absolute -top-2 right-4 text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
        <CardContent className="p-5">
          <div className="flex flex-col sm:flex-row">
            <div className="sm:mr-4 mb-4 sm:mb-0 flex items-center justify-center sm:justify-start">
              {job.logo ? (
                <img
                  src={job.logo}
                  alt={`${job.company} logo`}
                  className="h-12 w-12 rounded-md object-contain"
                />
              ) : (
                <div className="h-12 w-12 bg-msme-lightPurple rounded-md flex items-center justify-center text-msme-purple font-bold">
                  {job.company.charAt(0)}
                </div>
              )}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-gray-900 mb-1">{job.title}</h3>
              <p className="text-gray-600 mb-3">{job.company}</p>
              
              <div className="flex flex-wrap gap-2 mb-3">
                <div className="flex items-center text-gray-500 text-sm">
                  <Briefcase size={14} className="mr-1" />
                  <span className={`px-2 py-1 rounded-full ${getJobTypeColor(job.jobType)}`}>
                    {job.jobType}
                  </span>
                </div>
                
                <div className="flex items-center text-gray-500 text-sm">
                  <Users size={14} className="mr-1" />
                  <span>{job.location}</span>
                </div>
                
                {job.salary && (
                  <div className="flex items-center text-gray-500 text-sm">
                    <span>{job.salary}</span>
                  </div>
                )}
                
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock size={14} className="mr-1" />
                  <span>{job.postedDate}</span>
                </div>
              </div>
              
              {job.tags && job.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-3">
                  {job.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default JobCard;
