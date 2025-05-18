
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Search } from 'lucide-react';

interface JobFiltersProps {
  onFilterChange?: (filters: any) => void;
}

const JobFilter: React.FC<JobFiltersProps> = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobType, setJobType] = useState<string[]>([]);
  const [location, setLocation] = useState('');
  const [salaryRange, setSalaryRange] = useState([0, 100]);
  const [remoteOnly, setRemoteOnly] = useState(false);
  
  const handleJobTypeToggle = (type: string) => {
    setJobType(prevTypes => 
      prevTypes.includes(type)
        ? prevTypes.filter(t => t !== type)
        : [...prevTypes, type]
    );
  };
  
  const handleFilter = () => {
    if (onFilterChange) {
      onFilterChange({
        searchTerm,
        jobType,
        location,
        salaryRange,
        remoteOnly
      });
    }
  };
  
  const handleReset = () => {
    setSearchTerm('');
    setJobType([]);
    setLocation('');
    setSalaryRange([0, 100]);
    setRemoteOnly(false);
    
    if (onFilterChange) {
      onFilterChange({});
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Job title, skills, or keywords"
            className="pl-10 pr-4 py-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-msme-purple"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Job Type</h3>
        <div className="space-y-2">
          {['Full-time', 'Part-time', 'Internship'].map((type) => (
            <div key={type} className="flex items-center">
              <input
                id={`jobtype-${type}`}
                type="checkbox"
                className="h-4 w-4 text-msme-purple rounded border-gray-300 focus:ring-msme-purple"
                checked={jobType.includes(type)}
                onChange={() => handleJobTypeToggle(type)}
              />
              <label htmlFor={`jobtype-${type}`} className="ml-2 text-sm text-gray-700">
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Location</h3>
        <select
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-msme-purple"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Chennai">Chennai</option>
          <option value="Pune">Pune</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Remote">Remote</option>
        </select>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-medium">Salary Range</h3>
          <span className="text-sm text-gray-500">
            ₹{salaryRange[0]}L - ₹{salaryRange[1]}L
          </span>
        </div>
        <Slider 
          defaultValue={salaryRange} 
          max={100} 
          step={5}
          onValueChange={setSalaryRange as any}
        />
      </div>
      
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <Label htmlFor="remote-switch" className="text-lg font-medium">
            Remote Only
          </Label>
          <Switch 
            id="remote-switch" 
            checked={remoteOnly}
            onCheckedChange={setRemoteOnly}
          />
        </div>
      </div>
      
      <div className="flex flex-col space-y-2">
        <Button 
          className="w-full bg-msme-purple hover:bg-msme-darkPurple"
          onClick={handleFilter}
        >
          Apply Filters
        </Button>
        <Button 
          variant="outline" 
          className="w-full"
          onClick={handleReset}
        >
          Reset Filters
        </Button>
      </div>
    </div>
  );
};

export default JobFilter;
