import BlockPage from "@/components/BlockPage";
import { Package } from "lucide-react";

const sections = [
  {
    title: "O que é Supply Chain Security?",
    content: [
      "Supply Chain Security foca-se na proteção de toda a cadeia de fornecimento de software e hardware — desde dependências open-source até fornecedores terceiros.",
      "Ataques como SolarWinds (2020) e Log4Shell (2021) demonstraram o impacto devastador de comprometer um único elo da cadeia.",
      "O objetivo é garantir que cada componente utilizado numa organização é autêntico, seguro e livre de código malicioso."
    ]
  },
  {
    title: "Ameaças na Cadeia de Fornecimento",
    content: [
      "Dependency confusion — pacotes maliciosos com nomes semelhantes a internos publicados em registos públicos.",
      "Typosquatting — pacotes com nomes quase idênticos a bibliotecas populares (ex: 'lodahs' em vez de 'lodash').",
      "Comprometimento de repositórios upstream — injeção de código malicioso em bibliotecas legítimas.",
      "Backdoors em atualizações — atualizações legítimas modificadas para incluir malware (caso SolarWinds/Orion).",
      "Comprometimento de pipelines CI/CD — acesso não autorizado a sistemas de build e deploy.",
      "Hardware supply chain — chips ou dispositivos adulterados durante o fabrico ou transporte."
    ]
  },
  {
    title: "SBOM — Software Bill of Materials",
    content: [
      "Um SBOM é uma lista completa de todos os componentes, bibliotecas e dependências que compõem um software.",
      "Formatos standard: SPDX (Linux Foundation) e CycloneDX (OWASP).",
      "O SBOM permite identificar rapidamente se o teu software é afetado por uma nova vulnerabilidade (ex: Log4Shell).",
      "Governos como os EUA (Executive Order 14028) já exigem SBOMs para software vendido ao setor público.",
      "Ferramentas como Syft, Trivy e OWASP Dependency-Track geram e analisam SBOMs automaticamente."
    ]
  },
  {
    title: "Assinatura e Verificação de Artefactos",
    content: [
      "Sigstore — framework open-source para assinar, verificar e proteger artefactos de software (cosign, Rekor, Fulcio).",
      "GPG signing — assinatura de commits e tags no Git para garantir autenticidade.",
      "Checksums e hashes — verificar a integridade de ficheiros descarregados.",
      "Reprodutibilidade de builds — garantir que o mesmo código-fonte produz sempre o mesmo binário.",
      "Attestations — provas criptográficas de que um artefacto foi construído num ambiente específico (SLSA framework)."
    ]
  },
  {
    title: "Frameworks e Standards",
    content: [
      "SLSA (Supply-chain Levels for Software Artifacts) — framework do Google com 4 níveis de maturidade para proteger a cadeia de supply.",
      "NIST SP 800-161 — guia para gestão de risco na cadeia de fornecimento de cibersegurança.",
      "OpenSSF Scorecard — avaliação automática da segurança de projetos open-source.",
      "in-toto — framework para verificar a integridade de cada passo da cadeia de fornecimento de software.",
      "ISO 28000 — standard para gestão de segurança da cadeia de fornecimento."
    ]
  },
  {
    title: "Casos Reais de Ataques",
    content: [
      "SolarWinds (2020) — hackers comprometeram o sistema de build, afetando 18.000 organizações incluindo agências governamentais dos EUA.",
      "Log4Shell (2021) — vulnerabilidade crítica na biblioteca Log4j afetou milhões de aplicações Java em todo o mundo.",
      "Codecov (2021) — script de upload de cobertura comprometido, expondo credenciais de milhares de empresas.",
      "event-stream (2018) — maintainer malicioso adicionou código para roubar criptomoedas via dependência npm.",
      "3CX (2023) — ataque cascata onde um comprometimento de supply chain levou a outro comprometimento de supply chain.",
      "XZ Utils (2024) — backdoor sofisticado inserido por um contribuidor de confiança ao longo de 2 anos."
    ]
  },
  {
    title: "Boas Práticas",
    content: [
      "Auditar regularmente as dependências com ferramentas como npm audit, Snyk ou Dependabot.",
      "Implementar lock files e pinning de versões para evitar atualizações inesperadas.",
      "Usar registos privados (Artifactory, Nexus) para controlar pacotes permitidos.",
      "Ativar verificação de integridade (checksums) em todas as dependências.",
      "Monitorizar repositórios upstream para alterações suspeitas.",
      "Aplicar o princípio do menor privilégio em pipelines CI/CD.",
      "Manter um SBOM atualizado e integrado no processo de desenvolvimento.",
      "Avaliar fornecedores terceiros com questionários de segurança e auditorias regulares."
    ]
  },
  {
    title: "Micro-tarefas Práticas",
    content: [
      "Corre 'npm audit' ou 'pip audit' num projeto teu e analisa os resultados.",
      "Gera um SBOM de um projeto com Syft ou Trivy e explora o resultado.",
      "Verifica o OpenSSF Scorecard de uma biblioteca que usas frequentemente.",
      "Configura o Dependabot ou Renovate num repositório GitHub.",
      "Pesquisa no deps.dev a árvore de dependências de um pacote popular.",
      "Assina um commit com GPG e verifica a assinatura no GitHub."
    ]
  }
];

const newsLinks = [
  { title: "OpenSSF Blog", url: "https://openssf.org/blog/" },
  { title: "Sonatype Blog — Supply Chain", url: "https://blog.sonatype.com/" },
  { title: "Sigstore Blog", url: "https://blog.sigstore.dev/" },
  { title: "Snyk — Supply Chain Security", url: "https://snyk.io/blog/tag/supply-chain-security/" },
  { title: "SLSA Framework", url: "https://slsa.dev/" },
];

const resources = {
  tools: [
    { name: "Syft", url: "https://github.com/anchore/syft", desc: "Gerador de SBOM para imagens de containers e filesystems" },
    { name: "Trivy", url: "https://trivy.dev/", desc: "Scanner de vulnerabilidades, SBOM e misconfigurations" },
    { name: "OWASP Dependency-Track", url: "https://dependencytrack.org/", desc: "Plataforma de análise contínua de SBOM" },
    { name: "Sigstore / cosign", url: "https://sigstore.dev/", desc: "Assinatura e verificação de artefactos de software" },
    { name: "Socket.dev", url: "https://socket.dev/", desc: "Deteção de supply chain attacks em pacotes npm e PyPI" },
    { name: "deps.dev", url: "https://deps.dev/", desc: "Explorador de dependências e metadados de segurança (Google)" },
  ],
  sites: [
    { name: "OpenSSF", url: "https://openssf.org/", desc: "Fundação para segurança do open-source" },
    { name: "SLSA Framework", url: "https://slsa.dev/", desc: "Níveis de maturidade para supply chain security" },
    { name: "in-toto", url: "https://in-toto.io/", desc: "Framework para integridade da supply chain" },
    { name: "Sonatype State of Software Supply Chain", url: "https://www.sonatype.com/state-of-the-software-supply-chain", desc: "Relatório anual sobre ameaças na supply chain" },
  ],
  related: ["DevSecOps", "Security Tools", "Cloud Security", "AI Security"]
};

export default function SupplyChainSecurity() {
  return (
    <BlockPage
      title="Supply Chain Security"
      subtitle="Proteger a cadeia de fornecimento de software e hardware"
      icon={Package}
      sections={sections}
      newsLinks={newsLinks}
      resources={resources}
    />
  );
}
