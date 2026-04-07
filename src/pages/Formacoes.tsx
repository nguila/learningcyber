import { motion } from "framer-motion";
import { GraduationCap, ExternalLink, BookOpen, ArrowRight } from "lucide-react";

interface Course {
  name: string;
  platform: string;
  level: string;
  type: string;
  description: string;
}

const categories: { title: string; courses: Course[] }[] = [
  {
    title: "Iniciação / Fundamentos",
    courses: [
      { name: "Google Cybersecurity Certificate", platform: "Coursera", level: "Iniciante", type: "Pago (com opção gratuita)", description: "Programa completo que cobre os fundamentos da cibersegurança, desde redes até resposta a incidentes. Bom ponto de partida para quem começa do zero." },
      { name: "Introduction to Cyber Security", platform: "FutureLearn", level: "Iniciante", type: "Gratuito", description: "Introdução acessível aos conceitos básicos de cibersegurança. Ideal para quem quer uma primeira visão geral sem compromisso." },
      { name: "Cybersecurity Essentials", platform: "Cisco", level: "Iniciante", type: "Gratuito", description: "Cobre os princípios essenciais de segurança, incluindo ameaças comuns e proteção de dados. Reconhecido pela indústria." },
      { name: "Introduction to IT & Cybersecurity", platform: "Coursera", level: "Iniciante", type: "Gratuito (com opção paga)", description: "Ponto de partida para quem quer perceber o panorama geral de TI e segurança antes de se especializar." },
      { name: "Cyber Security Fundamentals", platform: "IBM (edX)", level: "Iniciante", type: "Gratuito (com certificado pago)", description: "Curso da IBM que explora os fundamentos com foco em ameaças reais e conceitos práticos." },
      { name: "IT Security: Defense against Digital Dark Arts", platform: "Google (Coursera)", level: "Iniciante", type: "Pago (com opção gratuita)", description: "Parte do certificado profissional de TI da Google. Aborda encriptação, autenticação e defesa de redes de forma prática." },
    ],
  },
  {
    title: "Network Security",
    courses: [
      { name: "Introduction to Network Security", platform: "NYU (Coursera)", level: "Intermédio", type: "Pago (com opção gratuita)", description: "Aborda segurança de redes com rigor académico. Indicado para quem já tem bases de networking." },
      { name: "Network Security & Database Vulnerabilities", platform: "IBM", level: "Intermédio", type: "Gratuito (com certificado pago)", description: "Combina segurança de redes com vulnerabilidades de bases de dados. Perspetiva prática da IBM." },
      { name: "Wireshark for Beginners", platform: "Udemy", level: "Iniciante", type: "Pago", description: "Aprende a usar o Wireshark para analisar tráfego de rede. Muito prático e visual." },
      { name: "Networking Basics", platform: "Cisco", level: "Iniciante", type: "Gratuito", description: "Fundamentos de redes pela Cisco. Base essencial antes de avançar para segurança de rede." },
      { name: "Network Defense Essentials", platform: "EC-Council (CodeRed)", level: "Iniciante", type: "Gratuito", description: "Introdução à defesa de redes pelo EC-Council. Bom complemento para quem quer certificação futura." },
      { name: "Network Security", platform: "Georgia Tech (Udacity)", level: "Intermédio", type: "Gratuito", description: "Curso universitário de nível avançado. Indicado para quem já domina os fundamentos de redes." },
    ],
  },
  {
    title: "Web Security & Ethical Hacking",
    courses: [
      { name: "Web Security Fundamentals", platform: "Google (web.dev)", level: "Iniciante", type: "Gratuito", description: "Recursos da Google sobre segurança web. Ideal para programadores web que querem perceber as bases." },
      { name: "Ethical Hacking Essentials", platform: "EC-Council", level: "Iniciante", type: "Gratuito", description: "Introdução ao hacking ético pelo EC-Council. Cobre reconhecimento, scanning e conceitos de exploração de forma responsável." },
      { name: "Penetration Testing", platform: "Cybrary", level: "Intermédio", type: "Gratuito (com plano pago)", description: "Curso prático de pentesting com labs. Indicado para quem já tem bases sólidas e quer praticar." },
      { name: "Web Application Security", platform: "Stanford (YouTube)", level: "Intermédio", type: "Gratuito", description: "Playlist de aulas de Stanford sobre segurança de aplicações web. Conteúdo académico de qualidade." },
      { name: "Intro to Ethical Hacking", platform: "SANS Cyber Aces", level: "Iniciante", type: "Gratuito", description: "Introdução ao hacking ético pela SANS, uma das organizações mais respeitadas em formação de segurança." },
      { name: "Bug Bounty Hunter Path", platform: "Bugcrowd University", level: "Intermédio", type: "Gratuito", description: "Aprende a encontrar vulnerabilidades em programas de bug bounty. Foco prático e orientado a resultados." },
    ],
  },
  {
    title: "Cryptography & Secure Coding",
    courses: [
      { name: "Cryptography I", platform: "Stanford (Coursera)", level: "Intermédio", type: "Gratuito (com certificado pago)", description: "Curso de referência em criptografia pelo Professor Dan Boneh. Rigoroso mas acessível. Indicado para quem quer bases sólidas." },
      { name: "Applied Cryptography", platform: "Udacity", level: "Intermédio", type: "Gratuito", description: "Abordagem prática à criptografia aplicada. Bom complemento ao curso teórico de Stanford." },
      { name: "Secure Coding Practices", platform: "OpenSecurityTraining", level: "Intermédio", type: "Gratuito", description: "Práticas de programação segura. Essencial para programadores que querem escrever código resistente a ataques." },
      { name: "Introduction to Applied Cryptography", platform: "Univ. London (Coursera)", level: "Iniciante", type: "Gratuito (com certificado pago)", description: "Versão mais acessível de criptografia aplicada. Bom ponto de partida antes do curso de Stanford." },
      { name: "Software Security", platform: "Univ. Maryland (Coursera)", level: "Intermédio", type: "Gratuito (com certificado pago)", description: "Segurança de software com foco em vulnerabilidades comuns e como preveni-las no código." },
      { name: "Secure Software Development", platform: "Linux Foundation (edX)", level: "Intermédio", type: "Gratuito (com certificado pago)", description: "Desenvolvimento seguro de software pela Linux Foundation. Prático e orientado a DevSecOps." },
    ],
  },
  {
    title: "Cloud & Modern Infrastructure",
    courses: [
      { name: "AWS Cloud Security Fundamentals", platform: "AWS", level: "Iniciante", type: "Gratuito", description: "Fundamentos de segurança na AWS. Essencial para quem trabalha ou quer trabalhar com cloud AWS." },
      { name: "Azure Security Technologies", platform: "Microsoft Learn", level: "Intermédio", type: "Gratuito", description: "Preparação para certificação AZ-500. Cobre identidades, plataforma e dados no Azure." },
      { name: "Google Cloud Security", platform: "Coursera", level: "Intermédio", type: "Pago (com opção gratuita)", description: "Segurança na Google Cloud Platform. Indicado para quem já usa GCP ou quer começar." },
      { name: "Cloud Security Fundamentals", platform: "IBM (Coursera)", level: "Iniciante", type: "Gratuito (com certificado pago)", description: "Visão geral de segurança cloud pela IBM. Aborda conceitos transversais a qualquer provider." },
      { name: "Kubernetes Security Essentials", platform: "Linux Foundation", level: "Intermédio", type: "Pago", description: "Segurança em ambientes Kubernetes. Indicado para quem já trabalha com containers e orquestração." },
      { name: "Docker Security", platform: "Udemy", level: "Intermédio", type: "Pago", description: "Boas práticas de segurança em Docker. Prático e focado em cenários reais de produção." },
    ],
  },
];

const pathSuggestions = [
  { condition: "Se estás a começar do zero", suggestion: "Faz 1–2 cursos de fundamentos primeiro (Google Cybersecurity Certificate ou Cisco Essentials)." },
  { condition: "Se já trabalhas com redes", suggestion: "Considera os cursos de Network Security e avança para SOC e Threat Intelligence." },
  { condition: "Se estás em desenvolvimento/software", suggestion: "Dá prioridade a Web Security, Secure Coding e DevSecOps." },
  { condition: "Se trabalhas com cloud", suggestion: "Foca em Cloud & Modern Infrastructure e complementa com IAM e segurança de containers." },
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
          </motion.div>
        </div>
      </div>

      {/* Path Suggestions */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          Sugestões de Percurso
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
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
        {categories.map((cat, ci) => (
          <motion.div key={cat.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <ArrowRight className="h-5 w-5 text-primary" />
              {cat.title}
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {cat.courses.map((course, i) => (
                <div key={i} className="rounded-xl bg-card cyber-border p-4 card-hover">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-foreground text-sm leading-tight">{course.name}</h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{course.platform}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">{course.level}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent">{course.type}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{course.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
