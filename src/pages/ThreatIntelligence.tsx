import BlockPage from "@/components/BlockPage";
import { Eye, Search, Rss, Grid3X3, Link2, Crosshair } from "lucide-react";

export default function ThreatIntelligence() {
  return (
    <BlockPage
      title="Threat Intelligence"
      subtitle="Conhecer o inimigo para melhor defender"
      icon={Eye}
      description="Threat Intelligence (inteligência de ameaças) é a disciplina de recolher, analisar e utilizar informação sobre atacantes, as suas motivações, técnicas e ferramentas. O objetivo é antecipar ataques em vez de apenas reagir a eles."
      audience="Analistas de segurança, equipas SOC, gestores de risco e qualquer pessoa curiosa sobre como os atacantes operam e como as organizações se preparam."
      connections="Alimenta diretamente o SOC com informação sobre ameaças, suporta Vulnerability Management na priorização de correções, e é essencial para Penetration Testing e Digital Forensics."
      subtopics={[
        {
          title: "OSINT (Open Source Intelligence)",
          icon: Search,
          explanation: "OSINT é a recolha de informação a partir de fontes públicas e abertas — notícias, redes sociais, registos públicos, fóruns, bases de dados acessíveis. Não se trata de 'espionagem', mas de usar informação disponível para entender ameaças. Pensa nisso como o trabalho de um jornalista investigativo, mas focado em segurança.",
          importance: "Muitos ataques começam com reconhecimento OSINT — o atacante pesquisa informação pública sobre a vítima. Perceber o que é público sobre ti ou a tua organização é o primeiro passo para te proteger.",
          realExample: "Em vários ataques de spear-phishing (phishing direcionado), os atacantes usaram informação do LinkedIn e redes sociais para criar emails convincentes. Sabiam o nome do chefe, projetos em curso e até datas de aniversário.",
          practicalTask: "Faz uma mini-auditoria OSINT a ti próprio: pesquisa o teu nome no Google, verifica que informação aparece em redes sociais públicas e pensa se um atacante poderia usar essa informação para te enviar um email convincente. Ajusta as definições de privacidade se necessário.",
          bestPractices: [
            "Revê regularmente o que está público sobre ti online.",
            "Limita a informação pessoal partilhada em perfis públicos.",
            "Usa OSINT apenas de forma ética e legal — nunca para invadir privacidade.",
          ],
        },
        {
          title: "Threat Feeds",
          icon: Rss,
          explanation: "Threat feeds são como 'noticiários' automáticos de ameaças. São listas continuamente atualizadas de indicadores de compromisso (IoC): endereços IP maliciosos, domínios usados em ataques, hashes de ficheiros de malware, etc. As organizações subscrevem estas feeds e integram-nas nos seus sistemas de defesa para bloquear ameaças conhecidas automaticamente.",
          importance: "Permitem que as defesas reajam rapidamente a novas ameaças — quando um novo malware é identificado, o seu 'fingerprint' é partilhado globalmente em minutos.",
          realExample: "Quando surge um novo ransomware, os investigadores partilham os hashes dos ficheiros maliciosos e os domínios de comando e controlo (C2) via threat feeds. Em poucas horas, firewalls e antivírus de todo o mundo já bloqueiam essa ameaça.",
          practicalTask: "Visita o site abuse.ch (é um projeto de investigação) e explora as listas públicas de URLs e domínios maliciosos. Observa como a informação é estruturada — cada entrada tem indicadores técnicos que os sistemas de defesa podem usar automaticamente.",
          bestPractices: [
            "Integra feeds de ameaças nos sistemas de defesa (firewall, SIEM, EDR).",
            "Usa múltiplas fontes de feeds para cobertura mais ampla.",
            "Verifica a qualidade dos feeds — nem todos são fiáveis.",
          ],
        },
        {
          title: "MITRE ATT&CK",
          icon: Grid3X3,
          explanation: "O MITRE ATT&CK é uma base de dados pública e organizada de técnicas que os atacantes usam no mundo real. É apresentada como uma grande tabela (matriz) organizada por fases do ataque: reconhecimento, acesso inicial, execução, persistência, escalação de privilégios, etc. Para cada técnica, há exemplos reais de grupos de atacantes que a usaram.",
          importance: "É a 'língua comum' da cibersegurança. Permite que equipas de defesa avaliem: 'contra que técnicas estamos protegidos e contra quais não?'",
          realExample: "A técnica T1566 (Phishing) é uma das mais documentadas. O ATT&CK mostra que dezenas de grupos diferentes, desde criminosos a estados-nação, usam phishing como técnica de acesso inicial. Inclui subtipos: spear-phishing por email, por link ou por anexo.",
          practicalTask: "Visita attack.mitre.org e explora a matriz. Clica numa técnica que conheças (ex.: Phishing) e lê a descrição simplificada. Nota quantos grupos diferentes usam essa técnica e que contramedidas são sugeridas. Não precisas de entender tudo — o objetivo é ver como o conhecimento está organizado.",
          bestPractices: [
            "Usa o ATT&CK para mapear as defesas da tua organização contra técnicas conhecidas.",
            "Em investigações, referencia técnicas ATT&CK para comunicar de forma clara.",
            "Prioriza defesas contra as técnicas mais comuns no teu setor.",
          ],
        },
        {
          title: "Cyber Kill Chain",
          icon: Link2,
          explanation: "A Cyber Kill Chain (Cadeia de Ataque) é um modelo que descreve as fases típicas de um ciberataque: (1) Reconhecimento — o atacante investiga o alvo. (2) Armamento — prepara a ferramenta de ataque. (3) Entrega — envia o ataque (ex.: email com anexo malicioso). (4) Exploração — a vulnerabilidade é explorada. (5) Instalação — malware é instalado. (6) Comando e Controlo (C2) — o atacante comunica com o malware. (7) Ações no objetivo — roubo de dados, destruição, etc.",
          importance: "Se conseguires interromper o ataque em qualquer fase, impedes o resultado final. Quanto mais cedo melhor — por isso, investir em deteção nas fases iniciais é crucial.",
          realExample: "Num ataque típico de ransomware: o atacante investiga a empresa (reconhecimento), cria um email falso com anexo (armamento + entrega), o funcionário abre o documento (exploração), o ransomware instala-se (instalação), comunica com o servidor do atacante (C2) e encripta todos os ficheiros (ação no objetivo).",
          practicalTask: "Pensa num email de phishing que tenhas recebido (ou imagina um). Tenta mapear as fases da kill chain: quem te enviou? Como te encontrou? Que método usou? O que aconteceria se tivesses clicado? Em que fase podias ter parado o 'ataque'?",
          bestPractices: [
            "Implementa defesas em múltiplas fases da kill chain — não dependas de uma só.",
            "Formação de utilizadores ajuda a interromper ataques na fase de 'entrega'.",
            "Monitorização de rede ajuda a detetar comunicações C2.",
          ],
        },
        {
          title: "Threat Hunting",
          icon: Crosshair,
          explanation: "Ao contrário da monitorização passiva (esperar que um alerta dispare), o threat hunting é proativo: os analistas formulam hipóteses ('E se houvesse um atacante na nossa rede que ainda não foi detetado?') e vão procurar ativamente sinais de compromisso nos dados. É como um detetive que não espera pela queixa — vai investigar por iniciativa própria.",
          importance: "Muitos ataques avançados passam meses dentro de uma rede sem serem detetados (o chamado 'dwell time'). O threat hunting reduz este tempo ao procurar ativamente ameaças ocultas.",
          realExample: "Em 2020, foi descoberto que o grupo APT29 (associado à Rússia) esteve presente em redes governamentais dos EUA durante meses através do ataque SolarWinds. Só foi detetado quando uma empresa de segurança fez threat hunting e encontrou atividade anómala nos seus próprios sistemas.",
          practicalTask: "Exercício mental: imagina que és responsável pela segurança de uma pequena empresa. Que sinais procurarias para verificar se alguém está na rede sem autorização? Exemplos: computadores ligados fora de hora, transferências de dados invulgares, contas a aceder a recursos que nunca usaram antes.",
          bestPractices: [
            "Combina threat hunting com inteligência de ameaças para direcionar as buscas.",
            "Documenta todas as hipóteses e resultados — mesmo quando não encontras nada.",
            "Usa o MITRE ATT&CK como guia para formular hipóteses de hunting.",
          ],
        },
      ]}
      tools={[
        { name: "MITRE ATT&CK Navigator", url: "https://mitre-attack.github.io/attack-navigator", desc: "Ferramenta visual para mapear técnicas ATT&CK" },
        { name: "Maltego", url: "https://www.maltego.com", desc: "Ferramenta OSINT para análise de relações e ligações" },
        { name: "Shodan", url: "https://www.shodan.io", desc: "Motor de pesquisa para dispositivos ligados à internet" },
        { name: "VirusTotal", url: "https://www.virustotal.com", desc: "Análise de ficheiros e URLs suspeitos" },
        { name: "MISP", url: "https://www.misp-project.org", desc: "Plataforma open-source de partilha de inteligência" },
      ]}
      websites={[
        { name: "MITRE ATT&CK", url: "https://attack.mitre.org", desc: "Base de dados de técnicas de ataque" },
        { name: "AlienVault OTX", url: "https://otx.alienvault.com", desc: "Plataforma de partilha de indicadores de ameaças" },
        { name: "Abuse.ch", url: "https://abuse.ch", desc: "Projeto de rastreio de malware e botnets" },
        { name: "The DFIR Report", url: "https://thedfirreport.com", desc: "Relatórios detalhados de incidentes reais" },
        { name: "Krebs on Security", url: "https://krebsonsecurity.com", desc: "Blog de referência sobre ciberameaças" },
      ]}
      relatedAreas={[
        { title: "SOC", url: "/soc", desc: "Monitorização e resposta a incidentes" },
        { title: "Digital Forensics", url: "/digital-forensics", desc: "Investigação pós-incidente" },
        { title: "Pentesting", url: "/pentesting", desc: "Testes de segurança ofensivos" },
      ]}
    />
  );
}
