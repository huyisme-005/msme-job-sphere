
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin, Calendar, Clock, Users, Building, CheckCircle } from 'lucide-react';

const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Normally would fetch job data based on ID
  // For demo purposes, we're using a static job
  const job = {
    id: id || '1',
    title: 'Senior Web Developer',
    company: 'Tech Solutions MSME',
    location: 'Mumbai, India',
    jobType: 'Full-time',
    salary: '₹12L - ₹18L per annum',
    postedDate: '2 days ago',
    experience: '3-5 years',
    deadline: 'June 30, 2025',
    companySize: '25-50 employees',
    industry: 'Information Technology',
    description: `
      <p>We are looking for a skilled Senior Web Developer to join our growing MSME. You will be responsible for developing and maintaining web applications, collaborating with cross-functional teams, and mentoring junior developers.</p>
      <p>This is an exciting opportunity to make a significant impact in a small but rapidly expanding company where your contributions will be highly visible.</p>
    `,
    responsibilities: [
      'Design, develop, and maintain web applications using modern JavaScript frameworks',
      'Collaborate with designers, product managers, and other developers to create high-quality products',
      'Write clean, maintainable, and efficient code',
      'Identify and fix performance bottlenecks and bugs',
      'Mentor junior developers and participate in code reviews',
      'Stay updated with emerging technologies and industry trends'
    ],
    requirements: [
      '3-5 years of experience in web development',
      'Proficient in React, JavaScript, HTML5, and CSS3',
      'Experience with Node.js and RESTful APIs',
      'Understanding of server-side rendering and state management',
      'Familiarity with version control systems (Git)',
      'Good problem-solving skills and attention to detail',
      'Excellent communication and teamwork abilities'
    ],
    benefits: [
      'Competitive salary and performance bonuses',
      'Flexible working hours and remote work options',
      'Health insurance coverage',
      'Professional development opportunities',
      'Annual team retreats',
      'Modern office in central Mumbai'
    ],
    tags: ['React', 'JavaScript', 'Node.js', 'RESTful API', 'HTML5', 'CSS3']
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Job Header */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row">
                  <div className="md:mr-6 mb-4 md:mb-0">
                    <div className="h-16 w-16 bg-msme-lightPurple rounded-md flex items-center justify-center text-msme-purple text-xl font-bold">
                      {job.company.charAt(0)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
                      <Badge className="bg-green-100 text-green-800 md:ml-2 self-start md:self-auto mt-2 md:mt-0">
                        {job.jobType}
                      </Badge>
                    </div>
                    <p className="text-lg text-gray-600 mb-4">{job.company}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-2" />
                        <span>{job.experience} experience</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Apply by {job.deadline}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>Posted {job.postedDate}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex flex-wrap gap-2">
                      {job.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-msme-lightPurple text-msme-purple">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                      <Button className="bg-msme-purple hover:bg-msme-darkPurple mr-4">
                        Apply Now
                      </Button>
                      <Button variant="outline" className="border-msme-purple text-msme-purple hover:bg-msme-lightPurple/50">
                        Save Job
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Job Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Job Description</h2>
                    <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: job.description }} />
                    
                    <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Responsibilities</h2>
                    <ul className="space-y-2">
                      {job.responsibilities.map((item, index) => (
                        <li key={index} className="flex">
                          <CheckCircle className="h-5 w-5 text-msme-purple mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Requirements</h2>
                    <ul className="space-y-2">
                      {job.requirements.map((item, index) => (
                        <li key={index} className="flex">
                          <CheckCircle className="h-5 w-5 text-msme-purple mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Benefits</h2>
                    <ul className="space-y-2">
                      {job.benefits.map((item, index) => (
                        <li key={index} className="flex">
                          <CheckCircle className="h-5 w-5 text-msme-purple mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Ready to Apply?</h2>
                  <p className="text-gray-700 mb-6">
                    Don't miss this opportunity to work with a growing MSME and make a real impact.
                  </p>
                  <Button size="lg" className="bg-msme-purple hover:bg-msme-darkPurple">
                    Apply for this Position
                  </Button>
                </div>
              </div>
              
              {/* Side Content */}
              <div>
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Job Summary</h2>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-500">Salary Range</div>
                        <div className="font-medium">{job.salary}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Job Type</div>
                        <div className="font-medium">{job.jobType}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Experience Required</div>
                        <div className="font-medium">{job.experience}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Application Deadline</div>
                        <div className="font-medium">{job.deadline}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Company Information</h2>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-500">Company Size</div>
                        <div className="flex items-center font-medium">
                          <Users className="h-4 w-4 mr-2 text-gray-400" />
                          {job.companySize}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Industry</div>
                        <div className="flex items-center font-medium">
                          <Building className="h-4 w-4 mr-2 text-gray-400" />
                          {job.industry}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Location</div>
                        <div className="flex items-center font-medium">
                          <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button variant="outline" className="w-full">
                        View Company Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JobDetail;
