
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Upload } from 'lucide-react';

const ResumeUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type === 'application/pdf' || selectedFile.name.endsWith('.docx')) {
        setFile(selectedFile);
      } else {
        toast({
          title: "Invalid file format",
          description: "Please upload a PDF or DOCX file",
          variant: "destructive",
        });
        e.target.value = '';
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    
    setIsUploading(true);
    
    try {
      // In a real implementation, this would upload to a server
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Resume uploaded successfully!",
        description: "You'll be notified of matching jobs soon.",
      });
      
      setFile(null);
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Upload Your Resume</h3>
      <p className="text-gray-600 mb-4">
        Upload your resume to get matched with relevant job opportunities
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="resume">Resume (PDF or DOCX)</Label>
          <Input
            id="resume"
            type="file"
            accept=".pdf,.docx"
            onChange={handleFileChange}
            required
            className="cursor-pointer"
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={!file || isUploading}
          className="bg-msme-purple hover:bg-msme-darkPurple w-full"
        >
          <Upload className="mr-2 h-4 w-4" />
          {isUploading ? "Uploading..." : "Upload Resume"}
        </Button>
      </form>
      
      {file && (
        <div className="mt-4 p-3 bg-msme-lightPurple/20 rounded-md">
          <p className="text-sm font-medium">Selected file: {file.name}</p>
        </div>
      )}
    </div>
  );
};

export default ResumeUpload;
