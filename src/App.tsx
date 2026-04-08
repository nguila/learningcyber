import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Home from "./pages/Home";
import Foundations from "./pages/Foundations";
import SOC from "./pages/SOC";
import ThreatIntelligence from "./pages/ThreatIntelligence";
import VulnerabilityManagement from "./pages/VulnerabilityManagement";
import WebAPISecurity from "./pages/WebAPISecurity";
import Pentesting from "./pages/Pentesting";
import CloudSecurity from "./pages/CloudSecurity";
import DevSecOps from "./pages/DevSecOps";
import DigitalForensics from "./pages/DigitalForensics";
import GRC from "./pages/GRC";
import SecurityTools from "./pages/SecurityTools";
import AISecurity from "./pages/AISecurity";
import Formacoes from "./pages/Formacoes";
import MobileSecurity from "./pages/MobileSecurity";
import IoTSecurity from "./pages/IoTSecurity";
import RedBlueTeam from "./pages/RedBlueTeam";
import PrivacyEngineering from "./pages/PrivacyEngineering";
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
            <Route path="/" element={<Home />} />
            <Route path="/foundations" element={<Foundations />} />
            <Route path="/soc" element={<SOC />} />
            <Route path="/threat-intelligence" element={<ThreatIntelligence />} />
            <Route path="/vulnerability-management" element={<VulnerabilityManagement />} />
            <Route path="/web-api-security" element={<WebAPISecurity />} />
            <Route path="/pentesting" element={<Pentesting />} />
            <Route path="/cloud-security" element={<CloudSecurity />} />
            <Route path="/devsecops" element={<DevSecOps />} />
            <Route path="/digital-forensics" element={<DigitalForensics />} />
            <Route path="/grc" element={<GRC />} />
            <Route path="/security-tools" element={<SecurityTools />} />
            <Route path="/ai-security" element={<AISecurity />} />
            <Route path="/formacoes" element={<Formacoes />} />
            <Route path="/mobile-security" element={<MobileSecurity />} />
            <Route path="/iot-security" element={<IoTSecurity />} />
            <Route path="/red-blue-team" element={<RedBlueTeam />} />
            <Route path="/privacy-engineering" element={<PrivacyEngineering />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
