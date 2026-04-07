import BlockPage from "@/components/BlockPage";
import { Code, GitBranch, FileSearch, Zap, Package, KeyRound, Wrench } from "lucide-react";

export default function DevSecOps() {
  return (
    <BlockPage
      title="DevSecOps"
      subtitle="Segurança integrada em todo o ciclo de desenvolvimento"
      icon={Code}
      description="DevSecOps é a filosofia de integrar segurança em TODAS as fases do ciclo de desenvolvimento e operação de software — desde o planeamento até à produção. Em vez de verificar segurança no final (quando corrigir é caro e lento), DevSecOps incorpora testes, análises e práticas seguras desde o primeiro dia. É a evolução de 'segurança no fim' para 'segurança desde o início'."
      audience="Programadores, equipas DevOps, gestores de projetos de software, e qualquer pessoa envolvida no desenvolvimento ou operação de aplicações."
      connections="Integra conceitos de Web & API Security, Vulnerability Management, Cloud Security e Security Tools. É a ponte entre desenvolvimento de software e segurança operacional."
      subtopics={[
        {
          title: "CI/CD Security",
          icon: GitBranch,
          explanation: "CI/CD (Continuous Integration / Continuous Delivery) é o processo automatizado de integrar código, testá-lo e entregá-lo. Um pipeline CI/CD é como uma linha de montagem: o código entra, passa por testes automáticos e sai pronto para produção. Mas esta linha de montagem precisa de controlos de segurança: quem pode modificar o pipeline? Os segredos (passwords, chaves API) estão protegidos? As dependências são verificadas?",
          importance: "Se um atacante comprometer o pipeline CI/CD, pode injetar código malicioso em todas as entregas de software. O ataque à SolarWinds (2020) demonstrou exatamente este cenário.",
          realExample: "No ataque à SolarWinds, os atacantes comprometeram o pipeline de build da empresa e inseriram uma backdoor numa atualização legítima do software Orion, que foi depois distribuída a 18.000 clientes, incluindo agências governamentais dos EUA.",
          practicalTask: "Se usas GitHub, GitLab ou similar: verifica as definições de segurança do teu repositório. As branches principais estão protegidas? É obrigatório revisão de código (pull request) antes de merge? Estas são medidas básicas de segurança CI/CD.",
          bestPractices: [
            "Protege branches principais com regras de revisão obrigatória.",
            "Nunca guarda segredos em ficheiros de configuração do repositório.",
            "Usa variáveis de ambiente seguras ou cofres de segredos para credenciais.",
            "Implementa verificações automáticas em cada commit (linting, testes, scanners).",
          ],
        },
        {
          title: "SAST (Static Application Security Testing)",
          icon: FileSearch,
          explanation: "SAST analisa o código-fonte (sem o executar) à procura de vulnerabilidades: inputs não validados, injeções SQL potenciais, uso inseguro de criptografia, etc. É como uma revisão de texto que encontra erros gramaticais — mas em vez de gramática, procura falhas de segurança. Ferramentas como SonarQube, Semgrep e Bandit automatizam esta análise.",
          importance: "Encontrar vulnerabilidades no código antes de o executar é muito mais barato e rápido do que descobri-las em produção. O SAST permite detetar problemas cedo, quando são fáceis de corrigir.",
          realExample: "Num projeto real, uma ferramenta SAST detetou que um formulário de login não validava o input do campo de email, permitindo potencialmente SQL Injection. O erro foi corrigido em minutos no código-fonte — se tivesse chegado a produção, poderia ter custado milhares de euros.",
          practicalTask: "Imagina este código simplificado: query = 'SELECT * FROM users WHERE name = ' + user_input. Vês o problema? O input do utilizador vai diretamente para a query SQL sem validação. Uma ferramenta SAST assinalaria isto como 'SQL Injection — severidade crítica' e recomendaria usar queries parametrizadas.",
          bestPractices: [
            "Integra SAST no pipeline CI/CD para análise automática a cada commit.",
            "Prioriza os resultados por severidade — nem tudo é crítico.",
            "Combina SAST com revisão manual de código para melhores resultados.",
            "Aceita que SAST tem falsos positivos — é normal, mas melhor prevenir que remediar.",
          ],
        },
        {
          title: "DAST (Dynamic Application Security Testing)",
          icon: Zap,
          explanation: "DAST testa a aplicação enquanto está a correr, simulando ataques reais do exterior — como se fosse um 'utilizador malicioso controlado'. Ao contrário do SAST (que lê o código), o DAST não sabe como a aplicação funciona por dentro; testa como um atacante faria: envia inputs maliciosos, verifica respostas e procura comportamentos inseguros. Ferramentas como OWASP ZAP e Burp Suite fazem DAST.",
          importance: "Há vulnerabilidades que só se manifestam quando a aplicação está a correr (problemas de configuração, erros em runtime, falhas de autenticação). O DAST encontra o que o SAST não consegue.",
          realExample: "Num teste DAST a uma aplicação web, o scanner descobriu que uma página de administração estava acessível sem autenticação (por erro de configuração do servidor). O código em si não tinha bugs, mas a configuração de deploy estava errada — algo que só o DAST podia encontrar.",
          practicalTask: "Sem usar ferramentas, podes fazer um 'DAST mental': quando usas um site, pergunta-te: o que aconteceria se eu mudasse o ID na URL? (ex.: /perfil/123 para /perfil/124). Se vires dados de outro utilizador, isso é uma vulnerabilidade chamada IDOR (Insecure Direct Object Reference) que um scanner DAST detetaria.",
          bestPractices: [
            "Corre DAST em ambientes de teste/staging, nunca diretamente em produção.",
            "Complementa DAST com SAST para cobertura completa.",
            "Automatiza scans DAST regulares como parte do pipeline CI/CD.",
          ],
        },
        {
          title: "SCA (Software Composition Analysis)",
          icon: Package,
          explanation: "A maior parte do software moderno é construída com bibliotecas e dependências de terceiros — código escrito por outros. SCA analisa essas dependências e verifica se alguma tem vulnerabilidades conhecidas (CVE). É como verificar os ingredientes de um produto alimentar para ver se algum foi alvo de recall. Ferramentas como Dependabot, Snyk e OWASP Dependency-Check fazem SCA.",
          importance: "Estima-se que 80-90% do código numa aplicação moderna vem de bibliotecas de terceiros. Se uma dessas bibliotecas tem uma falha, a tua aplicação também tem — mesmo que o teu código seja perfeito.",
          realExample: "A vulnerabilidade Log4Shell (2021) afetou uma biblioteca Java (Log4j) usada em milhões de aplicações. Muitas empresas nem sabiam que usavam Log4j — estava enterrada como dependência de outras dependências. O SCA teria identificado esta dependência e alertado sobre a vulnerabilidade.",
          practicalTask: "Se tens projetos de programação, verifica se o teu gestor de pacotes (npm, pip, maven) tem alertas de segurança. No GitHub, o Dependabot faz isto automaticamente. Procura o separador 'Security' no teu repositório e vê se há alertas pendentes.",
          bestPractices: [
            "Ativa alertas de segurança automáticos para dependências (Dependabot, Snyk).",
            "Atualiza dependências regularmente — não deixes versões antigas acumular.",
            "Antes de adicionar uma nova dependência, verifica a sua saúde (atualizações recentes, CVEs conhecidas).",
          ],
        },
        {
          title: "Secrets Management",
          icon: KeyRound,
          explanation: "Secrets (segredos) são passwords, tokens, chaves API, certificados — qualquer credencial que dá acesso a sistemas ou dados. Gestão de segredos trata de garantir que estes nunca ficam expostos: não em código-fonte, não em ficheiros de configuração públicos, não em logs, não em mensagens de chat. Ferramentas como HashiCorp Vault, AWS Secrets Manager e Azure Key Vault guardam segredos de forma segura.",
          importance: "Segredos expostos são uma das causas mais comuns de fugas de dados. Basta um token de API num repositório público e em minutos bots automatizados encontram-no e exploram-no.",
          realExample: "Em 2022, investigadores descobriram que mais de 100.000 repositórios no GitHub continham chaves API da AWS expostas. Muitas foram usadas em minutos para criar servidores de mineração de criptomoedas, resultando em faturas de milhares de euros para os donos das contas.",
          practicalTask: "Pensa nos teus próprios 'segredos' digitais: guardas passwords em ficheiros de texto? Partilhas credenciais por email ou chat? Usa um gestor de passwords (como Bitwarden, 1Password ou KeePass) e nunca mais guarda passwords em texto simples.",
          bestPractices: [
            "Nunca guarda segredos em código-fonte ou repositórios Git.",
            "Usa cofres de segredos (Vault, Secrets Manager) em ambientes de produção.",
            "Roda (altera) segredos regularmente e revoga os que já não são necessários.",
            "Usa scanners de segredos (git-secrets, Gitleaks, TruffleHog) no pipeline CI/CD.",
          ],
        },
        {
          title: "Toolbox DevSecOps",
          icon: Wrench,
          explanation: "O ecossistema DevSecOps inclui várias categorias de ferramentas que se integram no pipeline de desenvolvimento: SAST (SonarQube, Semgrep, Bandit) para análise estática de código; DAST (OWASP ZAP, Burp Suite) para testes dinâmicos; SCA (Dependabot, Snyk, OWASP Dependency-Check) para análise de dependências; e Secrets Scanning (git-secrets, TruffleHog, Gitleaks) para detetar credenciais expostas. Cada ferramenta entra numa fase diferente do pipeline.",
          importance: "Nenhuma ferramenta sozinha cobre todos os riscos. A combinação de SAST + DAST + SCA + Secrets Scanning cria múltiplas camadas de defesa ao longo do ciclo de desenvolvimento.",
          realExample: "Uma empresa implementou a seguinte pipeline: a cada commit, Semgrep (SAST) verifica o código, Snyk (SCA) verifica dependências e Gitleaks verifica segredos expostos. Semanalmente, o OWASP ZAP (DAST) faz um scan ao ambiente de staging. Em 6 meses, o número de vulnerabilidades em produção reduziu 70%.",
          practicalTask: "Explora o OWASP ZAP (zaproxy.org) — é gratuito e open-source. Não precisas de instalar já; visita o site e lê a documentação de introdução para perceber o que a ferramenta faz e como se integra num pipeline DevSecOps.",
          bestPractices: [
            "Implementa ferramentas gradualmente — começa com SAST e SCA, depois adiciona DAST.",
            "Automatiza o máximo possível — scans manuais são esquecidos.",
            "Define políticas claras: que severidade bloqueia o deploy?",
            "Forma a equipa de desenvolvimento em segurança básica — as ferramentas ajudam, mas a consciência é fundamental.",
          ],
        },
      ]}
      tools={[
        { name: "SonarQube", url: "https://www.sonarqube.org", desc: "Análise estática de código (SAST) com versão gratuita" },
        { name: "Semgrep", url: "https://semgrep.dev", desc: "SAST rápido e open-source para múltiplas linguagens" },
        { name: "Snyk", url: "https://snyk.io", desc: "SCA e segurança de dependências" },
        { name: "Gitleaks", url: "https://gitleaks.io", desc: "Deteção de segredos em repositórios Git" },
        { name: "HashiCorp Vault", url: "https://www.vaultproject.io", desc: "Gestão centralizada de segredos" },
        { name: "OWASP ZAP", url: "https://www.zaproxy.org", desc: "Scanner DAST open-source" },
      ]}
      websites={[
        { name: "OWASP DevSecOps Guideline", url: "https://owasp.org/www-project-devsecops-guideline", desc: "Guia oficial OWASP para DevSecOps" },
        { name: "DevSecOps.org", url: "https://www.devsecops.org", desc: "Manifesto e recursos DevSecOps" },
        { name: "GitHub Security Lab", url: "https://securitylab.github.com", desc: "Investigação e ferramentas de segurança" },
        { name: "NIST SSDF", url: "https://csrc.nist.gov/Projects/ssdf", desc: "Framework de desenvolvimento seguro" },
      ]}
      relatedAreas={[
        { title: "Web & API Security", url: "/web-api-security", desc: "Segurança em aplicações web" },
        { title: "Cloud Security", url: "/cloud-security", desc: "Segurança em ambientes cloud" },
        { title: "Vulnerability Management", url: "/vulnerability-management", desc: "Gestão contínua de vulnerabilidades" },
      ]}
    />
  );
}
