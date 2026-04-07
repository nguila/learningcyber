import {
  Shield, Server, Eye, Bug, Globe, Target, Cloud, Code, Search,
  Scale, Wrench, Brain, GraduationCap, Home, ChevronDown
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

const mainItems = [
  { title: "Início", url: "/", icon: Home },
];

const stackItems = [
  { title: "Foundations", url: "/foundations", icon: Shield },
  { title: "SOC", url: "/soc", icon: Server },
  { title: "Threat Intelligence", url: "/threat-intelligence", icon: Eye },
  { title: "Vulnerability Mgmt", url: "/vulnerability-management", icon: Bug },
  { title: "Web & API Security", url: "/web-api-security", icon: Globe },
  { title: "Pentesting", url: "/pentesting", icon: Target },
  { title: "Cloud Security", url: "/cloud-security", icon: Cloud },
  { title: "DevSecOps", url: "/devsecops", icon: Code },
  { title: "Digital Forensics", url: "/digital-forensics", icon: Search },
  { title: "GRC", url: "/grc", icon: Scale },
  { title: "Security Tools", url: "/security-tools", icon: Wrench },
  { title: "AI Security", url: "/ai-security", icon: Brain },
];

const extraItems = [
  { title: "Formações", url: "/formacoes", icon: GraduationCap },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [stackOpen, setStackOpen] = useState(true);

  const renderItem = (item: typeof mainItems[0]) => (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton asChild>
        <NavLink
          to={item.url}
          end={item.url === "/"}
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

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>{extraItems.map(renderItem)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
