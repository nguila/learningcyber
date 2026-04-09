import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Shield, Server, Eye, Bug, Globe, Target, Cloud, Code, Search,
  Scale, Wrench, Brain, GraduationCap, BookOpen, CheckCircle2,
  Lightbulb, ArrowRight, Zap, Smartphone, Wifi, Swords, Lock, Package
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stackBlocks = [
  { title: "Foundations", desc: "Redes, SO, criptografia e princípios base", icon: Shield, url: "/foundations", color: "from-cyan-500/20 to-blue-500/10" },
  { title: "SOC", desc: "Monitorização, deteção e resposta a incidentes", icon: Server, url: "/soc", color: "from-blue-500/20 to-indigo-500/10" },
  { title: "Threat Intelligence", desc: "Compreender atacantes e as suas técnicas", icon: Eye, url: "/threat-intelligence", color: "from-purple-500/20 to-blue-500/10" },
  { title: "Vulnerability Mgmt", desc: "Encontrar e corrigir fragilidades", icon: Bug, url: "/vulnerability-management", color: "from-orange-500/20 to-red-500/10" },
  { title: "Web & API Security", desc: "Proteger sites e APIs do dia a dia", icon: Globe, url: "/web-api-security", color: "from-green-500/20 to-cyan-500/10" },
  { title: "Pentesting", desc: "Testes de segurança autorizados", icon: Target, url: "/pentesting", color: "from-red-500/20 to-orange-500/10" },
  { title: "Cloud Security", desc: "Segurança em AWS, Azure e GCP", icon: Cloud, url: "/cloud-security", color: "from-sky-500/20 to-blue-500/10" },
  { title: "DevSecOps", desc: "Segurança integrada no desenvolvimento", icon: Code, url: "/devsecops", color: "from-emerald-500/20 to-green-500/10" },
  { title: "Digital Forensics", desc: "Investigação pós-incidente", icon: Search, url: "/digital-forensics", color: "from-amber-500/20 to-yellow-500/10" },
  { title: "GRC", desc: "Governança, risco e conformidade", icon: Scale, url: "/grc", color: "from-indigo-500/20 to-purple-500/10" },
  { title: "Security Tools", desc: "Ferramentas essenciais da área", icon: Wrench, url: "/security-tools", color: "from-slate-500/20 to-gray-500/10" },
  { title: "AI Security", desc: "Proteger sistemas com IA/LLM", icon: Brain, url: "/ai-security", color: "from-pink-500/20 to-rose-500/10" },
  { title: "Mobile Security", desc: "Segurança em apps e dispositivos móveis", icon: Smartphone, url: "/mobile-security", color: "from-violet-500/20 to-purple-500/10" },
  { title: "IoT Security", desc: "Proteger dispositivos conectados", icon: Wifi, url: "/iot-security", color: "from-teal-500/20 to-cyan-500/10" },
  { title: "Red/Blue Team", desc: "Simulação de ataque e defesa", icon: Swords, url: "/red-blue-team", color: "from-red-500/20 to-blue-500/10" },
  { title: "Privacy Engineering", desc: "Engenharia de privacidade e RGPD", icon: Lock, url: "/privacy-engineering", color: "from-fuchsia-500/20 to-pink-500/10" },
  { title: "Supply Chain Security", desc: "Proteger dependências e fornecedores", icon: Package, url: "/supply-chain-security", color: "from-amber-500/20 to-orange-500/10" },
];

const helpCards = [
  { icon: BookOpen, title: "Explicações Claras", desc: "Conceitos complexos explicados de forma simples, sem jargão desnecessário." },
  { icon: Lightbulb, title: "Exemplos Práticos", desc: "Tarefas, checklists e cenários que podes testar no teu computador." },
  { icon: Zap, title: "Casos Reais", desc: "Histórias de incidentes reais para perceberes o impacto da cibersegurança." },
  { icon: GraduationCap, title: "Percurso de Aprendizagem", desc: "Cursos recomendados e sugestões de formação para cada nível." },
];

const progressSteps = [
  "Fundamentos",
  "Proteção Pessoal",
  "Proteção de Empresas",
  "Especialização Técnica",
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
                Começar pelos fundamentos
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

      {/* Progress Line */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex items-center justify-between gap-1 sm:gap-2">
          {progressSteps.map((step, i) => (
            <div key={step} className="flex items-center gap-1 sm:gap-2 flex-1">
              <div className="flex flex-col items-center text-center flex-1">
                <div className="w-8 h-8 rounded-full bg-primary/10 cyber-border flex items-center justify-center mb-1.5">
                  <span className="font-mono text-xs text-primary font-bold">{i + 1}</span>
                </div>
                <span className="text-xs text-muted-foreground font-medium leading-tight">{step}</span>
              </div>
              {i < progressSteps.length - 1 && (
                <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-primary/10 mt-[-16px]" />
              )}
            </div>
          ))}
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
          <p className="text-muted-foreground">Explora cada área ao teu ritmo</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stackBlocks.map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
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

        {/* Formações link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4"
        >
          <Link
            to="/formacoes"
            className="block rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 p-5 cyber-border card-hover group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-card/50">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Formações & Cursos Recomendados</h3>
                <p className="text-sm text-muted-foreground mt-1">Percurso de aprendizagem organizado por nível e área</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </Link>
        </motion.div>
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
