
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mic, MicOff, Send, X, MessageSquare, Minimize, Maximize } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const AICopilot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi there! I\'m your MSME recruitment AI assistant. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Scroll to bottom when messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleRecording = () => {
    if (isRecording) {
      setIsRecording(false);
      toast({
        title: "Voice recognition stopped",
        description: "The transcript would appear in the message input."
      });
    } else {
      setIsRecording(true);
      toast({
        title: "Voice recognition started",
        description: "Please speak clearly into your microphone."
      });
      
      // Simulate voice recognition after 3 seconds
      setTimeout(() => {
        setIsRecording(false);
        setMessage(prev => prev + (prev ? ' ' : '') + "I'm looking for candidates with React experience");
        toast({
          title: "Voice recognition complete",
          description: "Your message has been transcribed."
        });
      }, 3000);
    }
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Add user message
    const userMessage = {
      role: 'user' as const,
      content: message,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsLoading(true);
    
    // Simulate AI response after delay
    setTimeout(() => {
      const aiResponse = {
        role: 'assistant' as const,
        content: generateAIResponse(userMessage.content),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const generateAIResponse = (query: string): string => {
    if (query.toLowerCase().includes('react')) {
      return "Based on your request for React developers, I've identified 3 potential candidates in the Mumbai area with 3+ years of experience. Would you like me to arrange interviews with them?";
    }
    if (query.toLowerCase().includes('hire') || query.toLowerCase().includes('recruit')) {
      return "To help you recruit effectively, I need to understand your requirements better. What role are you looking to fill? And what skills are most important for this position?";
    }
    if (query.toLowerCase().includes('job') || query.toLowerCase().includes('apply')) {
      return "I've found 5 jobs matching your profile. The top match is 'Senior Web Developer' at Tech Solutions MSME in Mumbai. Would you like me to assist you with applying?";
    }
    
    return "I understand you need assistance with recruitment. Could you provide more specific details about what you're looking for so I can help you better?";
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!isOpen) {
    return (
      <Button
        className="fixed bottom-4 right-4 z-40 rounded-full h-14 w-14 bg-msme-purple hover:bg-msme-darkPurple shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-40 bg-msme-purple text-white rounded-full p-3 shadow-lg cursor-pointer flex items-center gap-2"
        onClick={() => setIsMinimized(false)}
      >
        <MessageSquare className="h-5 w-5" />
        <span className="font-medium">AI Copilot</span>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 w-80 sm:w-96 bg-white rounded-lg shadow-xl flex flex-col border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center bg-msme-purple text-white p-3 rounded-t-lg">
        <h3 className="font-medium">AI Recruitment Copilot</h3>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-white hover:bg-msme-darkPurple hover:text-white"
            onClick={() => setIsMinimized(true)}
          >
            <Minimize className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-white hover:bg-msme-darkPurple hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-auto p-4 h-96 bg-gray-50">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-3 ${
              msg.role === 'user' ? 'text-right' : 'text-left'
            }`}
          >
            <div
              className={`inline-block rounded-lg p-3 max-w-[80%] ${
                msg.role === 'user'
                  ? 'bg-msme-purple text-white'
                  : 'bg-gray-200 text-gray-900'
              }`}
            >
              <p className="text-sm">{msg.content}</p>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {formatTime(msg.timestamp)}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="text-left mb-3">
            <div className="inline-block rounded-lg p-3 bg-gray-200 text-gray-900">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse"></div>
                <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input */}
      <div className="p-3 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleRecording}
            className={isRecording ? "text-red-500 border-red-500" : ""}
          >
            {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          </Button>
          <Input
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
            className="flex-1"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!message.trim() || isLoading}
            className="bg-msme-purple hover:bg-msme-darkPurple"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AICopilot;
