import {
  Shield, Wifi, Monitor, Layers, Lock, ShieldCheck,
  Server, BarChart3, FileText, AlertCircle, RotateCcw,
  Eye, Search, Rss, Grid3X3, Link2, Crosshair,
  Bug, Scan, TrendingUp, FileCode, Settings, FileBarChart,
  Globe, List, ShieldAlert, KeyRound, Cookie, TextCursorInput,
  Target, Zap, Footprints,
  Cloud, Users, Container,
  Code, GitBranch, FileSearch, Package,
  HardDrive, Cpu,
  Scale, Award, ClipboardCheck,
  Wrench, Bomb,
  Brain, MessageSquare, Database,
  Smartphone, AppWindow, Fingerprint,
  Router, Home, Factory,
  Swords, Flag,
  UserCheck,
  Network, ScanEye,
  Atom, Binary, FlaskConical,
  Blocks, Wallet,
  ScrollText, FileCheck, AlertTriangle,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Shield, Wifi, Monitor, Layers, Lock, ShieldCheck,
  Server, BarChart3, FileText, AlertCircle, RotateCcw,
  Eye, Search, Rss, Grid3X3, Link2, Crosshair,
  Bug, Scan, TrendingUp, FileCode, Settings, FileBarChart,
  Globe, List, ShieldAlert, KeyRound, Cookie, TextCursorInput,
  Target, Zap, Footprints,
  Cloud, Users, Container,
  Code, GitBranch, FileSearch, Package,
  HardDrive, Cpu,
  Scale, Award, ClipboardCheck,
  Wrench, Bomb,
  Brain, MessageSquare, Database,
  Smartphone, AppWindow, Fingerprint,
  Router, Home, Factory,
  Swords, Flag,
  UserCheck,
  Network, ScanEye,
  Atom, Binary, FlaskConical,
  Blocks, Wallet,
  ScrollText, FileCheck, AlertTriangle,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] || Shield;
}

export default iconMap;
