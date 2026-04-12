import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Shield, Network, AppWindow, Cloud, Smartphone, Lock, ShieldAlert,
  UserCheck, Monitor, AlertCircle, Eye, Server, BarChart3, Target,
  Bug, Users, Search, Code, Globe, Wifi, Home as HomeIcon,
  TrendingUp, ClipboardCheck, Scale, Layers, FileText, RotateCcw,
  ShieldCheck, Package, Factory, Crosshair, MessageSquare, ScanEye,
  Award, FileBarChart, KeyRound, Swords, Settings, Atom, Blocks,
  ArrowRight, BookOpen, Lightbulb, Zap, GraduationCap,
  Brain, GitBranch, Wrench, Fingerprint,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

// Alphabetically sorted
const stackBlocks = [
  { title: "AI Security", desc: "Segurança em inteligência artificial", icon: Brain, url: "/ai-security", color: "from-purple-500/20 to-violet-500/10" },
  { title: "Application Security", desc: "Segurança no ciclo de vida das aplicações", icon: AppWindow, url: "/application-security", color: "from-blue-500/20 to-indigo-500/10" },
  { title: "Blockchain Security", desc: "Segurança em smart contracts e DeFi", icon: Blocks, url: "/blockchain-security", color: "from-yellow-500/20 to-amber-500/10" },
  { title: "Cloud Security", desc: "Segurança em AWS, Azure e GCP", icon: Cloud, url: "/cloud-security", color: "from-sky-500/20 to-blue-500/10" },
  { title: "Compliance Mgmt", desc: "Gestão de conformidade regulatória", icon: ClipboardCheck, url: "/compliance-management", color: "from-indigo-500/20 to-purple-500/10" },
  { title: "Cryptography", desc: "Ciência da proteção da informação", icon: Lock, url: "/cryptography", color: "from-emerald-500/20 to-green-500/10" },
  { title: "Dark Web Monitoring", desc: "Monitorização da dark web", icon: ScanEye, url: "/dark-web-monitoring", color: "from-gray-500/20 to-slate-500/10" },
  { title: "Data Loss Prevention", desc: "Prevenir fugas de dados sensíveis", icon: ShieldAlert, url: "/data-loss-prevention", color: "from-red-500/20 to-orange-500/10" },
  { title: "Data Privacy", desc: "Privacidade e proteção de dados", icon: Lock, url: "/data-privacy", color: "from-fuchsia-500/20 to-pink-500/10" },
  { title: "DevSecOps", desc: "Segurança integrada no desenvolvimento", icon: GitBranch, url: "/devsecops", color: "from-green-500/20 to-emerald-500/10" },
  { title: "Digital Forensics", desc: "Investigação pós-incidente", icon: Search, url: "/digital-forensics", color: "from-amber-500/20 to-yellow-500/10" },
  { title: "Disaster Recovery", desc: "Recuperação e continuidade", icon: RotateCcw, url: "/disaster-recovery", color: "from-orange-500/20 to-red-500/10" },
  { title: "Endpoint Security", desc: "Proteger dispositivos finais", icon: Monitor, url: "/endpoint-security", color: "from-slate-500/20 to-gray-500/10" },
  { title: "Formações", desc: "Percurso de formações e certificações", icon: GraduationCap, url: "/formacoes", color: "from-pink-500/20 to-rose-500/10" },
  { title: "Forensics Analysis", desc: "Análise forense de evidências", icon: Search, url: "/forensics-analysis", color: "from-amber-500/20 to-yellow-500/10" },
  { title: "Foundations", desc: "Fundamentos de cibersegurança", icon: Shield, url: "/foundations", color: "from-cyan-500/20 to-blue-500/10" },
  { title: "GRC", desc: "Governança, risco e conformidade", icon: Scale, url: "/grc", color: "from-indigo-500/20 to-purple-500/10" },
  { title: "IAM", desc: "Gestão de identidades e acessos", icon: UserCheck, url: "/iam", color: "from-indigo-500/20 to-purple-500/10" },
  { title: "ICS Security", desc: "Segurança de sistemas industriais", icon: Factory, url: "/ics-security", color: "from-stone-500/20 to-gray-500/10" },
  { title: "Incident Response", desc: "Resposta e gestão de incidentes", icon: AlertCircle, url: "/incident-response", color: "from-orange-500/20 to-red-500/10" },
  { title: "Insider Threat", desc: "Gestão de ameaças internas", icon: Eye, url: "/insider-threat", color: "from-red-500/20 to-pink-500/10" },
  { title: "IoT Security", desc: "Proteger dispositivos conectados", icon: Wifi, url: "/iot-security", color: "from-teal-500/20 to-cyan-500/10" },
  { title: "Malware Analysis", desc: "Análise e reverse engineering", icon: Bug, url: "/malware-analysis", color: "from-red-500/20 to-rose-500/10" },
  { title: "Mobile Security", desc: "Segurança em apps e dispositivos móveis", icon: Smartphone, url: "/mobile-security", color: "from-violet-500/20 to-purple-500/10" },
  { title: "Network Security", desc: "Proteger infraestruturas de rede", icon: Network, url: "/network-security", color: "from-cyan-500/20 to-blue-500/10" },
  { title: "Password Mgmt", desc: "Gestão segura de credenciais", icon: KeyRound, url: "/password-management", color: "from-violet-500/20 to-purple-500/10" },
  { title: "Penetration Testing", desc: "Testes de segurança autorizados", icon: Target, url: "/pentesting", color: "from-red-500/20 to-orange-500/10" },
  { title: "Physical Security", desc: "Segurança física de instalações", icon: HomeIcon, url: "/physical-security", color: "from-stone-500/20 to-gray-500/10" },
  { title: "Privacy Engineering", desc: "Engenharia de privacidade", icon: Fingerprint, url: "/privacy-engineering", color: "from-fuchsia-500/20 to-violet-500/10" },
  { title: "Quantum Cryptography", desc: "Criptografia pós-quântica", icon: Atom, url: "/quantum-security", color: "from-violet-500/20 to-indigo-500/10" },
  { title: "Red/Blue Team", desc: "Simulação de ataque e defesa", icon: Swords, url: "/red-blue-team", color: "from-red-500/20 to-blue-500/10" },
  { title: "Risk Management", desc: "Gestão e avaliação de riscos", icon: TrendingUp, url: "/risk-management", color: "from-yellow-500/20 to-amber-500/10" },
  { title: "Secure Coding", desc: "Desenvolvimento de código seguro", icon: Code, url: "/secure-coding", color: "from-emerald-500/20 to-green-500/10" },
  { title: "Security Architecture", desc: "Arquitetura de segurança empresarial", icon: Layers, url: "/security-architecture", color: "from-blue-500/20 to-indigo-500/10" },
  { title: "Security Automation", desc: "Automação de processos", icon: Settings, url: "/security-automation", color: "from-cyan-500/20 to-teal-500/10" },
  { title: "Security Awareness", desc: "Formação e consciencialização", icon: Users, url: "/security-awareness-training", color: "from-green-500/20 to-cyan-500/10" },
  { title: "Security Metrics", desc: "Métricas e relatórios de segurança", icon: FileBarChart, url: "/security-metrics", color: "from-blue-500/20 to-cyan-500/10" },
  { title: "Security Policy", desc: "Políticas e procedimentos", icon: FileText, url: "/security-policy", color: "from-gray-500/20 to-slate-500/10" },
  { title: "Security Tools", desc: "Ferramentas essenciais de cibersegurança", icon: Wrench, url: "/security-tools", color: "from-orange-500/20 to-amber-500/10" },
  { title: "Security Training", desc: "Formações e certificações", icon: Award, url: "/security-training", color: "from-green-500/20 to-emerald-500/10" },
  { title: "SIEM", desc: "Monitorização centralizada de segurança", icon: BarChart3, url: "/siem", color: "from-teal-500/20 to-cyan-500/10" },
  { title: "SOC", desc: "Monitorização e resposta a incidentes", icon: Server, url: "/soc", color: "from-blue-500/20 to-indigo-500/10" },
  { title: "Social Engineering", desc: "Engenharia social e manipulação", icon: MessageSquare, url: "/social-engineering", color: "from-pink-500/20 to-rose-500/10" },
  { title: "Supply Chain Security", desc: "Proteger dependências e fornecedores", icon: Package, url: "/supply-chain-security", color: "from-amber-500/20 to-orange-500/10" },
  { title: "Threat Hunting", desc: "Caça proativa de ameaças", icon: Crosshair, url: "/threat-hunting", color: "from-purple-500/20 to-violet-500/10" },
  { title: "Threat Intelligence", desc: "Compreender atacantes e técnicas", icon: Eye, url: "/threat-intelligence", color: "from-purple-500/20 to-blue-500/10" },
  { title: "Vulnerability Mgmt", desc: "Encontrar e corrigir fragilidades", icon: Bug, url: "/vulnerability-management", color: "from-orange-500/20 to-red-500/10" },
  { title: "Web Security", desc: "Proteger aplicações e serviços web", icon: Globe, url: "/web-api-security", color: "from-green-500/20 to-cyan-500/10" },
  { title: "Wireless Security", desc: "Segurança em redes sem fios", icon: Wifi, url: "/wireless-security", color: "from-cyan-500/20 to-blue-500/10" },
  { title: "Zero Trust", desc: "Nunca confiar, sempre verificar", icon: ShieldCheck, url: "/zero-trust", color: "from-emerald-500/20 to-teal-500/10" },
];

