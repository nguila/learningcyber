import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Home from "./pages/Home";
import NetworkSecurity from "./pages/NetworkSecurity";
import ApplicationSecurity from "./pages/ApplicationSecurity";
import CloudSecurity from "./pages/CloudSecurity";
import MobileSecurity from "./pages/MobileSecurity";
import Cryptography from "./pages/Cryptography";
import DataLossPrevention from "./pages/DataLossPrevention";
import IAM from "./pages/IAM";
import EndpointSecurity from "./pages/EndpointSecurity";
import IncidentResponse from "./pages/IncidentResponse";
import ThreatIntelligence from "./pages/ThreatIntelligence";
import SOC from "./pages/SOC";
import SIEM from "./pages/SIEM";
import Pentesting from "./pages/Pentesting";
import VulnerabilityManagement from "./pages/VulnerabilityManagement";
import SecurityAwarenessTraining from "./pages/SecurityAwarenessTraining";
import ForensicsAnalysis from "./pages/ForensicsAnalysis";
import SecureCoding from "./pages/SecureCoding";
import WebAPISecurity from "./pages/WebAPISecurity";
import WirelessSecurity from "./pages/WirelessSecurity";
import PhysicalSecurity from "./pages/PhysicalSecurity";
import RiskManagement from "./pages/RiskManagement";
import ComplianceManagement from "./pages/ComplianceManagement";
import GRC from "./pages/GRC";
import SecurityArchitecture from "./pages/SecurityArchitecture";
import SecurityPolicy from "./pages/SecurityPolicy";
import DisasterRecovery from "./pages/DisasterRecovery";
import ZeroTrustArchitecture from "./pages/ZeroTrustArchitecture";
import InsiderThreat from "./pages/InsiderThreat";
import SupplyChainSecurity from "./pages/SupplyChainSecurity";
import ICSSecurity from "./pages/ICSSecurity";
import IoTSecurity from "./pages/IoTSecurity";
import DataPrivacy from "./pages/DataPrivacy";
import DigitalForensics from "./pages/DigitalForensics";
import MalwareAnalysis from "./pages/MalwareAnalysis";
import SocialEngineering from "./pages/SocialEngineering";
import ThreatHunting from "./pages/ThreatHunting";
import BlockchainSecurity from "./pages/BlockchainSecurity";
import DarkWebMonitoring from "./pages/DarkWebMonitoring";
import SecurityTraining from "./pages/SecurityTraining";
import SecurityMetrics from "./pages/SecurityMetrics";
import PasswordManagement from "./pages/PasswordManagement";
import RedBlueTeam from "./pages/RedBlueTeam";
import SecurityAutomation from "./pages/SecurityAutomation";
import QuantumSecurity from "./pages/QuantumSecurity";
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
            <Route path="/network-security" element={<NetworkSecurity />} />
            <Route path="/application-security" element={<ApplicationSecurity />} />
            <Route path="/cloud-security" element={<CloudSecurity />} />
            <Route path="/mobile-security" element={<MobileSecurity />} />
            <Route path="/cryptography" element={<Cryptography />} />
            <Route path="/data-loss-prevention" element={<DataLossPrevention />} />
            <Route path="/iam" element={<IAM />} />
            <Route path="/endpoint-security" element={<EndpointSecurity />} />
            <Route path="/incident-response" element={<IncidentResponse />} />
            <Route path="/threat-intelligence" element={<ThreatIntelligence />} />
            <Route path="/soc" element={<SOC />} />
            <Route path="/siem" element={<SIEM />} />
            <Route path="/pentesting" element={<Pentesting />} />
            <Route path="/vulnerability-management" element={<VulnerabilityManagement />} />
            <Route path="/security-awareness-training" element={<SecurityAwarenessTraining />} />
            <Route path="/forensics-analysis" element={<ForensicsAnalysis />} />
            <Route path="/secure-coding" element={<SecureCoding />} />
            <Route path="/web-api-security" element={<WebAPISecurity />} />
            <Route path="/wireless-security" element={<WirelessSecurity />} />
            <Route path="/physical-security" element={<PhysicalSecurity />} />
            <Route path="/risk-management" element={<RiskManagement />} />
            <Route path="/compliance-management" element={<ComplianceManagement />} />
            <Route path="/grc" element={<GRC />} />
            <Route path="/security-architecture" element={<SecurityArchitecture />} />
            <Route path="/security-policy" element={<SecurityPolicy />} />
            <Route path="/disaster-recovery" element={<DisasterRecovery />} />
            <Route path="/zero-trust" element={<ZeroTrustArchitecture />} />
            <Route path="/insider-threat" element={<InsiderThreat />} />
            <Route path="/supply-chain-security" element={<SupplyChainSecurity />} />
            <Route path="/ics-security" element={<ICSSecurity />} />
            <Route path="/iot-security" element={<IoTSecurity />} />
            <Route path="/data-privacy" element={<DataPrivacy />} />
            <Route path="/digital-forensics" element={<DigitalForensics />} />
            <Route path="/malware-analysis" element={<MalwareAnalysis />} />
            <Route path="/social-engineering" element={<SocialEngineering />} />
            <Route path="/threat-hunting" element={<ThreatHunting />} />
            <Route path="/blockchain-security" element={<BlockchainSecurity />} />
            <Route path="/dark-web-monitoring" element={<DarkWebMonitoring />} />
            <Route path="/security-training" element={<SecurityTraining />} />
            <Route path="/security-metrics" element={<SecurityMetrics />} />
            <Route path="/password-management" element={<PasswordManagement />} />
            <Route path="/red-blue-team" element={<RedBlueTeam />} />
            <Route path="/security-automation" element={<SecurityAutomation />} />
            <Route path="/quantum-security" element={<QuantumSecurity />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
