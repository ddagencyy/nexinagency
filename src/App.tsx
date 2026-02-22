import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import AllProjects from "./pages/AllProjects";
import AboutUs from "./pages/about-us";
import Service from "./pages/Services";
import Conatct from "./pages/Contact-us";
import NotFound from "./pages/NotFound";
import WebDevelopment from "./pages/services/web-development";
import UIUXDesign from "./pages/services/ui-uxdesign";
import AIAutomation from "./pages/services/ai-automation";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Service />} />
            <Route path="/contact" element={<Conatct />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/ui-uxdesign" element={<UIUXDesign />} />
            <Route path="/services/ai-automation" element={<AIAutomation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
