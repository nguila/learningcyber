import {
  Shield, Network, AppWindow, Cloud, Smartphone, Lock, ShieldAlert,
  UserCheck, Monitor, AlertCircle, Eye, Server, BarChart3, Target,
  Bug, Users, Search, Code, Globe, Wifi, Home as HomeIcon,
  TrendingUp, ClipboardCheck, Scale, Layers, FileText, RotateCcw,
  ShieldCheck, Package, Factory, Crosshair, MessageSquare, ScanEye,
  Award, FileBarChart, KeyRound, Swords, Settings, Atom, Blocks,
  ChevronDown, Brain, GitBranch, Wrench, Fingerprint, GraduationCap,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { Home } from "lucide-react";

const mainItems = [
  { title: "Início", url: "/", icon: Home },
];

// Alphabetically sorted
const stackItems = [
  { title: "AI Security", url: "/ai-security", icon: Brain },
  { title: "Application Security", url: "/application-security", icon: AppWindow },
  { title: "Blockchain Security", url: "/blockchain-security", icon: Blocks },
  { title: "Cloud Security", url: "/cloud-security", icon: Cloud },
  { title: "Compliance Mgmt", url: "/compliance-management", icon: ClipboardCheck },
  { title: "Cryptography", url: "/cryptography", icon: Lock },
  { title: "Dark Web Monitoring", url: "/dark-web-monitoring", icon: ScanEye },
  { title: "Data Loss Prevention", url: "/data-loss-prevention", icon: ShieldAlert },
  { title: "Data Privacy", url: "/data-privacy", icon: Lock },
  { title: "DevSecOps", url: "/devsecops", icon: GitBranch },
  { title: "Digital Forensics", url: "/digital-forensics", icon: Search },
  { title: "Disaster Recovery", url: "/disaster-recovery", icon: RotateCcw },
  { title: "Endpoint Security", url: "/endpoint-security", icon: Monitor },
  { title: "Formações", url: "/formacoes", icon: GraduationCap },
  { title: "Forensics Analysis", url: "/forensics-analysis", icon: Search },
  { title: "Foundations", url: "/foundations", icon: Shield },
  { title: "GRC", url: "/grc", icon: Scale },
  { title: "IAM", url: "/iam", icon: UserCheck },
  { title: "ICS Security", url: "/ics-security", icon: Factory },
  { title: "Incident Response", url: "/incident-response", icon: AlertCircle },
  { title: "Insider Threat", url: "/insider-threat", icon: Eye },
  { title: "IoT Security", url: "/iot-security", icon: Wifi },
  { title: "Malware Analysis", url: "/malware-analysis", icon: Bug },
  { title: "Mobile Security", url: "/mobile-security", icon: Smartphone },
  { title: "Network Security", url: "/network-security", icon: Network },
  { title: "Password Mgmt", url: "/password-management", icon: KeyRound },
  { title: "Penetration Testing", url: "/pentesting", icon: Target },
  { title: "Physical Security", url: "/physical-security", icon: HomeIcon },
  { title: "Privacy Engineering", url: "/privacy-engineering", icon: Fingerprint },
  { title: "Quantum Cryptography", url: "/quantum-security", icon: Atom },
  { title: "Red/Blue Team", url: "/red-blue-team", icon: Swords },
  { title: "Risk Management", url: "/risk-management", icon: TrendingUp },
  { title: "Secure Coding", url: "/secure-coding", icon: Code },
  { title: "Security Architecture", url: "/security-architecture", icon: Layers },
  { title: "Security Automation", url: "/security-automation", icon: Settings },
  { title: "Security Awareness", url: "/security-awareness-training", icon: Users },
  { title: "Security Metrics", url: "/security-metrics", icon: FileBarChart },
  { title: "Security Policy", url: "/security-policy", icon: FileText },
  { title: "Security Tools", url: "/security-tools", icon: Wrench },
  { title: "Security Training", url: "/security-training", icon: Award },
  { title: "SIEM", url: "/siem", icon: BarChart3 },
  { title: "SOC", url: "/soc", icon: Server },
  { title: "Social Engineering", url: "/social-engineering", icon: MessageSquare },
  { title: "Supply Chain Security", url: "/supply-chain-security", icon: Package },
  { title: "Threat Hunting", url: "/threat-hunting", icon: Crosshair },
  { title: "Threat Intelligence", url: "/threat-intelligence", icon: Eye },
  { title: "Vulnerability Mgmt", url: "/vulnerability-management", icon: Bug },
  { title: "Web Security", url: "/web-api-security", icon: Globe },
  { title: "Wireless Security", url: "/wireless-security", icon: Wifi },
  { title: "Zero Trust", url: "/zero-trust", icon: ShieldCheck },
];

export function AppSidebar() {
  const { state, isMobile, setOpenMobile } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const [stackOpen, setStackOpen] = useState(true);

  const handleNavClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  const renderItem = (item: typeof mainItems[0]) => (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton asChild>
        <NavLink
          to={item.url}
          end={item.url === "/"}
          onClick={handleNavClick}
          className="flex items-center gap-3 px-3 py-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors text-sm"
          activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
        >
          <item.icon className="h-4 w-4 shrink-0" />
          {!collapsed && <span>{item.title}</span>}
        </NavLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarContent className="py-4">
        {!collapsed && (
          <div className="px-4 pb-4 mb-2 border-b border-sidebar-border">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-sidebar-primary" />
              <div>
                <h1 className="font-mono text-sm font-bold text-sidebar-primary leading-none">Cybersecurity</h1>
                <p className="font-mono text-xs text-sidebar-foreground/60 leading-none mt-0.5">Stack Academy</p>
              </div>
            </div>
          </div>
        )}

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>{mainItems.map(renderItem)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          {!collapsed ? (
            <Collapsible open={stackOpen} onOpenChange={setStackOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-1.5">
                <SidebarGroupLabel className="p-0 text-xs uppercase tracking-wider text-sidebar-foreground/40">Stack</SidebarGroupLabel>
                <ChevronDown className={`h-3 w-3 text-sidebar-foreground/40 transition-transform ${stackOpen ? '' : '-rotate-90'}`} />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>{stackItems.map(renderItem)}</SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </Collapsible>
          ) : (
            <SidebarGroupContent>
              <SidebarMenu>{stackItems.map(renderItem)}</SidebarMenu>
            </SidebarGroupContent>
          )}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
