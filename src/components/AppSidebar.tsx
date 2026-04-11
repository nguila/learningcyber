import {
  Shield, Network, AppWindow, Cloud, Smartphone, Lock, ShieldAlert,
  UserCheck, Monitor, AlertCircle, Eye, Server, BarChart3, Target,
  Bug, Users, Search, Code, Globe, Wifi, Home as HomeIcon,
  TrendingUp, ClipboardCheck, Scale, Layers, FileText, RotateCcw,
  ShieldCheck, Package, Factory, Crosshair, MessageSquare, ScanEye,
  Award, FileBarChart, KeyRound, Swords, Settings, Atom, Blocks,
  ChevronDown,
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

const stackItems = [
  { title: "Network Security", url: "/network-security", icon: Network },
  { title: "Application Security", url: "/application-security", icon: AppWindow },
  { title: "Cloud Security", url: "/cloud-security", icon: Cloud },
  { title: "Mobile Security", url: "/mobile-security", icon: Smartphone },
  { title: "Cryptography", url: "/cryptography", icon: Lock },
  { title: "Data Loss Prevention", url: "/data-loss-prevention", icon: ShieldAlert },
  { title: "IAM", url: "/iam", icon: UserCheck },
  { title: "Endpoint Security", url: "/endpoint-security", icon: Monitor },
  { title: "Incident Response", url: "/incident-response", icon: AlertCircle },
  { title: "Threat Intelligence", url: "/threat-intelligence", icon: Eye },
  { title: "SOC", url: "/soc", icon: Server },
  { title: "SIEM", url: "/siem", icon: BarChart3 },
  { title: "Penetration Testing", url: "/pentesting", icon: Target },
  { title: "Vulnerability Mgmt", url: "/vulnerability-management", icon: Bug },
  { title: "Security Awareness", url: "/security-awareness-training", icon: Users },
  { title: "Forensics Analysis", url: "/forensics-analysis", icon: Search },
  { title: "Secure Coding", url: "/secure-coding", icon: Code },
  { title: "Web Security", url: "/web-api-security", icon: Globe },
  { title: "Wireless Security", url: "/wireless-security", icon: Wifi },
  { title: "Physical Security", url: "/physical-security", icon: HomeIcon },
  { title: "Risk Management", url: "/risk-management", icon: TrendingUp },
  { title: "Compliance Mgmt", url: "/compliance-management", icon: ClipboardCheck },
  { title: "GRC", url: "/grc", icon: Scale },
  { title: "Security Architecture", url: "/security-architecture", icon: Layers },
  { title: "Security Policy", url: "/security-policy", icon: FileText },
  { title: "Disaster Recovery", url: "/disaster-recovery", icon: RotateCcw },
  { title: "Zero Trust", url: "/zero-trust", icon: ShieldCheck },
  { title: "Insider Threat", url: "/insider-threat", icon: Eye },
  { title: "Supply Chain Security", url: "/supply-chain-security", icon: Package },
  { title: "ICS Security", url: "/ics-security", icon: Factory },
  { title: "IoT Security", url: "/iot-security", icon: Wifi },
  { title: "Data Privacy", url: "/data-privacy", icon: Lock },
  { title: "Digital Forensics", url: "/digital-forensics", icon: Search },
  { title: "Malware Analysis", url: "/malware-analysis", icon: Bug },
  { title: "Social Engineering", url: "/social-engineering", icon: MessageSquare },
  { title: "Threat Hunting", url: "/threat-hunting", icon: Crosshair },
  { title: "Blockchain Security", url: "/blockchain-security", icon: Blocks },
  { title: "Dark Web Monitoring", url: "/dark-web-monitoring", icon: ScanEye },
  { title: "Security Training", url: "/security-training", icon: Award },
  { title: "Security Metrics", url: "/security-metrics", icon: FileBarChart },
  { title: "Password Mgmt", url: "/password-management", icon: KeyRound },
  { title: "Red/Blue Team", url: "/red-blue-team", icon: Swords },
  { title: "Security Automation", url: "/security-automation", icon: Settings },
  { title: "Quantum Cryptography", url: "/quantum-security", icon: Atom },
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