const helpCards = [
  { icon: BookOpen, title: "Explicações Claras", desc: "Conceitos complexos explicados de forma simples, sem jargão desnecessário." },
  { icon: Lightbulb, title: "Exemplos Práticos", desc: "Tarefas, checklists e cenários que podes testar no teu computador." },
  { icon: Zap, title: "Casos Reais", desc: "Histórias de incidentes reais para perceberes o impacto da cibersegurança." },
  { icon: GraduationCap, title: "Percurso de Aprendizagem", desc: "Cursos recomendados e sugestões de formação para cada nível." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative overflow-hidden hero-gradient">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" width={1920} height={800} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-primary/10 cyber-border">
              <Shield className="h-4 w-4 text-primary" />
              <span className="font-mono text-xs text-primary font-medium">Cybersecurity Stack Academy</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
              Entende o mundo da<br />
              <span className="text-gradient drop-shadow-[0_0_20px_hsl(var(--primary)/0.5)]">Cibersegurança</span>, passo a passo.
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              De iniciante a especialista — aprende conceitos, boas práticas e ferramentas de segurança digital com explicações simples e exemplos práticos.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/foundations"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Começar a explorar
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#stack-map"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-colors"
              >
                Ver mapa da cibersegurança
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stack Map */}
      <div id="stack-map" className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Mapa da Cybersecurity Stack</h2>
          <p className="text-muted-foreground">Explora cada área ao teu ritmo — {stackBlocks.length} módulos disponíveis</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stackBlocks.map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
            >
              <Link
                to={block.url}
                className={`block rounded-xl bg-gradient-to-br ${block.color} p-5 cyber-border card-hover group`}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-card/50">
                    <block.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{block.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{block.desc}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors mt-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Help Cards */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-2">Como este site te ajuda</h2>
        <p className="text-muted-foreground text-center mb-8">Tudo o que precisas para compreender e praticar cibersegurança</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {helpCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl bg-card cyber-border p-5 card-hover"
            >
              <card.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-1">{card.title}</h3>
              <p className="text-sm text-muted-foreground">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 text-center">
        <p className="text-xs text-muted-foreground">
          © 2026 Cybersecurity Stack Academy — Conteúdo educativo em português de Portugal
        </p>
      </footer>
    </div>
  );
}
