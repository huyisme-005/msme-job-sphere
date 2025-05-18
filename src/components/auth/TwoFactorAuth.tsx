
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { useToast } from '@/hooks/use-toast';

interface TwoFactorAuthProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onVerify: () => void;
  onCancel: () => void;
  email?: string;
}

const TwoFactorAuth: React.FC<TwoFactorAuthProps> = ({ 
  open, 
  onOpenChange,
  onVerify,
  onCancel,
  email = "your email" 
}) => {
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleVerify = () => {
    if (otp.length !== 6) {
      toast({
        title: "Invalid code",
        description: "Please enter a 6-digit verification code.",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate verification process
    setTimeout(() => {
      if (otp === '123456') { // Demo code for testing
        toast({
          title: "Verification successful",
          description: "You have successfully verified your account."
        });
        onVerify();
      } else {
        toast({
          title: "Invalid code",
          description: "The verification code you entered is incorrect. Please try again.",
          variant: "destructive"
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleResendCode = () => {
    toast({
      title: "Code resent",
      description: `A new verification code has been sent to ${email}.`
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Two-Factor Authentication</DialogTitle>
          <DialogDescription>
            Enter the 6-digit code sent to {email} to verify your identity.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col items-center space-y-6 py-4">
          <InputOTP maxLength={6} value={otp} onChange={setOtp}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          
          <div className="text-sm text-center text-gray-500">
            <p>Didn't receive a code?</p>
            <Button 
              variant="link" 
              className="text-msme-purple p-0 h-auto"
              onClick={handleResendCode}
            >
              Resend code
            </Button>
          </div>
        </div>
        
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleVerify}
            disabled={otp.length !== 6 || isLoading}
            className="bg-msme-purple hover:bg-msme-darkPurple"
          >
            {isLoading ? "Verifying..." : "Verify"}
          </Button>
        </div>
        
        <div className="mt-2 text-xs text-center text-gray-500">
          For demo purposes, use code: 123456
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TwoFactorAuth;
