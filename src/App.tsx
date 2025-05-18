
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import MsmeSolutions from "./pages/MsmeSolutions";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import AICopilot from "./components/ai/AICopilot";
import AnalyticsConsent from "./components/analytics/AnalyticsConsent";
import { analytics, setupRouteTracking } from "./utils/analytics";

const queryClient = new QueryClient();

// Route change tracking component
const RouteChangeTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    analytics.trackPageView(location.pathname);
  }, [location]);
  
  return null;
};

const App = () => {
  useEffect(() => {
    setupRouteTracking();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouteChangeTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/job/:id" element={<JobDetail />} />
            <Route path="/msme-solutions" element={<MsmeSolutions />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <AICopilot />
          <AnalyticsConsent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
