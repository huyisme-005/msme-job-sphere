
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedJobs from '@/components/home/FeaturedJobs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  const stats = [
    { number: "2,500+", label: "Active Job Listings" },
    { number: "10,000+", label: "Registered Job Seekers" },
    { number: "500+", label: "MSME Partners" },
    { number: "85%", label: "Successful Placements" }
  ];

  const categories = [
    { name: "Technology", count: 342, icon: "💻" },
    { name: "Marketing", count: 217, icon: "📊" },
    { name: "Finance", count: 185, icon: "💰" },
    { name: "Operations", count: 156, icon: "⚙️" },
    { name: "Sales", count: 143, icon: "📈" },
    { name: "Creative", count: 127, icon: "🎨" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <FeaturedJobs />
        
        {/* Stats Section */}
        <section className="py-12 md:py-16 bg-msme-lightBlue/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                The Leading MSME Job Platform in India
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Connecting talented professionals with growing enterprises across the country
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="text-3xl font-bold text-msme-purple mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
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
        
        {/* Testimonials Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Success Stories
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Hear from MSMEs and professionals who found their perfect match
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-msme-lightPurple rounded-full flex items-center justify-center text-msme-purple font-bold mr-4">
                    VP
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Vikram Patel</h3>
                    <p className="text-gray-600">CEO, CloudTech Solutions</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "As a growing tech startup, finding specialized talent within our budget was challenging. MSMEJobSphere connected us with exceptional developers who understood the startup environment and helped us scale rapidly."
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-msme-lightPurple rounded-full flex items-center justify-center text-msme-purple font-bold mr-4">
                    AS
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Ananya Sharma</h3>
                    <p className="text-gray-600">Marketing Specialist</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "I was looking for opportunities in growing companies where I could make a real impact. Through MSMEJobSphere, I found a perfect match with a creative agency that valued my skills and offered growth opportunities I wouldn't find in larger corporations."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
