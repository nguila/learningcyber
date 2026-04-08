import BlockPage from "@/components/BlockPage";
import { Lock, FileText, Eye, UserCheck, Database } from "lucide-react";

export default function PrivacyEngineering() {
  return (
    <BlockPage
      title="Privacy Engineering"
      subtitle="Privacidade por design e proteção de dados pessoais"
      icon={Lock}
      description="Privacy Engineering aplica princípios de engenharia à proteção de dados pessoais. Com o RGPD na Europa e regulamentos semelhantes em todo o mundo, a privacidade deixou de ser opcional — é uma obrigação legal e ética. Este bloco ensina como proteger dados pessoais de forma prática e em conformidade com a lei."
      audience="Qualquer pessoa preocupada com a sua privacidade online, programadores, gestores de produto, DPOs (Data Protection Officers) e pequenos empresários que recolhem dados de clientes."
      connections="Liga-se a GRC (conformidade legal), Web & API Security (proteção de dados em trânsito), Cloud Security (dados na cloud), AI Security (dados em modelos de IA) e DevSecOps (privacy by design no desenvolvimento)."
      subtopics={[
        { title: "RGPD e Regulamentação", icon: FileText, explanation: "O RGPD (Regulamento Geral sobre a Proteção de Dados) é a lei europeia que regula como organizações recolhem, processam e armazenam dados pessoais. Define direitos dos titulares (acesso, retificação, apagamento), obrigações das organizações (consentimento, minimização de dados) e penalidades por incumprimento (até 4% do volume de negócios global).", importance: "O RGPD aplica-se a qualquer organização que processe dados de residentes da UE, independentemente de onde esteja sediada. As multas podem ser enormes e a reputação irreparável.", realExample: "Em 2023, a Meta (Facebook/Instagram) foi multada em 1.2 mil milhões de euros por transferir dados de utilizadores europeus para os EUA sem garantias adequadas de proteção. É a maior multa RGPD da história.", practicalTask: "Visita um site qualquer e observa o banner de cookies. Verifica se oferece opção de 'Rejeitar tudo' ou apenas 'Aceitar'. Os sites em conformidade com o RGPD devem tornar a rejeição tão fácil quanto a aceitação. Se encontrares um site que só permite aceitar, esse site pode estar em incumprimento.", bestPractices: ["Recolhe apenas os dados estritamente necessários (minimização).", "Obtém consentimento claro e informado antes de processar dados.", "Implementa mecanismos para os utilizadores exercerem os seus direitos.", "Mantém registos das atividades de processamento de dados."] },
        { title: "Privacy by Design", icon: Eye, explanation: "Privacy by Design significa integrar a proteção de privacidade desde a conceção de um sistema ou produto — não como funcionalidade adicional, mas como princípio fundamental. Inclui: minimização de dados (recolher só o necessário), pseudonimização, encriptação por defeito, configurações de privacidade restritivas por defeito e transparência.", importance: "É muito mais barato e eficaz construir privacidade desde o início do que tentar adicioná-la depois. O RGPD exige explicitamente Privacy by Design (Artigo 25).", realExample: "O Signal (app de mensagens) é um exemplo de Privacy by Design: encriptação end-to-end por defeito, sem recolha de metadados, código open-source verificável. Não precisa de confiar na empresa — a privacidade está na arquitetura.", practicalTask: "Da próxima vez que uma app te pedir dados pessoais (nome, email, data de nascimento, etc.), pergunta: 'Para quê que precisam de todos estes dados?' Se uma app de notas pede a tua data de nascimento, isso viola o princípio de minimização de dados.", bestPractices: ["Aplica o princípio de minimização — recolhe só o estritamente necessário.", "Configurações de privacidade devem ser restritivas por defeito.", "Encripta dados pessoais em repouso e em trânsito.", "Realiza Avaliações de Impacto sobre a Proteção de Dados (DPIA) para processamentos de alto risco."] },
        { title: "Direitos dos Titulares", icon: UserCheck, explanation: "O RGPD garante vários direitos às pessoas cujos dados são processados: direito de acesso (saber que dados uma empresa tem sobre ti), retificação (corrigir dados errados), apagamento ('direito ao esquecimento'), portabilidade (levar os teus dados para outro serviço), oposição (dizer não ao processamento) e não ser sujeito a decisões automatizadas.", importance: "Estes direitos devem ser fáceis de exercer. Organizações que dificultam o exercício dos direitos arriscam multas e perda de confiança.", realExample: "Em 2024, um utilizador pediu a uma empresa o acesso a todos os dados que tinham sobre ele (direito de acesso). A empresa demorou 6 meses a responder (o prazo legal é 30 dias) e entregou dados incompletos. O resultado: queixa à CNPD e multa.", practicalTask: "Exercita o teu direito de acesso: escolhe um serviço online que uses e procura como pedir os teus dados pessoais. No Google: myaccount.google.com > Dados e privacidade > Descarregar os teus dados. Vais ficar surpreendido com a quantidade de informação.", bestPractices: ["Implementa processos claros para responder a pedidos de direitos em 30 dias.", "Verifica a identidade do requerente antes de partilhar dados.", "Documenta todas as respostas a pedidos de direitos.", "Treina funcionários sobre os direitos dos titulares de dados."] },
        { title: "Anonimização e Pseudonimização", icon: Database, explanation: "Anonimização remove permanentemente a ligação entre dados e a pessoa (irreversível). Pseudonimização substitui identificadores diretos por códigos, mantendo a possibilidade de re-identificação com uma 'chave' separada. A diferença é crucial: dados anonimizados já não são dados pessoais (fora do âmbito RGPD); dados pseudonimizados continuam a ser dados pessoais.", importance: "Estas técnicas permitem usar dados para análise, investigação e estatística reduzindo o risco de privacidade. São fundamentais para conciliar utilidade dos dados com proteção.", realExample: "Num hospital, os dados de pacientes são pseudonimizados para investigação: o nome 'João Silva' é substituído por 'P-4582'. Os investigadores trabalham com os dados pseudonimizados; só o hospital tem a chave para re-identificar. Se os dados fossem anonimizados, ninguém poderia voltar a ligar os dados ao paciente.", practicalTask: "Pensa em dados que partilhas regularmente: quando respondes a inquéritos online, as respostas são anónimas ou pseudonimizadas? Se te pedem email, já não é anónimo. Se te atribuem um código de participante, é pseudonimização. A diferença importa para a tua privacidade.", bestPractices: ["Prefere anonimização quando não precisas de re-identificar os dados.", "Se usas pseudonimização, protege a 'chave' de re-identificação rigorosamente.", "Testa técnicas de anonimização contra ataques de re-identificação.", "Documenta as técnicas usadas e justifica a escolha no registo de processamento."] },
      ]}
      tools={[
        { name: "OneTrust", url: "https://www.onetrust.com", desc: "Plataforma de gestão de privacidade e conformidade" },
        { name: "ARX", url: "https://arx.deidentifier.org", desc: "Ferramenta open-source de anonimização de dados" },
        { name: "Presidio", url: "https://microsoft.github.io/presidio", desc: "Deteção e anonimização de dados sensíveis (Microsoft)" },
      ]}
      websites={[
        { name: "CNPD", url: "https://www.cnpd.pt", desc: "Autoridade portuguesa de proteção de dados" },
        { name: "IAPP", url: "https://iapp.org", desc: "Associação internacional de profissionais de privacidade" },
        { name: "EDPB", url: "https://edpb.europa.eu", desc: "Comité Europeu de Proteção de Dados" },
        { name: "GDPR.eu", url: "https://gdpr.eu", desc: "Guia acessível do RGPD" },
        { name: "NOYB", url: "https://noyb.eu", desc: "Organização europeia de defesa de direitos digitais" },
      ]}
      newsLinks={[
        { title: "IAPP Privacy News", url: "https://iapp.org/news/", source: "IAPP" },
        { title: "NOYB — Casos de proteção de dados", url: "https://noyb.eu/en/news", source: "NOYB" },
        { title: "EDPB Guidelines", url: "https://edpb.europa.eu/our-work-tools/general-guidance/guidelines-recommendations-best-practices_en", source: "EDPB" },
        { title: "CNPD — Deliberações recentes", url: "https://www.cnpd.pt/decisoes/deliberacoes/", source: "CNPD" },
      ]}
      relatedAreas={[
        { title: "GRC", url: "/grc", desc: "Governança e conformidade" },
        { title: "AI Security", url: "/ai-security", desc: "Privacidade em sistemas de IA" },
        { title: "Cloud Security", url: "/cloud-security", desc: "Dados pessoais na cloud" },
      ]}
    />
  );
}
