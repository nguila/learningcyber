import BlockPage from "@/components/BlockPage";
import { ShieldCheck, Network, KeyRound, ScanEye, Layers, UserCheck } from "lucide-react";

export default function ZeroTrustArchitecture() {
  return (
    <BlockPage
      title="Zero Trust Architecture"
      subtitle="Nunca confiar, sempre verificar — o modelo de segurança moderno"
      icon={ShieldCheck}
      description="Zero Trust é um modelo de segurança que elimina a confiança implícita. Em vez de confiar em utilizadores ou dispositivos com base na localização (ex: estar dentro da rede corporativa), cada pedido é verificado continuamente. O lema é 'never trust, always verify'. Este modelo ganhou relevância com o trabalho remoto, cloud computing e a dissolução do perímetro de rede tradicional."
      audience="Security architects, administradores de rede, CISOs e equipas de IT que precisam modernizar a postura de segurança da organização."
      connections="Ligado a Cloud Security (acesso a recursos cloud), GRC (conformidade e políticas), Privacy Engineering (proteção de dados) e SOC (monitorização contínua de acessos)."
      subtopics={[
        {
          title: "Princípios Fundamentais",
          icon: ShieldCheck,
          explanation: "Zero Trust baseia-se em três princípios: verificar explicitamente (autenticar e autorizar cada pedido com base em todos os dados disponíveis), usar acesso com menor privilégio (dar apenas as permissões mínimas necessárias) e assumir violação (operar como se a rede já estivesse comprometida). Isto contrasta com o modelo tradicional de 'castelo e fosso' onde tudo dentro da rede era considerado seguro.",
          importance: "O perímetro de rede tradicional deixou de existir. Com cloud, SaaS, BYOD e trabalho remoto, os atacantes que ultrapassam o perímetro têm acesso lateral livre. Zero Trust elimina este risco.",
          realExample: "O ataque SolarWinds (2020) mostrou que os atacantes, uma vez dentro da rede, moveram-se lateralmente sem resistência. Organizações com Zero Trust implementado limitaram significativamente o impacto.",
          practicalTask: "Mapeia os fluxos de acesso da tua organização: quem acede a quê, de onde e com que nível de verificação. Identifica onde existe confiança implícita.",
          bestPractices: [
            "Implementar autenticação multifator (MFA) em todos os acessos.",
            "Aplicar o princípio do menor privilégio em todas as contas e serviços.",
            "Segmentar a rede para limitar o movimento lateral.",
            "Monitorizar e registar todas as tentativas de acesso continuamente.",
          ],
        },
        {
          title: "Microsegmentação",
          icon: Network,
          explanation: "A microsegmentação divide a rede em zonas isoladas, cada uma com as suas próprias políticas de acesso. Em vez de uma rede plana onde qualquer dispositivo pode comunicar com qualquer outro, cada segmento é protegido individualmente. Isto limita drasticamente o movimento lateral de atacantes. Tecnologias como SDN (Software-Defined Networking), firewalls de nova geração e service mesh (ex: Istio) permitem implementar microsegmentação a diferentes níveis.",
          importance: "Sem segmentação, um atacante que compromete um único endpoint pode aceder a toda a rede. A microsegmentação transforma cada segmento numa fortaleza independente.",
          realExample: "O ransomware NotPetya (2017) propagou-se lateralmente destruindo redes inteiras. Organizações com microsegmentação contiveram o impacto a segmentos isolados.",
          practicalTask: "Cria um diagrama da tua rede e identifica quais sistemas precisam realmente de comunicar entre si. Define regras de segmentação baseadas nessa análise.",
          bestPractices: [
            "Começar pela segmentação de ativos críticos (bases de dados, sistemas de pagamento).",
            "Usar políticas de deny-by-default entre segmentos.",
            "Implementar monitorização de tráfego entre segmentos para detetar anomalias.",
            "Testar regularmente que as regras de segmentação estão a funcionar corretamente.",
          ],
        },
        {
          title: "Gestão de Identidade e Acesso (IAM)",
          icon: KeyRound,
          explanation: "Em Zero Trust, a identidade é o novo perímetro. IAM engloba autenticação forte (provar quem és), autorização granular (definir o que podes fazer) e gestão do ciclo de vida de identidades. Inclui SSO (Single Sign-On), MFA, gestão de credenciais privilegiadas (PAM) e identidades federadas. Soluções como Azure AD, Okta e Google Workspace Identity fornecem estas capacidades.",
          importance: "80% dos breaches envolvem credenciais comprometidas. Uma gestão de identidade robusta é a primeira linha de defesa em qualquer arquitetura Zero Trust.",
          realExample: "O breach da Uber (2022) começou com credenciais MFA comprometidas via engenharia social. O atacante usou uma conta com privilégios excessivos para aceder a sistemas internos críticos.",
          practicalTask: "Audita as contas da tua organização: quantas têm MFA ativo? Quantas têm privilégios de administrador? Existe revisão periódica de acessos?",
          bestPractices: [
            "Implementar MFA resistente a phishing (FIDO2, passkeys).",
            "Fazer revisões trimestrais de acessos e privilégios.",
            "Usar PAM (Privileged Access Management) para contas de administrador.",
            "Implementar just-in-time access para permissões elevadas.",
          ],
        },
        {
          title: "Acesso Condicional e Contexto",
          icon: ScanEye,
          explanation: "O acesso condicional avalia múltiplos sinais antes de permitir ou bloquear um pedido: localização geográfica, estado do dispositivo (patches, antivírus), hora do dia, comportamento do utilizador e nível de risco da sessão. Ferramentas como Azure Conditional Access, Google BeyondCorp e Zscaler Private Access implementam estas políticas de forma dinâmica e contínua.",
          importance: "Um login legítimo de Lisboa às 9h num dispositivo gerido é diferente de um login às 3h de um país onde a empresa não opera, num dispositivo desconhecido. O contexto é essencial.",
          realExample: "A Google implementou BeyondCorp internamente, eliminando a VPN e avaliando cada pedido com base no dispositivo, utilizador e contexto. Mais de 100.000 funcionários acedem a recursos sem VPN.",
          practicalTask: "Define 5 políticas de acesso condicional para a tua organização: por exemplo, bloquear logins de países não autorizados ou exigir dispositivo gerido para aceder a dados sensíveis.",
          bestPractices: [
            "Definir políticas baseadas em risco (risk-based authentication).",
            "Combinar múltiplos sinais (dispositivo + localização + comportamento).",
            "Implementar step-up authentication para operações sensíveis.",
            "Testar políticas em modo de auditoria antes de enforcement.",
          ],
        },
        {
          title: "Zero Trust Network Access (ZTNA)",
          icon: Layers,
          explanation: "ZTNA substitui VPNs tradicionais por acesso granular a aplicações específicas. Em vez de dar acesso a toda a rede via VPN, o ZTNA permite acesso apenas à aplicação necessária, verificando a identidade e o contexto em cada pedido. Soluções como Cloudflare Access, Zscaler Private Access e Palo Alto Prisma Access implementam ZTNA na cloud, eliminando a necessidade de hardware VPN.",
          importance: "VPNs dão acesso excessivo à rede e são alvos frequentes de exploração (ex: vulnerabilidades em Pulse Secure, Fortinet). ZTNA reduz a superfície de ataque drasticamente.",
          realExample: "A Cloudflare reportou que organizações que migraram de VPN para ZTNA reduziram incidentes de segurança relacionados com acesso remoto em 70%.",
          practicalTask: "Lista todas as aplicações a que os teus colaboradores acedem remotamente via VPN. Avalia quais poderiam migrar para um modelo ZTNA.",
          bestPractices: [
            "Migrar progressivamente de VPN para ZTNA, começando por aplicações web.",
            "Implementar verificação contínua do dispositivo (postura do endpoint).",
            "Definir políticas de acesso por aplicação, não por rede.",
            "Monitorizar sessões ativas e revogar acessos suspeitos automaticamente.",
          ],
        },
        {
          title: "Implementação e Maturidade",
          icon: UserCheck,
          explanation: "Implementar Zero Trust é uma jornada, não um projeto. O NIST SP 800-207 define a arquitetura de referência. A CISA publicou o Zero Trust Maturity Model com 5 pilares: Identity, Devices, Networks, Applications e Data. Cada pilar evolui de 'Traditional' a 'Optimal'. A implementação deve ser faseada, começando pelos ativos mais críticos e expandindo progressivamente.",
          importance: "Zero Trust não se compra — é uma estratégia que envolve pessoas, processos e tecnologia. Muitas organizações falham por tentarem implementar tudo de uma vez.",
          realExample: "O governo federal dos EUA emitiu a Executive Order 14028 (2021) exigindo que todas as agências implementem Zero Trust até 2024, seguindo o modelo de maturidade da CISA.",
          practicalTask: "Avalia a maturidade Zero Trust da tua organização usando o modelo CISA. Em que pilar estás mais avançado? Qual precisa de mais trabalho?",
          bestPractices: [
            "Seguir o NIST SP 800-207 como framework de referência.",
            "Começar pelos quick wins: MFA, segmentação de ativos críticos.",
            "Obter apoio executivo e definir métricas de progresso claras.",
            "Formar as equipas nos princípios Zero Trust antes de implementar tecnologia.",
          ],
        },
      ]}
      tools={[
        { name: "Azure AD Conditional Access", url: "https://learn.microsoft.com/en-us/azure/active-directory/conditional-access/" },
        { name: "Cloudflare Access (ZTNA)", url: "https://www.cloudflare.com/products/zero-trust/access/" },
        { name: "Google BeyondCorp", url: "https://cloud.google.com/beyondcorp" },
        { name: "Zscaler Private Access", url: "https://www.zscaler.com/products/zscaler-private-access" },
        { name: "CISA Zero Trust Maturity Model", url: "https://www.cisa.gov/zero-trust-maturity-model" },
        { name: "NIST SP 800-207", url: "https://csrc.nist.gov/publications/detail/sp/800-207/final" },
      ]}
      newsLinks={[
        { title: "NIST — Zero Trust Architecture (SP 800-207)", url: "https://csrc.nist.gov/publications/detail/sp/800-207/final" },
        { title: "CISA — Zero Trust Maturity Model", url: "https://www.cisa.gov/zero-trust-maturity-model" },
        { title: "Google BeyondCorp Papers", url: "https://cloud.google.com/beyondcorp" },
        { title: "The Hacker News — Zero Trust", url: "https://thehackernews.com/search/label/Zero%20Trust" },
      ]}
    />
  );
}
