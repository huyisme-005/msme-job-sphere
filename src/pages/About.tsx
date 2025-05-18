
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About: React.FC = () => {
  const team = [
    {
      name: 'Anjali Patel',
      position: 'Founder & CEO',
      bio: 'Former HR Director with 15+ years of experience in recruitment and MSME consulting.',
      image: null
    },
    {
      name: 'Vikram Singh',
      position: 'CTO',
      bio: 'Tech innovator with expertise in AI-powered recruitment technologies and matching algorithms.',
      image: null
    },
    {
      name: 'Priya Sharma',
      position: 'Head of MSME Relations',
      bio: 'Specialist in understanding and addressing the unique hiring challenges of small businesses.',
      image: null
    },
    {
      name: 'Rahul Kapoor',
      position: 'Lead Recruitment Consultant',
      bio: 'Expert in connecting top talent with the right opportunities in growing enterprises.',
      image: null
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-msme-purple to-msme-blue text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About MSMEJobSphere
              </h1>
              <p className="text-xl opacity-90">
                Bridging the talent gap for Micro, Small, and Medium Enterprises across India
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
                <div className="md:w-1/2">
                  <div className="aspect-video bg-msme-lightPurple rounded-lg flex items-center justify-center">
                    <span className="text-4xl">🚀</span>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
                  <p className="text-gray-700 mb-4">
                    MSMEJobSphere was founded in 2020 with a clear mission: to address the unique recruitment challenges faced by Micro, Small, and Medium Enterprises in India.
                  </p>
                  <p className="text-gray-700">
                    Our founder, Anjali Patel, witnessed firsthand how MSMEs struggled to compete with larger corporations for talent while working as an HR Director. She envisioned a specialized platform that would level the playing field, connecting growing businesses with professionals seeking meaningful opportunities.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2">
                  <div className="aspect-video bg-msme-lightBlue rounded-lg flex items-center justify-center">
                    <span className="text-4xl">🔎</span>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Approach</h2>
                  <p className="text-gray-700 mb-4">
                    We believe that MSMEs deserve access to the same quality of talent as larger organizations, but with recruitment solutions tailored to their specific needs and budget constraints.
                  </p>
                  <p className="text-gray-700">
                    By combining technology with personalized service, we've created a platform that effectively matches skilled professionals with the right opportunities in growing enterprises, fostering mutual growth and success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision Section */}
        <section className="py-12 md:py-16 bg-msme-lightPurple/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">🎯</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                  <p className="text-gray-700">
                    To empower MSMEs with accessible, affordable, and effective recruitment solutions that enable them to build strong teams and grow their businesses.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">👁️</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                  <p className="text-gray-700">
                    To become the leading job platform for MSMEs across India, fostering a thriving ecosystem where talented professionals and growing businesses come together to create mutual success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Core Values Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-msme-lightPurple h-16 w-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  💬
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Transparency</h3>
                <p className="text-sm text-gray-600">
                  Clear and honest communication with all stakeholders
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-msme-lightPurple h-16 w-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  ✨
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Quality</h3>
                <p className="text-sm text-gray-600">
                  Commitment to excellence in every match we make
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-msme-lightPurple h-16 w-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  🤝
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Partnership</h3>
                <p className="text-sm text-gray-600">
                  Building lasting relationships with businesses and talent
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-msme-lightPurple h-16 w-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  💡
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Innovation</h3>
                <p className="text-sm text-gray-600">
                  Constantly improving our solutions to serve MSMEs better
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Meet the Team Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600">
                The passionate professionals behind MSMEJobSphere
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="h-24 w-24 bg-msme-lightPurple rounded-full flex items-center justify-center text-xl font-bold text-msme-purple mx-auto mb-4">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-sm text-msme-purple mb-3">{member.position}</p>
                    <p className="text-sm text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Join Us CTA Section */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-msme-purple to-msme-blue text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join the MSMEJobSphere Community
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Whether you're a job seeker looking for meaningful opportunities or an MSME seeking the perfect talent, we're here to help you succeed.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-msme-purple hover:bg-gray-100">
                  For Job Seekers
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  For Employers
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
