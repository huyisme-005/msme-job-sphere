
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedJobs from '@/components/home/FeaturedJobs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import JobSuggestions from '@/components/jobs/JobSuggestions';
import SectionTutorial from '@/components/tutorial/SectionTutorial';

const Index: React.FC = () => {
  const categories = [
    { name: "Technology", count: 342, icon: "💻" },
    { name: "Marketing", count: 217, icon: "📊" },
    { name: "Finance", count: 185, icon: "💰" },
    { name: "Operations", count: 156, icon: "⚙️" },
    { name: "Sales", count: 143, icon: "📈" },
    { name: "Creative", count: 127, icon: "🎨" }
  ];
  
  // Tutorial steps for homepage
  const homeTutorialSteps = [
    {
      title: "Welcome to MSMEJobSphere",
      description: "Your gateway to careers in Micro, Small, and Medium Enterprises across India"
    },
    {
      title: "Quick Job Search",
      description: "Use the search form to quickly find jobs matching your skills and location"
    },
    {
      title: "Job Categories",
      description: "Browse jobs by category to find opportunities in your field"
    },
    {
      title: "Get Personalized Job Suggestions",
      description: "Upload your resume and skills to get AI-powered job recommendations"
    },
    {
      title: "Need Help?",
      description: "Click the AI Copilot icon in the bottom right corner for instant assistance"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <FeaturedJobs />
        
        {/* Job Categories */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Explore Jobs by Category
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Find opportunities in your field of expertise
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <Card key={index} className="hover:border-msme-purple border-2 transition-all duration-200">
                  <Link to={`/jobs`}>
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl mb-2">{category.icon}</div>
                      <h3 className="font-medium text-gray-900">{category.name}</h3>
                      <p className="text-sm text-gray-500">{category.count} jobs</p>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Job Suggestion Section */}
        <JobSuggestions />
        
        {/* MSME Solutions Preview */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-msme-purple to-msme-blue text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Specialized Recruitment Solutions for MSMEs
              </h2>
              <p className="text-lg mb-8">
                We understand the unique hiring challenges faced by Micro, Small and Medium Enterprises.
                Our tailored recruitment solutions help you find the perfect talent within your constraints.
              </p>
              <Link to="/msme-solutions">
                <Button size="lg" className="bg-white text-msme-purple hover:bg-gray-100">
                  Discover MSME Solutions
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Tutorial Component */}
        <SectionTutorial
          sectionId="home"
          steps={homeTutorialSteps}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
