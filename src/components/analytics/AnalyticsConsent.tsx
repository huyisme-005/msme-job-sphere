
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { analytics } from '@/utils/analytics';

const AnalyticsConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Check if user has already made a choice
    const hasChosenAnalytics = localStorage.getItem('analytics_choice_made');
    
    if (!hasChosenAnalytics) {
      // Show consent banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAccept = () => {
    analytics.setTrackingEnabled(true);
    localStorage.setItem('analytics_choice_made', 'true');
    setIsVisible(false);
  };
  
  const handleDecline = () => {
    analytics.setTrackingEnabled(false);
    localStorage.setItem('analytics_choice_made', 'true');
    setIsVisible(false);
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg border-t border-gray-200 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-medium">Help us improve MSMEJobSphere</h3>
          <p className="text-gray-600">
            We'd like to collect anonymous usage data to improve your experience. 
            This helps us understand how our site is used.
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={handleDecline}
          >
            Decline
          </Button>
          <Button
            className="bg-msme-purple hover:bg-msme-darkPurple"
            onClick={handleAccept}
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsConsent;
