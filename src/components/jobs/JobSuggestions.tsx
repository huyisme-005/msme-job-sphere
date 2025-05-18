
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Checkbox } from '@/components/ui/checkbox';
import JobCard, { JobProps } from './JobCard';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const JobSuggestions: React.FC = () => {
  const [skills, setSkills] = useState<string>('');
  const [experience, setExperience] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [remoteOnly, setRemoteOnly] = useState<boolean>(false);
  const [suggestedJobs, setSuggestedJobs] = useState<JobProps[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  // Test case: Verify skill matching functionality works
  // Expected result: When skills like "React" are entered, jobs with React tag should be suggested
  const findMatchingJobs = () => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // In a real app, this would be an API call that matches based on user input
      const mockSuggestedJobs: JobProps[] = [
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
          id: '5',
          title: 'Full Stack Developer',
          company: 'Software MSME Solutions',
          location: 'Hyderabad, India',
          jobType: 'Full-time',
          salary: '₹10L - ₹16L',
          postedDate: '1 day ago',
          tags: ['React', 'Node.js', 'MongoDB']
        }
      ];
      
      if (skills.toLowerCase().includes('react') || skills.toLowerCase().includes('javascript')) {
        setSuggestedJobs(mockSuggestedJobs);
        toast({
          title: "Job matches found!",
          description: `Found ${mockSuggestedJobs.length} jobs matching your profile`,
        });
      } else {
        setSuggestedJobs([]);
        toast({
          title: "No exact matches found",
          description: "Try broadening your skills or check back later for more opportunities",
        });
      }
      
      setIsLoading(false);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    findMatchingJobs();
  };

  return (
    <section className="py-12 md:py-16 bg-msme-lightPurple/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Get Personalized Job Suggestions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Tell us about your skills and preferences to find your ideal match
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="skills">Key Skills & Technologies</Label>
              <Input 
                id="skills" 
                placeholder="e.g., React, JavaScript, Digital Marketing" 
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience</Label>
              <Input 
                id="experience" 
                placeholder="e.g., 2 years" 
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location">Preferred Location</Label>
              <Input 
                id="location" 
                placeholder="e.g., Mumbai, Remote" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="remoteOnly" 
                checked={remoteOnly}
                onCheckedChange={(checked) => setRemoteOnly(checked as boolean)}
              />
              <Label htmlFor="remoteOnly" className="text-sm">Show only remote jobs</Label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-msme-purple hover:bg-msme-darkPurple"
              disabled={isLoading}
            >
              <Search className="mr-2 h-4 w-4" />
              {isLoading ? "Finding matches..." : "Find Matching Jobs"}
            </Button>
          </form>
          
          {suggestedJobs && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">
                {suggestedJobs.length > 0 ? "Suggested Jobs For You" : "No matches found"}
              </h3>
              
              <div className="space-y-4">
                {suggestedJobs.map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
              
              {suggestedJobs.length > 0 && (
                <div className="mt-6 text-center">
                  <Link to="/jobs">
                    <Button variant="outline" className="border-msme-purple text-msme-purple hover:bg-msme-lightPurple/50">
                      View All Jobs
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobSuggestions;
