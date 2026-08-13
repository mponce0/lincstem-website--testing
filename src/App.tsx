import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import OurWork from "./pages/OurWork";
import OurHistory from "./pages/OurHistory";
import GradePage from "./pages/GradePage";
import Team from "./pages/Team";
import Materials from "./pages/Materials";
import CommunityOutreach from "./pages/CommunityOutreach";
import OutreachPage from "./pages/OutreachPage";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about/our-work" element={<OurWork />} />
            <Route path="/about/our-history" element={<OurHistory />} />
            <Route path="/about/our-team" element={<Team />} />
            <Route path="/team" element={<Navigate to="/about/our-team" replace />} />
            <Route path="/grade/:gradeId" element={<GradePage />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/community-outreach" element={<CommunityOutreach />} />
            <Route path="/community-outreach/:outreachId" element={<OutreachPage />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
