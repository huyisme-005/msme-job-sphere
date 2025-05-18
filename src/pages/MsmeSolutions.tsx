
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SolutionsOverview from '@/components/msme/SolutionsOverview';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const MsmeSolutions: React.FC = () => {
  const testimonials = [
    {
      quote: "The specialized MSME recruitment solutions provided a perfect fit for our small business needs. We found top talent within our budget constraints.",
      author: "Rahul Mehta",
      position: "Founder, Agritech Solutions",
      image: null
    },
    {
      quote: "As a medium-sized manufacturing enterprise, finding specialized technical talent was challenging until we partnered with MSMEJobSphere.",
      author: "Priya Sharma",
      position: "HR Manager, PrecisionParts Ltd",
      image: null
    },
    {
      quote: "The flexible hiring options and cost-effective recruitment packages helped us scale our team efficiently during our growth phase.",
      author: "Ajay Kumar",
      position: "CEO, CloudStorage MSME",
      image: null
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹4,999",
      duration: "per month",
      description: "Perfect for small businesses just starting their hiring journey",
      features: [
        "5 active job postings",
        "Basic candidate matching",
        "Standard job listing visibility",
        "Email support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Growth",
      price: "₹9,999",
      duration: "per month",
      description: "Ideal for businesses with regular hiring needs",
      features: [
        "15 active job postings",
        "Advanced AI candidate matching",
        "Featured job listings",
        "Candidate skill assessment tools",
        "Priority email & phone support"
      ],
      cta: "Select Plan",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Contact us",
      duration: "",
      description: "Customized solutions for medium enterprises with diverse hiring needs",
      features: [
        "Unlimited job postings",
        "Premium candidate matching",
        "Dedicated recruitment consultant",
        "Custom hiring workflows",
        "Branded career portal",
        "24/7 priority support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-msme-darkPurple to-msme-blue text-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                MSME Recruitment Solutions
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Tailored hiring approaches designed specifically for the unique challenges faced by Micro, Small, and Medium Enterprises
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-msme-purple hover:bg-gray-100">
                  Schedule Consultation
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  View Plans
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-msme-purple mb-2">500+</div>
                <div className="text-gray-600">MSME Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-msme-purple mb-2">₹15L+</div>
                <div className="text-gray-600">Avg. Savings per MSME</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-msme-purple mb-2">85%</div>
                <div className="text-gray-600">Successful Placements</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-msme-purple mb-2">14 Days</div>
                <div className="text-gray-600">Avg. Time to Hire</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Solutions Overview Section */}
        <SolutionsOverview />
        
        {/* How It Works Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How Our MSME Solutions Work
              </h2>
              <p className="text-lg text-gray-600">
                A simple, transparent process designed to find the perfect talent match for your business
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-msme-purple/20"></div>
                
                {/* Timeline Items */}
                <div className="space-y-12">
                  {/* Step 1 */}
                  <div className="relative">
                    <div className="flex flex-col md:flex-row items-start">
                      <div className="flex md:justify-end md:w-1/2 md:pr-8">
                        <div className="md:text-right">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Consultation & Needs Assessment</h3>
                          <p className="text-gray-600">
                            We begin by understanding your business, culture, hiring challenges, and specific talent requirements through a personalized consultation.
                          </p>
                        </div>
                      </div>
                      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 mt-1.5">
                        <div className="h-7 w-7 rounded-full bg-msme-purple text-white flex items-center justify-center font-bold">
                          1
                        </div>
                      </div>
                      <div className="md:w-1/2 pl-10 md:pl-8 pt-0 md:pt-0"></div>
                    </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="relative">
                    <div className="flex flex-col md:flex-row items-start">
                      <div className="md:w-1/2 md:pr-8 pt-0 md:pt-0"></div>
                      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 mt-1.5">
                        <div className="h-7 w-7 rounded-full bg-msme-purple text-white flex items-center justify-center font-bold">
                          2
                        </div>
                      </div>
                      <div className="pl-10 md:w-1/2 md:pl-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Customized Solution Design</h3>
                        <p className="text-gray-600">
                          Our experts create a tailored recruitment strategy aligned with your budget, timeline, and specific hiring needs.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="relative">
                    <div className="flex flex-col md:flex-row items-start">
                      <div className="flex md:justify-end md:w-1/2 md:pr-8">
                        <div className="md:text-right">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Candidate Sourcing & Screening</h3>
                          <p className="text-gray-600">
                            We leverage our specialized talent pools and AI-powered matching technology to identify candidates who are the perfect fit for your MSME.
                          </p>
                        </div>
                      </div>
                      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 mt-1.5">
                        <div className="h-7 w-7 rounded-full bg-msme-purple text-white flex items-center justify-center font-bold">
                          3
                        </div>
                      </div>
                      <div className="md:w-1/2 pl-10 md:pl-8 pt-0 md:pt-0"></div>
                    </div>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="relative">
                    <div className="flex flex-col md:flex-row items-start">
                      <div className="md:w-1/2 md:pr-8 pt-0 md:pt-0"></div>
                      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 mt-1.5">
                        <div className="h-7 w-7 rounded-full bg-msme-purple text-white flex items-center justify-center font-bold">
                          4
                        </div>
                      </div>
                      <div className="pl-10 md:w-1/2 md:pl-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Interview & Selection Support</h3>
                        <p className="text-gray-600">
                          We facilitate the interview process, provide assessment tools, and help you make the right hiring decision with confidence.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 5 */}
                  <div className="relative">
                    <div className="flex flex-col md:flex-row items-start">
                      <div className="flex md:justify-end md:w-1/2 md:pr-8">
                        <div className="md:text-right">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Onboarding & Ongoing Support</h3>
                          <p className="text-gray-600">
                            Our relationship continues after placement with onboarding assistance and regular check-ins to ensure successful integration.
                          </p>
                        </div>
                      </div>
                      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 mt-1.5">
                        <div className="h-7 w-7 rounded-full bg-msme-purple text-white flex items-center justify-center font-bold">
                          5
                        </div>
                      </div>
                      <div className="md:w-1/2 pl-10 md:pl-8 pt-0 md:pt-0"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Button className="bg-msme-purple hover:bg-msme-darkPurple">
                Start Your Hiring Journey
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-12 md:py-16 bg-msme-lightPurple/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What MSMEs Say About Us
              </h2>
              <p className="text-lg text-gray-600">
                Success stories from businesses across India
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6">
                    <div className="text-msme-purple text-4xl font-serif mb-4">"</div>
                    <p className="text-gray-700 italic mb-6">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center">
                      <div className="h-12 w-12 bg-msme-lightPurple rounded-full flex items-center justify-center text-msme-purple font-bold mr-4">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Pricing */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Flexible Plans for Every MSME
              </h2>
              <p className="text-lg text-gray-600">
                Transparent pricing with no hidden fees
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className="relative">
                  {plan.popular && (
                    <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
                      <span className="inline-block bg-msme-purple text-white text-sm font-medium px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <Card className={`h-full ${plan.popular ? 'border-msme-purple shadow-lg' : ''}`}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {plan.name}
                      </h3>
                      <div className="mb-4">
                        <span className="text-3xl font-bold">{plan.price}</span>
                        {plan.duration && (
                          <span className="text-gray-500 ml-1">{plan.duration}</span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-6">
                        {plan.description}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="h-5 w-5 text-msme-purple mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className={`w-full ${plan.popular ? 'bg-msme-purple hover:bg-msme-darkPurple' : ''}`}>
                        {plan.cta}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-msme-purple text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your MSME Hiring?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Schedule a free consultation with our MSME recruitment specialists and discover how we can help you find the perfect talent.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-msme-purple hover:bg-gray-100">
                  Schedule Free Consultation
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Contact Sales
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

export default MsmeSolutions;
