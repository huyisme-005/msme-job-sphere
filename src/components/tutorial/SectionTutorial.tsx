
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, PlayCircle, ChevronRight, ChevronLeft } from 'lucide-react';

interface Step {
  title: string;
  description: string;
  image?: string;
}

interface SectionTutorialProps {
  sectionId: string; // Identifier for the section (e.g., "home", "jobs", "msme-solutions")
  steps: Step[];
  onComplete?: () => void;
}

const SectionTutorial: React.FC<SectionTutorialProps> = ({ sectionId, steps, onComplete }) => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [hasSeenTutorial, setHasSeenTutorial] = useState(false);

  useEffect(() => {
    // Check if the user has seen this tutorial before
    const seenTutorials = localStorage.getItem('seen_tutorials');
    if (seenTutorials) {
      const tutorials = JSON.parse(seenTutorials);
      if (tutorials.includes(sectionId)) {
        setHasSeenTutorial(true);
      }
    }
  }, [sectionId]);

  const handleComplete = () => {
    // Save that user has seen this tutorial
    const seenTutorials = localStorage.getItem('seen_tutorials');
    let tutorials = [];
    if (seenTutorials) {
      tutorials = JSON.parse(seenTutorials);
    }
    if (!tutorials.includes(sectionId)) {
      tutorials.push(sectionId);
      localStorage.setItem('seen_tutorials', JSON.stringify(tutorials));
    }
    
    setHasSeenTutorial(true);
    setOpen(false);
    if (onComplete) {
      onComplete();
    }
  };

  const handleStartTutorial = () => {
    setStep(0);
    setOpen(true);
  };

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const currentStep = steps[step];

  return (
    <>
      {!hasSeenTutorial && (
        <div className="fixed bottom-4 right-4 z-40">
          <Button
            className="flex items-center gap-2 bg-msme-purple hover:bg-msme-darkPurple shadow-lg"
            onClick={handleStartTutorial}
          >
            <PlayCircle className="h-5 w-5" />
            <span>Take a Quick Tour</span>
          </Button>
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{currentStep?.title}</DialogTitle>
            <DialogDescription>
              {currentStep?.description}
            </DialogDescription>
          </DialogHeader>
          
          {currentStep?.image && (
            <div className="p-4 flex justify-center">
              <img 
                src={currentStep.image} 
                alt={`Step ${step + 1}`} 
                className="max-h-64 rounded-md shadow-md" 
              />
            </div>
          )}
          
          <DialogFooter className="flex justify-between">
            <div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleComplete}
              >
                Skip Tutorial
              </Button>
            </div>
            <div className="flex gap-2 items-center">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrev}
                disabled={step === 0}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              <span className="text-sm text-gray-500">
                {step + 1} / {steps.length}
              </span>
              <Button
                size="sm"
                onClick={handleNext}
                className="bg-msme-purple hover:bg-msme-darkPurple"
              >
                {step === steps.length - 1 ? 'Finish' : 'Next'}
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SectionTutorial;
