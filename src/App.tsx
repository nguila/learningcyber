import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Home from "./pages/Home";
import AISecurity from "./pages/AISecurity";
import ApplicationSecurity from "./pages/ApplicationSecurity";
import BlockchainSecurity from "./pages/BlockchainSecurity";
import CloudSecurity from "./pages/CloudSecurity";
import ComplianceManagement from "./pages/ComplianceManagement";
import Cryptography from "./pages/Cryptography";
import DarkWebMonitoring from "./pages/DarkWebMonitoring";
import DataLossPrevention from "./pages/DataLossPrevention";
import DataPrivacy from "./pages/DataPrivacy";
import DevSecOps from "./pages/DevSecOps";
import DigitalForensics from "./pages/DigitalForensics";
import DisasterRecovery from "./pages/DisasterRecovery";
import EndpointSecurity from "./pages/EndpointSecurity";
import Formacoes from "./pages/Formacoes";
import ForensicsAnalysis from "./pages/ForensicsAnalysis";
import Foundations from "./pages/Foundations";
import GRC from "./pages/GRC";
import IAM from "./pages/IAM";
import ICSSecurity from "./pages/ICSSecurity";
import IncidentResponse from "./pages/IncidentResponse";
import InsiderThreat from "./pages/InsiderThreat";
import IoTSecurity from "./pages/IoTSecurity";
import MalwareAnalysis from "./pages/MalwareAnalysis";
import MobileSecurity from "./pages/MobileSecurity";
import NetworkSecurity from "./pages/NetworkSecurity";
import PasswordManagement from "./pages/PasswordManagement";
import Pentesting from "./pages/Pentesting";
import PhysicalSecurity from "./pages/PhysicalSecurity";
import PrivacyEngineering from "./pages/PrivacyEngineering";
import QuantumSecurity from "./pages/QuantumSecurity";
import RedBlueTeam from "./pages/RedBlueTeam";
import RiskManagement from "./pages/RiskManagement";
import SecureCoding from "./pages/SecureCoding";
import SecurityArchitecture from "./pages/SecurityArchitecture";
import SecurityAutomation from "./pages/SecurityAutomation";
import SecurityAwarenessTraining from "./pages/SecurityAwarenessTraining";
import SecurityMetrics from "./pages/SecurityMetrics";
import SecurityPolicy from "./pages/SecurityPolicy";
import SecurityTools from "./pages/SecurityTools";
import SecurityTraining from "./pages/SecurityTraining";
import SIEM from "./pages/SIEM";
import SOC from "./pages/SOC";
import SocialEngineering from "./pages/SocialEngineering";
import SupplyChainSecurity from "./pages/SupplyChainSecurity";
import ThreatHunting from "./pages/ThreatHunting";
import ThreatIntelligence from "./pages/ThreatIntelligence";
import VulnerabilityManagement from "./pages/VulnerabilityManagement";
import WebAPISecurity from "./pages/WebAPISecurity";
import WirelessSecurity from "./pages/WirelessSecurity";
import ZeroTrustArchitecture from "./pages/ZeroTrustArchitecture";
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
            <Route path="/ai-security" element={<AISecurity />} />
            <Route path="/application-security" element={<ApplicationSecurity />} />
            <Route path="/blockchain-security" element={<BlockchainSecurity />} />
            <Route path="/cloud-security" element={<CloudSecurity />} />
            <Route path="/compliance-management" element={<ComplianceManagement />} />
            <Route path="/cryptography" element={<Cryptography />} />
            <Route path="/dark-web-monitoring" element={<DarkWebMonitoring />} />
            <Route path="/data-loss-prevention" element={<DataLossPrevention />} />
            <Route path="/data-privacy" element={<DataPrivacy />} />
            <Route path="/devsecops" element={<DevSecOps />} />
            <Route path="/digital-forensics" element={<DigitalForensics />} />
            <Route path="/disaster-recovery" element={<DisasterRecovery />} />
            <Route path="/endpoint-security" element={<EndpointSecurity />} />
            <Route path="/formacoes" element={<Formacoes />} />
            <Route path="/forensics-analysis" element={<ForensicsAnalysis />} />
            <Route path="/foundations" element={<Foundations />} />
            <Route path="/grc" element={<GRC />} />
            <Route path="/iam" element={<IAM />} />
            <Route path="/ics-security" element={<ICSSecurity />} />
            <Route path="/incident-response" element={<IncidentResponse />} />
            <Route path="/insider-threat" element={<InsiderThreat />} />
            <Route path="/iot-security" element={<IoTSecurity />} />
            <Route path="/malware-analysis" element={<MalwareAnalysis />} />
            <Route path="/mobile-security" element={<MobileSecurity />} />
            <Route path="/network-security" element={<NetworkSecurity />} />
            <Route path="/password-management" element={<PasswordManagement />} />
            <Route path="/pentesting" element={<Pentesting />} />
            <Route path="/physical-security" element={<PhysicalSecurity />} />
            <Route path="/privacy-engineering" element={<PrivacyEngineering />} />
            <Route path="/quantum-security" element={<QuantumSecurity />} />
            <Route path="/red-blue-team" element={<RedBlueTeam />} />
            <Route path="/risk-management" element={<RiskManagement />} />
            <Route path="/secure-coding" element={<SecureCoding />} />
            <Route path="/security-architecture" element={<SecurityArchitecture />} />
            <Route path="/security-automation" element={<SecurityAutomation />} />
            <Route path="/security-awareness-training" element={<SecurityAwarenessTraining />} />
            <Route path="/security-metrics" element={<SecurityMetrics />} />
            <Route path="/security-policy" element={<SecurityPolicy />} />
            <Route path="/security-tools" element={<SecurityTools />} />
            <Route path="/security-training" element={<SecurityTraining />} />
            <Route path="/siem" element={<SIEM />} />
            <Route path="/soc" element={<SOC />} />
            <Route path="/social-engineering" element={<SocialEngineering />} />
            <Route path="/supply-chain-security" element={<SupplyChainSecurity />} />
            <Route path="/threat-hunting" element={<ThreatHunting />} />
            <Route path="/threat-intelligence" element={<ThreatIntelligence />} />
            <Route path="/vulnerability-management" element={<VulnerabilityManagement />} />
            <Route path="/web-api-security" element={<WebAPISecurity />} />
            <Route path="/wireless-security" element={<WirelessSecurity />} />
            <Route path="/zero-trust" element={<ZeroTrustArchitecture />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
