
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const SolutionsOverview: React.FC = () => {
  const solutions = [
    {
      title: "Personalized Recruitment",
      description: "Tailored hiring solutions designed specifically for MSME needs and budget constraints.",
      features: [
        "Customized job listings",
        "Dedicated recruitment consultant",
        "Budget-friendly packages"
      ],
      icon: "👥"
    },
    {
      title: "Skill-Matching Technology",
      description: "AI-powered candidate matching that helps identify the perfect talent for your business requirements.",
      features: [
        "Advanced algorithm matching",
        "Skill assessment tools",
        "Behavioral analysis"
      ],
      icon: "🔍"
    },
    {
      title: "MSME Growth Support",
      description: "Comprehensive support for growing businesses, from temporary staffing to specialized roles.",
      features: [
        "Flexible hiring models",
        "Temporary-to-permanent options",
        "Specialized talent pools"
      ],
      icon: "📈"
    },
    {
      title: "Cost-Effective Solutions",
      description: "Pay only for what you need with transparent pricing and flexible recruitment packages.",
      features: [
        "Pay-per-hire options",
        "Subscription plans",
        "No hidden charges"
      ],
      icon: "💰"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-msme-lightPurple/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-msme-purple/20 text-msme-purple font-medium text-sm mb-3">
            MSME RECRUITMENT SOLUTIONS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Specialized Hiring Solutions for Micro, Small & Medium Enterprises
          </h2>
          <p className="text-lg text-gray-700">
            Our tailored recruitment approaches address the unique challenges faced by MSMEs, helping you find the right talent within your budget constraints.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <Card key={index} className="border-2 hover:border-msme-purple transition-all duration-200">
              <CardContent className="p-6">
                <div className="text-3xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-5">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-msme-purple mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to find the perfect talent for your MSME?
          </h3>
          <p className="text-gray-600 mb-6">
            Schedule a free consultation with our MSME recruitment specialists to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-msme-purple hover:bg-msme-darkPurple">
              Get Started
            </Button>
            <Button variant="outline" className="border-msme-purple text-msme-purple hover:bg-msme-lightPurple/50">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;
