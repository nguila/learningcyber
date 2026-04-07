import BlockPage from "@/components/BlockPage";
import { Server, BarChart3, Shield, FileText, AlertCircle, RotateCcw } from "lucide-react";

export default function SOC() {
  return (
    <BlockPage
      title="Security Operations (SOC)"
      subtitle="A sala de controlo da cibersegurança"
      icon={Server}
      description="O SOC — Security Operations Center — é como a torre de controlo de um aeroporto, mas para a segurança informática. É aqui que equipas especializadas monitorizam sistemas 24/7, detetam atividades suspeitas e respondem a incidentes de segurança em tempo real."
      audience="Profissionais que querem trabalhar em segurança operacional, gestores de TI, e qualquer pessoa que queira perceber como as organizações se defendem de ataques no dia a dia."
      connections="O SOC utiliza ferramentas de Security Tools, baseia-se nos Foundations (redes, logs), alimenta-se de Threat Intelligence e coordena com Incident Response e Digital Forensics."
      subtopics={[
        {
          title: "SIEM (Splunk, ELK, etc.)",
          icon: BarChart3,
          explanation: "SIEM significa Security Information and Event Management. É um sistema central que recolhe registos (logs) de todos os sistemas — servidores, firewalls, computadores, aplicações — e correlaciona essa informação para encontrar padrões suspeitos. Imagina um quadro de CCTV num centro comercial, mas em vez de câmaras de vídeo, tens milhares de registos digitais a passar em tempo real.",
          importance: "Sem um SIEM, seria impossível analisar manualmente os milhões de eventos que um sistema gera diariamente. É a ferramenta que transforma dados brutos em alertas acionáveis.",
          realExample: "Uma empresa deteta, através do SIEM, que um funcionário está a aceder a ficheiros confidenciais às 3h da manhã desde um IP de outro país. O SIEM correlaciona o login suspeito com uma tentativa de transferência de dados e gera um alerta automático.",
          practicalTask: "Embora não tenhas acesso a um SIEM empresarial, podes ver o conceito em ação: no Windows, abre o Visualizador de Eventos (Event Viewer) e explora a secção 'Segurança'. Vais ver registos de logins, tentativas falhadas e alterações de sistema. Num SIEM, milhares destes registos são analisados em simultâneo.",
          bestPractices: [
            "Centraliza sempre os logs dos teus sistemas — não os guardes apenas localmente.",
            "Define alertas para eventos críticos (logins falhados consecutivos, acessos fora de hora).",
            "Revê e ajusta as regras de correlação regularmente para reduzir falsos positivos.",
          ],
        },
        {
          title: "EDR / XDR",
          icon: Shield,
          explanation: "EDR (Endpoint Detection and Response) é como um antivírus de nova geração. Mas em vez de apenas bloquear ficheiros maliciosos conhecidos, o EDR observa o comportamento dos programas no teu computador. Se um programa começa a encriptar ficheiros em massa (como ransomware), o EDR deteta o comportamento anómalo e pode bloqueá-lo automaticamente. XDR (Extended Detection and Response) vai mais longe: correlaciona dados de endpoints, rede, email e cloud para dar uma visão completa do ataque.",
          importance: "Os antivírus tradicionais só reconhecem ameaças já conhecidas. O EDR/XDR deteta ameaças novas pelo seu comportamento, o que é crucial contra ataques sofisticados.",
          realExample: "Em 2021, o ataque Colonial Pipeline foi detetado por ferramentas EDR que identificaram comportamento incomum nos sistemas, mas a resposta inicial foi lenta. Após o incidente, a empresa reforçou as capacidades de EDR/XDR.",
          practicalTask: "No teu computador, verifica as definições de segurança: no Windows, vai a Definições > Privacidade e Segurança > Segurança do Windows. Vê se a proteção em tempo real está ativa e se há ameaças detetadas recentemente. Isto é uma versão simplificada do que um EDR faz.",
          bestPractices: [
            "Mantém a proteção em tempo real sempre ativa.",
            "Não ignores alertas de segurança do sistema — investiga-os.",
            "Em ambiente empresarial, implementa EDR em todos os endpoints, incluindo servidores.",
          ],
        },
        {
          title: "Análise de Logs",
          icon: FileText,
          explanation: "Logs são registos automáticos de tudo o que acontece num sistema: quem entrou, a que horas, que ficheiros abriu, que erros ocorreram. Analisar logs é como ler o diário de bordo de um navio — depois de um incidente, os logs contam a história do que aconteceu. Mas também se usam preventivamente: ao notar padrões estranhos nos logs, pode-se detetar um ataque antes de causar danos.",
          importance: "Sem logs, é como investigar um crime sem provas. São essenciais para deteção, investigação e prova de incidentes de segurança.",
          realExample: "Num caso real, uma empresa descobriu que um ex-funcionário continuava a aceder aos sistemas semanas após ter saído. Os logs de autenticação mostraram logins com as suas credenciais antigas — a conta não tinha sido desativada.",
          practicalTask: "No Windows, abre o Visualizador de Eventos e vai a Registos do Windows > Segurança. Procura eventos com ID 4624 (login bem-sucedido) e 4625 (login falhado). No Mac/Linux, abre o terminal e escreve 'last' para ver os últimos logins no sistema.",
          bestPractices: [
            "Ativa logging em todos os sistemas e aplicações críticas.",
            "Guarda logs por um período mínimo adequado (geralmente 90 dias a 1 ano).",
            "Protege os logs contra alteração — um atacante pode tentar apagar os seus rastos.",
          ],
        },
        {
          title: "Triagem de Alertas (Alert Triage)",
          icon: AlertCircle,
          explanation: "Num SOC, chegam centenas ou milhares de alertas por dia. A maioria são falsos positivos — alarmes que disparam sem ser um ataque real (como um detetor de fumo que dispara quando cozinhas). Alert triage é o processo de analisar cada alerta, decidir se é real e qual a prioridade. É uma competência fundamental: saber distinguir ruído de perigo real.",
          importance: "Se todos os alertas fossem tratados com a mesma urgência, os analistas ficariam sobrecarregados e poderiam perder um ataque real no meio do ruído. A triagem eficaz salva organizações.",
          realExample: "Imagina três alertas: (1) 'Utilizador acedeu fora do horário normal' — pode ser trabalho extra. (2) 'Transferência de 5 GB de dados para USB às 2h' — suspeito, merece investigação imediata. (3) 'Scan de portas a partir de IP interno' — pode ser teste autorizado, mas deve ser verificado. O alerta 2 teria prioridade máxima.",
          practicalTask: "Exercício mental: imagina que recebes estes três alertas no teu email pessoal: (A) 'Novo login na tua conta — Lisboa, Portugal'; (B) 'Novo login na tua conta — Moscovo, Rússia'; (C) 'Password alterada com sucesso'. Qual investigarias primeiro? O (B), claro — localização inesperada. Depois o (C), para confirmar se foste tu. Este é o raciocínio de triagem.",
          bestPractices: [
            "Classifica alertas por severidade: crítico, alto, médio, baixo.",
            "Documenta cada decisão de triagem para referência futura.",
            "Automatiza a resposta a alertas de baixa severidade repetitivos.",
          ],
        },
        {
          title: "Resposta a Incidentes",
          icon: RotateCcw,
          explanation: "Quando um ataque real é confirmado, entra em ação o plano de resposta a incidentes. Tem fases bem definidas: (1) Deteção — identificar o incidente. (2) Contenção — limitar o dano (ex.: isolar o computador afetado). (3) Erradicação — remover a ameaça. (4) Recuperação — restaurar sistemas ao normal. (5) Lessons Learned — analisar o que correu mal e melhorar para o futuro.",
          importance: "Uma resposta desorganizada pode transformar um incidente pequeno numa catástrofe. Ter um plano estruturado reduz o impacto e o tempo de recuperação.",
          realExample: "Em 2020, a SolarWinds sofreu um ataque massivo à cadeia de fornecimento. A resposta envolveu detetar que software malicioso estava embebido em atualizações legítimas (deteção), isolar os sistemas afetados (contenção), remover o malware (erradicação), reinstalar sistemas limpos (recuperação) e redesenhar processos de verificação de software (lessons learned).",
          practicalTask: "Cria o teu próprio mini-plano de resposta pessoal: se amanhã descobrires que a tua conta de email foi comprometida, o que farias? Escreve os passos: (1) Mudar password imediatamente. (2) Ativar MFA. (3) Verificar atividade recente. (4) Rever emails enviados sem o teu conhecimento. (5) Alertar contactos se necessário.",
          bestPractices: [
            "Tem um plano de resposta documentado ANTES de precisares dele.",
            "Pratica simulações de incidente regularmente (tabletop exercises).",
            "Após cada incidente real, faz uma sessão de lessons learned e atualiza o plano.",
            "Comunica de forma clara e rápida com todas as partes envolvidas.",
          ],
        },
      ]}
      tools={[
        { name: "Splunk", url: "https://www.splunk.com", desc: "SIEM líder de mercado com versão gratuita para aprendizagem" },
        { name: "Elastic SIEM (ELK)", url: "https://www.elastic.co/security", desc: "SIEM open-source baseado em Elasticsearch" },
        { name: "Wazuh", url: "https://wazuh.com", desc: "SIEM e XDR open-source gratuito" },
        { name: "TheHive", url: "https://thehive-project.org", desc: "Plataforma open-source de resposta a incidentes" },
        { name: "Velociraptor", url: "https://docs.velociraptor.app", desc: "Ferramenta de monitorização e resposta em endpoints" },
      ]}
      websites={[
        { name: "LetsDefend", url: "https://letsdefend.io", desc: "Plataforma de treino SOC com simulações práticas" },
        { name: "CyberDefenders", url: "https://cyberdefenders.org", desc: "Desafios Blue Team e análise de incidentes" },
        { name: "SANS Reading Room", url: "https://www.sans.org/white-papers", desc: "Artigos técnicos sobre operações de segurança" },
        { name: "Security Onion", url: "https://securityonionsolutions.com", desc: "Distribuição Linux para monitorização de segurança" },
      ]}
      relatedAreas={[
        { title: "Threat Intelligence", url: "/threat-intelligence", desc: "Inteligência de ameaças para alimentar o SOC" },
        { title: "Digital Forensics", url: "/digital-forensics", desc: "Investigação pós-incidente" },
        { title: "Security Tools", url: "/security-tools", desc: "Ferramentas usadas diariamente no SOC" },
      ]}
    />
  );
}
