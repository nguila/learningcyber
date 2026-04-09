import BlockPage from "@/components/BlockPage";
import { Package, Link2, ShieldAlert, FileCheck, ScrollText, AlertTriangle } from "lucide-react";

export default function SupplyChainSecurity() {
  return (
    <BlockPage
      title="Supply Chain Security"
      subtitle="Proteger a cadeia de fornecimento de software e hardware"
      icon={Package}
      description="Supply Chain Security foca-se na proteção de toda a cadeia de fornecimento de software e hardware — desde dependências open-source até fornecedores terceiros. Ataques como SolarWinds (2020) e Log4Shell (2021) demonstraram o impacto devastador de comprometer um único elo da cadeia. O objetivo é garantir que cada componente utilizado numa organização é autêntico, seguro e livre de código malicioso."
      audience="Developers, DevOps engineers, security architects e gestores de risco que trabalham com software que depende de componentes externos — ou seja, praticamente todos."
      connections="Fortemente ligado a DevSecOps (segurança em pipelines CI/CD), Security Tools (análise de dependências), Cloud Security (imagens de containers) e AI Security (modelos e datasets de terceiros)."
      subtopics={[
        {
          title: "Ameaças na Cadeia de Fornecimento",
          icon: ShieldAlert,
          explanation: "A cadeia de fornecimento de software inclui tudo o que é usado para construir uma aplicação: bibliotecas, frameworks, ferramentas de build, imagens de containers e até IDEs. Atacantes podem comprometer qualquer um destes elos. Dependency confusion acontece quando pacotes maliciosos com nomes semelhantes a internos são publicados em registos públicos. Typosquatting usa nomes quase idênticos a bibliotecas populares (ex: 'lodahs' em vez de 'lodash'). Backdoors podem ser inseridos em atualizações legítimas.",
          importance: "Um único pacote comprometido pode afetar milhares de organizações simultaneamente. O caso SolarWinds afetou 18.000 organizações, incluindo agências governamentais dos EUA.",
          realExample: "Em 2024, um backdoor sofisticado foi descoberto na biblioteca XZ Utils — inserido pacientemente por um contribuidor ao longo de 2 anos, quase comprometendo milhões de servidores Linux.",
          practicalTask: "Corre 'npm audit' ou 'pip audit' num projeto teu e analisa os resultados. Quantas vulnerabilidades encontras? Quantas são críticas?",
          bestPractices: [
            "Auditar regularmente as dependências com ferramentas como npm audit, Snyk ou Dependabot.",
            "Implementar lock files e pinning de versões para evitar atualizações inesperadas.",
            "Usar registos privados (Artifactory, Nexus) para controlar pacotes permitidos.",
            "Monitorizar repositórios upstream para alterações suspeitas.",
          ],
        },
        {
          title: "SBOM — Software Bill of Materials",
          icon: FileCheck,
          explanation: "Um SBOM é uma lista completa de todos os componentes, bibliotecas e dependências que compõem um software — como uma lista de ingredientes de um produto alimentar. Existem dois formatos standard: SPDX (Linux Foundation) e CycloneDX (OWASP). O SBOM permite identificar rapidamente se o teu software é afetado por uma nova vulnerabilidade.",
          importance: "Quando surge uma vulnerabilidade como Log4Shell, ter um SBOM significa saber em minutos se és afetado, em vez de dias ou semanas. Governos como os EUA já exigem SBOMs para software vendido ao setor público.",
          realExample: "Quando a vulnerabilidade Log4Shell foi descoberta em dezembro de 2021, organizações com SBOMs conseguiram identificar aplicações afetadas em horas. As restantes demoraram semanas a verificar manualmente.",
          practicalTask: "Gera um SBOM de um projeto teu com Syft ('syft dir:.') ou Trivy ('trivy fs --format cyclonedx .') e explora o resultado — quantas dependências tem o teu projeto?",
          bestPractices: [
            "Manter um SBOM atualizado e integrado no processo de CI/CD.",
            "Usar ferramentas automáticas como Syft, Trivy ou OWASP Dependency-Track.",
            "Monitorizar continuamente o SBOM contra bases de dados de vulnerabilidades.",
            "Exigir SBOMs de fornecedores de software terceiros.",
          ],
        },
        {
          title: "Assinatura e Verificação de Artefactos",
          icon: Link2,
          explanation: "A assinatura de artefactos garante que o software que recebes é exatamente o que foi publicado pelo autor original. Sigstore é uma framework open-source para assinar e verificar artefactos (usa cosign, Rekor e Fulcio). GPG signing assina commits no Git. Checksums verificam a integridade de ficheiros descarregados. Reprodutibilidade de builds garante que o mesmo código produz sempre o mesmo binário.",
          importance: "Sem verificação, podes estar a executar software modificado por um atacante. A assinatura cria uma cadeia de confiança verificável desde o developer até ao utilizador final.",
          realExample: "O ataque ao Codecov (2021) modificou o script de upload de cobertura de código. Organizações que verificavam a assinatura do script teriam detetado a alteração antes de o executar.",
          practicalTask: "Assina um commit com GPG no Git: 'git commit -S -m \"commit assinado\"' e verifica a assinatura no GitHub. Ou descarrega um ficheiro e verifica o seu checksum SHA256.",
          bestPractices: [
            "Assinar todos os artefactos de release com Sigstore ou GPG.",
            "Verificar checksums de todas as dependências descarregadas.",
            "Implementar builds reprodutíveis quando possível.",
            "Usar attestations SLSA para provar a proveniência dos artefactos.",
          ],
        },
        {
          title: "Frameworks e Standards",
          icon: ScrollText,
          explanation: "SLSA (Supply-chain Levels for Software Artifacts) é um framework do Google com 4 níveis de maturidade — desde nenhuma proteção (L0) até proteção completa (L4). OpenSSF Scorecard avalia automaticamente a segurança de projetos open-source. in-toto verifica a integridade de cada passo do pipeline. NIST SP 800-161 fornece orientações para gestão de risco na cadeia de fornecimento.",
          importance: "Estes frameworks transformam conceitos abstratos de segurança em passos concretos e mensuráveis. Permitem avaliar e melhorar a maturidade da tua organização de forma estruturada.",
          realExample: "A Linux Foundation usa o OpenSSF Scorecard para avaliar milhares de projetos open-source críticos, identificando os que precisam de mais investimento em segurança.",
          practicalTask: "Pesquisa o OpenSSF Scorecard de uma biblioteca que usas frequentemente em securityscorecards.dev — que pontuação tem? Onde pode melhorar?",
          bestPractices: [
            "Começar pelo SLSA Level 1 e progredir gradualmente.",
            "Usar o OpenSSF Scorecard para avaliar dependências antes de as adotar.",
            "Implementar in-toto para verificar a integridade do pipeline de build.",
            "Seguir as recomendações do NIST SP 800-161 para gestão de fornecedores.",
          ],
        },
        {
          title: "Casos Reais e Lições Aprendidas",
          icon: AlertTriangle,
          explanation: "Estudar ataques reais é a melhor forma de perceber os riscos. SolarWinds (2020): hackers comprometeram o sistema de build, inserindo malware em atualizações legítimas que afetaram 18.000 organizações. Log4Shell (2021): vulnerabilidade crítica numa biblioteca Java omnipresente. event-stream (2018): maintainer malicioso adicionou código para roubar criptomoedas via npm. 3CX (2023): um ataque cascata onde um comprometimento levou a outro.",
          importance: "Cada incidente revelou fraquezas sistémicas na forma como a indústria gere dependências e confiança. As lições destes casos moldaram os standards e ferramentas atuais.",
          realExample: "O ataque ao 3CX (2023) foi único: um supply chain attack causou outro supply chain attack. A empresa foi comprometida porque usava software de trading já comprometido por outro grupo de atacantes.",
          practicalTask: "Lê o post-mortem do XZ Utils backdoor (2024) e identifica os sinais de alerta que foram ignorados. Como se podia ter prevenido?",
          bestPractices: [
            "Documentar e partilhar lições aprendidas de cada incidente.",
            "Não confiar cegamente em maintainers — verificar sempre os artefactos.",
            "Ter um plano de resposta específico para comprometimento de supply chain.",
            "Participar em comunidades como OpenSSF para partilhar inteligência.",
          ],
        },
        {
          title: "Proteção de Pipelines CI/CD",
          icon: Package,
          explanation: "Os pipelines CI/CD (Continuous Integration / Continuous Deployment) são alvos valiosos porque têm acesso a credenciais, código-fonte e sistemas de produção. Atacantes podem comprometer runners, modificar scripts de build, roubar secrets ou injetar código malicioso durante o processo de deploy. Proteger o pipeline significa aplicar princípio do menor privilégio, isolar ambientes e verificar cada passo.",
          importance: "Um pipeline comprometido pode injetar malware em cada release da tua aplicação, afetando todos os utilizadores. É o equivalente a envenenar a fonte de água de uma cidade.",
          realExample: "O ataque ao Codecov (2021) comprometeu o script de upload de cobertura, que era executado em pipelines CI de milhares de empresas, expondo variáveis de ambiente e credenciais.",
          practicalTask: "Revê o teu ficheiro de CI/CD (GitHub Actions, GitLab CI, etc.) e verifica: as actions/imagens usadas estão pinadas a um hash? Os secrets têm o menor privilégio possível?",
          bestPractices: [
            "Pinar actions e imagens de containers a hashes específicos, não tags.",
            "Usar OIDC em vez de secrets estáticos sempre que possível.",
            "Isolar jobs de build em ambientes efémeros.",
            "Auditar regularmente as permissões dos service accounts do pipeline.",
            "Ativar logs detalhados e alertas para alterações nos ficheiros de CI/CD.",
          ],
        },
      ]}
      ethicsNote="A transparência na cadeia de fornecimento beneficia toda a comunidade. Reportar vulnerabilidades em dependências ajuda milhões de developers. A segurança do open-source é uma responsabilidade partilhada."
      tools={[
        { name: "Syft", url: "https://github.com/anchore/syft", desc: "Gerador de SBOM para imagens de containers e filesystems" },
        { name: "Trivy", url: "https://trivy.dev/", desc: "Scanner de vulnerabilidades, SBOM e misconfigurations" },
        { name: "OWASP Dependency-Track", url: "https://dependencytrack.org/", desc: "Plataforma de análise contínua de SBOM" },
        { name: "Sigstore / cosign", url: "https://sigstore.dev/", desc: "Assinatura e verificação de artefactos de software" },
        { name: "Socket.dev", url: "https://socket.dev/", desc: "Deteção de supply chain attacks em pacotes npm e PyPI" },
        { name: "deps.dev", url: "https://deps.dev/", desc: "Explorador de dependências e metadados de segurança (Google)" },
      ]}
      websites={[
        { name: "OpenSSF", url: "https://openssf.org/", desc: "Fundação para segurança do open-source" },
        { name: "SLSA Framework", url: "https://slsa.dev/", desc: "Níveis de maturidade para supply chain security" },
        { name: "in-toto", url: "https://in-toto.io/", desc: "Framework para integridade da supply chain" },
        { name: "Sonatype Report", url: "https://www.sonatype.com/state-of-the-software-supply-chain", desc: "Relatório anual sobre ameaças na supply chain" },
      ]}
      relatedAreas={[
        { title: "DevSecOps", url: "/devsecops", desc: "Segurança integrada no desenvolvimento" },
        { title: "Security Tools", url: "/security-tools", desc: "Ferramentas essenciais da área" },
        { title: "Cloud Security", url: "/cloud-security", desc: "Segurança em AWS, Azure e GCP" },
        { title: "AI Security", url: "/ai-security", desc: "Proteger sistemas com IA/LLM" },
      ]}
      newsLinks={[
        { title: "OpenSSF Blog", url: "https://openssf.org/blog/", source: "OpenSSF" },
        { title: "Sonatype Blog — Supply Chain", url: "https://blog.sonatype.com/", source: "Sonatype" },
        { title: "Sigstore Blog", url: "https://blog.sigstore.dev/", source: "Sigstore" },
        { title: "Snyk — Supply Chain Security", url: "https://snyk.io/blog/tag/supply-chain-security/", source: "Snyk" },
        { title: "SLSA Framework", url: "https://slsa.dev/", source: "Google/OpenSSF" },
      ]}
    />
  );
}
