import BlockPage from "@/components/BlockPage";
import { Scale, Award, TrendingUp, FileText, ClipboardCheck } from "lucide-react";

export default function GRC() {
  return (
    <BlockPage
      title="Governance, Risk & Compliance (GRC)"
      subtitle="Regras, gestão de riscos e conformidade"
      icon={Scale}
      description="GRC é a camada organizacional da cibersegurança: define regras (governance), avalia e gere riscos (risk management) e garante conformidade com leis e normas (compliance). É menos técnico e mais estratégico — mas sem GRC, a segurança técnica não tem direção nem sustentabilidade."
      audience="Gestores, responsáveis de conformidade, pequenos empresários que precisam de cumprir regulamentos, profissionais de TI que querem perceber o contexto organizacional da segurança."
      connections="Enquadra toda a stack: define que nível de segurança é necessário, que normas seguir e como priorizar investimentos. Liga-se a todos os blocos técnicos, especialmente SOC, Vulnerability Management e Cloud Security."
      subtopics={[
        {
          title: "ISO 27001",
          icon: Award,
          explanation: "A ISO 27001 é uma norma internacional que define como implementar um Sistema de Gestão de Segurança da Informação (SGSI). É como um 'manual de boas práticas' certificável — as organizações podem ser auditadas e obter certificação ISO 27001, demonstrando que levam a segurança a sério. A norma cobre desde políticas e procedimentos até controlos técnicos e formação de pessoal.",
          importance: "A certificação ISO 27001 é frequentemente exigida por clientes empresariais e parceiros. Demonstra que a organização tem processos maduros de segurança e não depende apenas de tecnologia.",
          realExample: "Uma startup portuguesa que queria vender software a uma grande empresa europeia precisou de obter certificação ISO 27001 como pré-requisito do contrato. O processo demorou 9 meses e envolveu documentar todas as políticas de segurança, implementar controlos e passar por uma auditoria externa.",
          practicalTask: "Pensa na tua 'política de segurança pessoal': tens regras definidas sobre como geres passwords? Fazes backups com que frequência? Quem pode usar o teu computador? Escrever estas regras é, em miniatura, o que a ISO 27001 faz para organizações.",
          bestPractices: [
            "Começa pela análise de risco — a ISO 27001 baseia-se em riscos, não em checklists.",
            "Documenta políticas e procedimentos de forma clara e acessível.",
            "Envolve a gestão de topo — sem apoio executivo, o SGSI não funciona.",
            "Trata a certificação como processo contínuo, não evento único.",
          ],
        },
        {
          title: "PCI-DSS",
          icon: Scale,
          explanation: "PCI-DSS (Payment Card Industry Data Security Standard) é a norma de segurança para organizações que processam pagamentos com cartão. Se o teu negócio aceita Visa, Mastercard ou outros cartões, tens de cumprir PCI-DSS. Define requisitos como encriptação de dados de cartão, restrição de acessos, monitorização e testes regulares de segurança.",
          importance: "O não cumprimento pode resultar em multas pesadas, perda do direito de processar pagamentos e danos reputacionais enormes em caso de fuga de dados de cartões.",
          realExample: "Em 2013, a Target (grande retalhista americana) sofreu uma fuga de dados de 40 milhões de cartões de crédito. A investigação revelou múltiplas falhas PCI-DSS: passwords por defeito em sistemas, falta de segmentação de rede e monitorização insuficiente. O custo total ultrapassou 300 milhões de dólares.",
          practicalTask: "Quando fazes um pagamento online, nota como os sites tratam os teus dados de cartão: os bons sites nunca mostram o número completo depois de o inserires, usam HTTPS e muitos redirecionam para um gateway de pagamento (Stripe, PayPal) em vez de processar diretamente — isto simplifica o cumprimento PCI-DSS.",
          bestPractices: [
            "Se possível, usa gateways de pagamento (Stripe, PayPal) que reduzem o âmbito PCI-DSS.",
            "Nunca guardes dados de cartão em texto simples.",
            "Segmenta a rede para isolar sistemas que processam pagamentos.",
            "Faz scans de vulnerabilidade trimestrais como requerido pela norma.",
          ],
        },
        {
          title: "Gestão de Risco (Risk Management)",
          icon: TrendingUp,
          explanation: "Gestão de risco é o processo de identificar o que pode correr mal, avaliar a probabilidade e o impacto, e decidir o que fazer: mitigar (reduzir), transferir (seguros), aceitar (se o risco for baixo) ou evitar (eliminar a atividade). É o coração do GRC — sem avaliação de risco, não sabemos onde investir em segurança.",
          importance: "Recursos são limitados. A gestão de risco garante que o investimento em segurança vai para onde o impacto potencial é maior, em vez de dispersar esforços.",
          realExample: "Uma PME avalia dois riscos: (A) Ransomware — probabilidade alta, impacto crítico (paragem total). (B) Defacement do site (alteração visual) — probabilidade média, impacto baixo (incómodo). A gestão de risco diz: prioriza proteção contra ransomware (backups, formação, EDR) sobre proteção do site.",
          practicalTask: "Faz a tua avaliação de risco pessoal: (1) Lista 3 riscos digitais que te preocupam (perder o telemóvel, conta hackeada, perder fotos). (2) Para cada um, avalia probabilidade (alta/média/baixa) e impacto. (3) Define uma ação para cada risco — backups, MFA, seguro. Parabéns, acabaste de fazer gestão de risco.",
          bestPractices: [
            "Faz avaliações de risco regulares (anualmente no mínimo).",
            "Usa uma framework reconhecida (NIST, ISO 27005, FAIR).",
            "Documenta riscos aceites — é tão importante como os mitigados.",
            "Comunica riscos à gestão em linguagem de negócio, não técnica.",
          ],
        },
        {
          title: "Políticas e Standards",
          icon: FileText,
          explanation: "Políticas de segurança são as 'regras da casa' — documentos que definem o que é permitido, proibido e recomendado em termos de segurança. Exemplos: política de passwords (tamanho mínimo, rotação), política de uso aceitável (o que podes fazer com equipamento da empresa), política de classificação de dados (confidencial, interno, público). Standards são normas técnicas mais detalhadas que implementam as políticas.",
          importance: "Sem políticas claras, cada pessoa faz o que quer — uns usam passwords de 4 caracteres, outros partilham contas. As políticas criam consistência e responsabilidade.",
          realExample: "Uma empresa implementou uma política de password mínima de 12 caracteres com MFA obrigatório. Em 6 meses, as tentativas de acesso não autorizado bem-sucedidas caíram 95%. Antes, muitos funcionários usavam passwords como '123456' ou 'empresa2024'.",
          practicalTask: "Cria uma 'política de password pessoal': (1) Mínimo 14 caracteres. (2) Única para cada serviço. (3) Guardada num gestor de passwords. (4) MFA ativo onde disponível. (5) Nunca partilhada por email ou chat. Escreve e segue — é a tua primeira política de segurança!",
          bestPractices: [
            "Políticas devem ser claras, concisas e compreensíveis por não-técnicos.",
            "Revê e atualiza políticas pelo menos anualmente.",
            "Garante que as políticas são comunicadas e que há formação associada.",
            "Políticas sem enforcement são apenas sugestões — define consequências.",
          ],
        },
        {
          title: "Auditoria (Auditing)",
          icon: ClipboardCheck,
          explanation: "Auditoria de segurança é o processo de verificar se as políticas, controlos e procedimentos estão realmente a funcionar como esperado. Pode ser interna (feita pela própria equipa) ou externa (feita por auditores independentes). É como uma inspeção — verifica se o que está no papel corresponde à realidade.",
          importance: "Ter políticas não basta — é preciso verificar se são cumpridas. Muitas organizações têm políticas excelentes que ninguém segue. A auditoria colmata esta lacuna.",
          realExample: "Numa auditoria interna, uma empresa descobriu que 40% das contas de ex-funcionários ainda estavam ativas nos sistemas. A política de offboarding existia, mas não estava a ser seguida pelo departamento de RH. A auditoria identificou a falha e levou à automação do processo.",
          practicalTask: "Faz uma mini-auditoria pessoal: (1) As tuas passwords cumprem a tua 'política' pessoal? (2) Tens MFA ativo nas contas importantes? (3) Tens backups recentes? (4) Há apps ou serviços com acesso às tuas contas que já não usas? Verifica e corrige.",
          bestPractices: [
            "Programa auditorias regulares (internas e externas).",
            "Usa checklists baseadas em normas reconhecidas (ISO 27001, NIST).",
            "Documenta descobertas e acompanha a correção de deficiências.",
            "Trata a auditoria como melhoria contínua, não como punição.",
          ],
        },
      ]}
      tools={[
        { name: "Vanta", url: "https://www.vanta.com", desc: "Automação de conformidade (SOC 2, ISO 27001)" },
        { name: "Drata", url: "https://drata.com", desc: "Plataforma de conformidade contínua" },
        { name: "OneTrust", url: "https://www.onetrust.com", desc: "Gestão de privacidade e conformidade RGPD" },
        { name: "NIST CSF Tool", url: "https://www.nist.gov/cyberframework", desc: "Framework de cibersegurança do NIST" },
      ]}
      websites={[
        { name: "CNPD", url: "https://www.cnpd.pt", desc: "Comissão Nacional de Proteção de Dados (Portugal)" },
        { name: "ENISA", url: "https://www.enisa.europa.eu", desc: "Agência europeia de cibersegurança" },
        { name: "CNCS", url: "https://www.cncs.gov.pt", desc: "Centro Nacional de Cibersegurança de Portugal" },
        { name: "NIST Cybersecurity", url: "https://www.nist.gov/cybersecurity", desc: "Normas e frameworks de segurança dos EUA" },
        { name: "ISACA", url: "https://www.isaca.org", desc: "Associação profissional de governança e auditoria TI" },
      ]}
      relatedAreas={[
        { title: "Privacy Engineering", url: "/privacy-engineering", desc: "Privacidade por design e RGPD" },
        { title: "Cloud Security", url: "/cloud-security", desc: "Conformidade em ambientes cloud" },
        { title: "SOC", url: "/soc", desc: "Operações de segurança" },
      ]}
    />
  );
}
