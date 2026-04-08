import { motion } from "framer-motion";
import { GraduationCap, ExternalLink, BookOpen, ArrowRight, Shield, Award, Clock } from "lucide-react";

interface Course {
  name: string;
  platform: string;
  level: string;
  type: string;
  description: string;
  url?: string;
}

const categories: { title: string; courses: Course[] }[] = [
  {
    title: "Iniciação / Fundamentos",
    courses: [
      { name: "Google Cybersecurity Certificate", platform: "Coursera", level: "Iniciante", type: "Pago (com opção gratuita)", description: "Programa completo que cobre os fundamentos da cibersegurança, desde redes até resposta a incidentes.", url: "https://www.coursera.org/professional-certificates/google-cybersecurity" },
      { name: "Introduction to Cyber Security", platform: "FutureLearn", level: "Iniciante", type: "Gratuito", description: "Introdução acessível aos conceitos básicos de cibersegurança.", url: "https://www.futurelearn.com/courses/introduction-to-cyber-security" },
      { name: "Cybersecurity Essentials", platform: "Cisco", level: "Iniciante", type: "Gratuito", description: "Princípios essenciais de segurança, ameaças comuns e proteção de dados.", url: "https://www.netacad.com/courses/cybersecurity/cybersecurity-essentials" },
      { name: "Introduction to IT & Cybersecurity", platform: "Coursera", level: "Iniciante", type: "Gratuito (com opção paga)", description: "Panorama geral de TI e segurança antes de se especializar.", url: "https://www.coursera.org/learn/introduction-to-cyber-security" },
      { name: "Cyber Security Fundamentals", platform: "IBM (edX)", level: "Iniciante", type: "Gratuito (com certificado pago)", description: "Fundamentos com foco em ameaças reais e conceitos práticos.", url: "https://www.edx.org/learn/cybersecurity/ibm-cybersecurity-fundamentals" },
      { name: "IT Security: Defense against Digital Dark Arts", platform: "Google (Coursera)", level: "Iniciante", type: "Pago (com opção gratuita)", description: "Encriptação, autenticação e defesa de redes de forma prática.", url: "https://www.coursera.org/learn/it-security" },
      { name: "Cybersecurity for Everyone", platform: "Univ. Maryland (Coursera)", level: "Iniciante", type: "Gratuito (com certificado pago)", description: "Curso acessível sobre cibersegurança para não-técnicos e decisores.", url: "https://www.coursera.org/learn/cybersecurity-for-everyone" },
      { name: "Introduction to Cybersecurity Tools & Attacks", platform: "IBM (Coursera)", level: "Iniciante", type: "Gratuito (com certificado pago)", description: "Visão geral das ferramentas e tipos de ataque mais comuns.", url: "https://www.coursera.org/learn/introduction-cybersecurity-cyber-attacks" },
    ],
  },
  {
    title: "Network Security",
    courses: [
      { name: "Introduction to Network Security", platform: "NYU (Coursera)", level: "Intermédio", type: "Pago (com opção gratuita)", description: "Segurança de redes com rigor académico.", url: "https://www.coursera.org/learn/intro-cyber-security" },
      { name: "Network Security & Database Vulnerabilities", platform: "IBM", level: "Intermédio", type: "Gratuito (com certificado pago)", description: "Combina segurança de redes com vulnerabilidades de bases de dados.", url: "https://www.coursera.org/learn/network-security-database-vulnerabilities" },
      { name: "Wireshark for Beginners", platform: "Udemy", level: "Iniciante", type: "Pago", description: "Aprende a usar o Wireshark para analisar tráfego de rede.", url: "https://www.udemy.com/course/wireshark/" },
      { name: "Networking Basics", platform: "Cisco", level: "Iniciante", type: "Gratuito", description: "Fundamentos de redes pela Cisco.", url: "https://www.netacad.com/courses/networking/networking-basics" },
      { name: "Network Defense Essentials", platform: "EC-Council (CodeRed)", level: "Iniciante", type: "Gratuito", description: "Introdução à defesa de redes pelo EC-Council.", url: "https://codered.eccouncil.org/course/network-defense-essentials" },
      { name: "Network Security", platform: "Georgia Tech (Udacity)", level: "Intermédio", type: "Gratuito", description: "Curso universitário de nível avançado sobre segurança de redes.", url: "https://www.udacity.com/course/network-security--ud199" },
      { name: "Palo Alto Networks Cybersecurity", platform: "Palo Alto (Coursera)", level: "Intermédio", type: "Gratuito (com certificado pago)", description: "Segurança de redes e firewalls pela Palo Alto Networks.", url: "https://www.coursera.org/professional-certificates/palo-alto-networks-cybersecurity" },
    ],
  },
  {
    title: "Web Security & Ethical Hacking",
    courses: [
      { name: "Web Security Fundamentals", platform: "Google (web.dev)", level: "Iniciante", type: "Gratuito", description: "Recursos da Google sobre segurança web para programadores.", url: "https://web.dev/security" },
      { name: "Ethical Hacking Essentials", platform: "EC-Council", level: "Iniciante", type: "Gratuito", description: "Introdução ao hacking ético — reconhecimento, scanning e exploração.", url: "https://codered.eccouncil.org/course/ethical-hacking-essentials" },
      { name: "Penetration Testing", platform: "Cybrary", level: "Intermédio", type: "Gratuito (com plano pago)", description: "Curso prático de pentesting com labs.", url: "https://www.cybrary.it/" },
      { name: "Web Application Security", platform: "Stanford (YouTube)", level: "Intermédio", type: "Gratuito", description: "Aulas de Stanford sobre segurança de aplicações web.", url: "https://www.youtube.com/results?search_query=stanford+web+application+security" },
      { name: "Intro to Ethical Hacking", platform: "SANS Cyber Aces", level: "Iniciante", type: "Gratuito", description: "Introdução ao hacking ético pela SANS.", url: "https://www.sans.org/cyberaces/" },
      { name: "Bug Bounty Hunter Path", platform: "Bugcrowd University", level: "Intermédio", type: "Gratuito", description: "Encontrar vulnerabilidades em programas de bug bounty.", url: "https://www.bugcrowd.com/hackers/bugcrowd-university/" },
      { name: "PortSwigger Web Security Academy", platform: "PortSwigger", level: "Iniciante-Avançado", type: "Gratuito", description: "Academia completa de segurança web com labs interativos. Referência mundial.", url: "https://portswigger.net/web-security" },
      { name: "Practical Ethical Hacking", platform: "TCM Security (Udemy)", level: "Iniciante-Intermédio", type: "Pago", description: "Curso completo e prático de ethical hacking. Muito popular e bem avaliado.", url: "https://academy.tcm-sec.com/p/practical-ethical-hacking-the-complete-course" },
    ],
  },
  {
    title: "Cryptography & Secure Coding",
    courses: [
      { name: "Cryptography I", platform: "Stanford (Coursera)", level: "Intermédio", type: "Gratuito (com certificado pago)", description: "Curso de referência em criptografia pelo Professor Dan Boneh.", url: "https://www.coursera.org/learn/crypto" },
      { name: "Applied Cryptography", platform: "Udacity", level: "Intermédio", type: "Gratuito", description: "Abordagem prática à criptografia aplicada.", url: "https://www.udacity.com/course/applied-cryptography--cs387" },
      { name: "Secure Coding Practices", platform: "OpenSecurityTraining", level: "Intermédio", type: "Gratuito", description: "Programação segura essencial para developers.", url: "https://opensecuritytraining.info/" },
      { name: "Introduction to Applied Cryptography", platform: "Univ. London (Coursera)", level: "Iniciante", type: "Gratuito (com certificado pago)", description: "Versão mais acessível de criptografia aplicada.", url: "https://www.coursera.org/learn/introduction-applied-cryptography" },
      { name: "Software Security", platform: "Univ. Maryland (Coursera)", level: "Intermédio", type: "Gratuito (com certificado pago)", description: "Segurança de software — vulnerabilidades comuns e prevenção.", url: "https://www.coursera.org/learn/software-security" },
      { name: "Secure Software Development", platform: "Linux Foundation (edX)", level: "Intermédio", type: "Gratuito (com certificado pago)", description: "Desenvolvimento seguro orientado a DevSecOps.", url: "https://www.edx.org/learn/software-development/the-linux-foundation-secure-software-development-requirements-design-and-reuse" },
      { name: "OWASP Top 10 Training", platform: "OWASP", level: "Iniciante", type: "Gratuito", description: "Formação sobre as 10 vulnerabilidades web mais críticas segundo a OWASP.", url: "https://owasp.org/www-project-top-ten/" },
    ],
  },
  {
    title: "Cloud & Modern Infrastructure",
    courses: [
      { name: "AWS Cloud Security Fundamentals", platform: "AWS", level: "Iniciante", type: "Gratuito", description: "Fundamentos de segurança na AWS.", url: "https://aws.amazon.com/training/learn-about/security/" },
      { name: "Azure Security Technologies (AZ-500)", platform: "Microsoft Learn", level: "Intermédio", type: "Gratuito", description: "Preparação para certificação AZ-500.", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-security-engineer/" },
      { name: "Google Cloud Security", platform: "Coursera", level: "Intermédio", type: "Pago (com opção gratuita)", description: "Segurança na Google Cloud Platform.", url: "https://www.coursera.org/professional-certificates/google-cloud-security" },
      { name: "Cloud Security Fundamentals", platform: "IBM (Coursera)", level: "Iniciante", type: "Gratuito (com certificado pago)", description: "Visão geral de segurança cloud transversal a providers.", url: "https://www.coursera.org/learn/cloud-security" },
      { name: "Kubernetes Security Essentials (LFS260)", platform: "Linux Foundation", level: "Intermédio", type: "Pago", description: "Segurança em ambientes Kubernetes.", url: "https://training.linuxfoundation.org/training/kubernetes-security-essentials-lfs260/" },
      { name: "Docker Security", platform: "Udemy", level: "Intermédio", type: "Pago", description: "Boas práticas de segurança em Docker.", url: "https://www.udemy.com/course/docker-security/" },
      { name: "Terraform Security Best Practices", platform: "HashiCorp Learn", level: "Intermédio", type: "Gratuito", description: "Segurança em Infrastructure as Code com Terraform.", url: "https://developer.hashicorp.com/terraform/tutorials" },
    ],
  },
  {
    title: "SOC & Operações de Segurança",
    courses: [
      { name: "SOC Analyst Training", platform: "LetsDefend", level: "Iniciante-Intermédio", type: "Gratuito (com plano pago)", description: "Treino prático de analista SOC com simulações reais.", url: "https://letsdefend.io/" },
      { name: "Splunk Fundamentals 1", platform: "Splunk", level: "Iniciante", type: "Gratuito", description: "Fundamentos do SIEM Splunk — pesquisa, dashboards e alertas.", url: "https://www.splunk.com/en_us/training/courses/splunk-fundamentals-1.html" },
      { name: "Blue Team Level 1 (BTL1)", platform: "Security Blue Team", level: "Iniciante-Intermédio", type: "Pago", description: "Certificação prática para analistas de segurança defensiva.", url: "https://www.securityblue.team/courses/blue-team-level-1" },
      { name: "CyberDefenders Challenges", platform: "CyberDefenders", level: "Intermédio", type: "Gratuito", description: "Desafios Blue Team para praticar análise de incidentes.", url: "https://cyberdefenders.org/" },
      { name: "Elastic SIEM Training", platform: "Elastic", level: "Iniciante", type: "Gratuito", description: "Formação oficial do Elastic SIEM/ELK Stack.", url: "https://www.elastic.co/training/" },
    ],
  },
  {
    title: "Governance, Risk & Compliance (GRC)",
    courses: [
      { name: "IT Governance and Risk Management", platform: "Coursera", level: "Iniciante", type: "Gratuito (com certificado pago)", description: "Governança e gestão de riscos em TI.", url: "https://www.coursera.org/learn/it-governance-risk-management" },
      { name: "NIST Cybersecurity Framework", platform: "NIST (Oficial)", level: "Iniciante", type: "Gratuito", description: "Documentação oficial do framework NIST CSF.", url: "https://www.nist.gov/cyberframework" },
      { name: "ISO 27001 Lead Implementer", platform: "PECB", level: "Avançado", type: "Pago", description: "Certificação para implementar sistemas de gestão de segurança da informação.", url: "https://pecb.com/en/education-and-certification-for-individuals/iso-iec-27001" },
      { name: "RGPD/GDPR Fundamentals", platform: "Coursera", level: "Iniciante", type: "Gratuito (com certificado pago)", description: "Fundamentos do Regulamento Geral de Proteção de Dados.", url: "https://www.coursera.org/learn/gdpr" },
    ],
  },
  {
    title: "Digital Forensics & Incident Response",
    courses: [
      { name: "Digital Forensics Essentials", platform: "EC-Council (CodeRed)", level: "Iniciante", type: "Gratuito", description: "Fundamentos de investigação forense digital.", url: "https://codered.eccouncil.org/course/digital-forensics-essentials" },
      { name: "Computer Forensics", platform: "Coursera", level: "Intermédio", type: "Gratuito (com certificado pago)", description: "Técnicas de perícia informática e preservação de provas.", url: "https://www.coursera.org/learn/computer-forensics" },
      { name: "Autopsy Digital Forensics", platform: "Autopsy (Oficial)", level: "Iniciante", type: "Gratuito", description: "Formação oficial na ferramenta forense Autopsy.", url: "https://www.autopsy.com/support/training/" },
      { name: "Incident Response Training", platform: "SANS (YouTube)", level: "Iniciante", type: "Gratuito", description: "Webinars e vídeos gratuitos da SANS sobre resposta a incidentes.", url: "https://www.youtube.com/@SANSInstitute" },
    ],
  },
  {
    title: "Certificações Profissionais",
    courses: [
      { name: "CompTIA Security+ (SY0-701)", platform: "CompTIA", level: "Iniciante-Intermédio", type: "Pago", description: "Certificação de referência para entrar no mercado de cibersegurança.", url: "https://www.comptia.org/certifications/security" },
      { name: "CompTIA CySA+", platform: "CompTIA", level: "Intermédio", type: "Pago", description: "Certificação para analistas de segurança — foco em deteção e resposta.", url: "https://www.comptia.org/certifications/cybersecurity-analyst" },
      { name: "CEH (Certified Ethical Hacker)", platform: "EC-Council", level: "Intermédio", type: "Pago", description: "Certificação reconhecida em ethical hacking.", url: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/" },
      { name: "OSCP (Offensive Security)", platform: "OffSec", level: "Avançado", type: "Pago", description: "A certificação mais respeitada em pentesting — 100% prática.", url: "https://www.offsec.com/courses/pen-200/" },
      { name: "PNPT (Practical Network Pentesting)", platform: "TCM Security", level: "Intermédio", type: "Pago", description: "Certificação prática e acessível de pentesting.", url: "https://certifications.tcm-sec.com/" },
      { name: "CISSP", platform: "ISC²", level: "Avançado", type: "Pago", description: "Certificação de gestão de segurança — gold standard para líderes.", url: "https://www.isc2.org/certifications/cissp" },
    ],
  },
];

const pathSuggestions = [
  { condition: "Se estás a começar do zero", suggestion: "Faz 1–2 cursos de fundamentos primeiro (Google Cybersecurity Certificate ou Cisco Essentials). Depois avança para Security+." },
  { condition: "Se já trabalhas com redes", suggestion: "Considera os cursos de Network Security e avança para SOC, Threat Intelligence e a certificação CySA+." },
  { condition: "Se estás em desenvolvimento/software", suggestion: "Dá prioridade a Web Security, Secure Coding, PortSwigger Academy e DevSecOps." },
  { condition: "Se trabalhas com cloud", suggestion: "Foca em Cloud & Modern Infrastructure e complementa com certificações AWS/Azure Security." },
  { condition: "Se queres ser pentester", suggestion: "Começa com TryHackMe/HackTheBox, depois Practical Ethical Hacking (TCM) e certifica-te com PNPT ou OSCP." },
  { condition: "Se queres trabalhar em SOC", suggestion: "Faz o percurso LetsDefend + Splunk Fundamentals + BTL1. Pratica com CyberDefenders." },
];

export default function Formacoes() {
  return (
    <div className="min-h-screen bg-background grid-pattern">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 cyber-gradient opacity-50" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-primary/10 cyber-border">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Formações & Cursos Recomendados</h1>
                <p className="text-primary font-mono text-sm">Percurso de aprendizagem organizado</p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-3xl text-base leading-relaxed">
              Uma seleção de cursos organizados por área e nível, com descrições em português para te ajudar a escolher o melhor percurso de aprendizagem em cibersegurança.
            </p>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              <div className="rounded-lg bg-card cyber-border p-3 text-center">
                <BookOpen className="h-5 w-5 text-primary mx-auto mb-1" />
                <p className="text-lg font-bold text-foreground">{categories.reduce((a, c) => a + c.courses.length, 0)}+</p>
                <p className="text-xs text-muted-foreground">Cursos</p>
              </div>
              <div className="rounded-lg bg-card cyber-border p-3 text-center">
                <Award className="h-5 w-5 text-primary mx-auto mb-1" />
                <p className="text-lg font-bold text-foreground">{categories.length}</p>
                <p className="text-xs text-muted-foreground">Categorias</p>
              </div>
              <div className="rounded-lg bg-card cyber-border p-3 text-center">
                <Shield className="h-5 w-5 text-primary mx-auto mb-1" />
                <p className="text-lg font-bold text-foreground">40%+</p>
                <p className="text-xs text-muted-foreground">Gratuitos</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Path Suggestions */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          Sugestões de Percurso
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {pathSuggestions.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="rounded-lg bg-card cyber-border p-4">
              <p className="text-sm font-semibold text-primary mb-1">{s.condition}:</p>
              <p className="text-sm text-muted-foreground">{s.suggestion}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Course Categories */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-12 space-y-10">
        {categories.map((cat) => (
          <motion.div key={cat.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <ArrowRight className="h-5 w-5 text-primary" />
              {cat.title}
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {cat.courses.map((course, i) => (
                <a
                  key={i}
                  href={course.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-card cyber-border p-4 card-hover group block"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-foreground text-sm leading-tight group-hover:text-primary transition-colors">{course.name}</h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{course.platform}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">{course.level}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent">{course.type}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{course.description}</p>
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
