import BlockPage from "@/components/BlockPage";
import { Cloud, Users, Settings, BarChart3, Container, Shield } from "lucide-react";

export default function CloudSecurity() {
  return (
    <BlockPage
      title="Cloud Security"
      subtitle="Proteger dados e sistemas na nuvem"
      icon={Cloud}
      description="Cloud security trata da proteção de dados, aplicações e infraestruturas alojados em plataformas cloud como AWS, Azure ou Google Cloud. Com cada vez mais empresas e pessoas a usar a cloud, entender as responsabilidades de segurança e os riscos associados é fundamental."
      audience="Profissionais de TI a migrar para a cloud, programadores, pequenos empresários que usam serviços cloud, e qualquer pessoa que guarde dados em Google Drive, OneDrive, iCloud ou similar."
      connections="Liga-se a Foundations (redes, sistemas), DevSecOps (segurança em pipelines cloud), GRC (conformidade), SOC (monitorização de ambientes cloud) e IAM (gestão de identidades)."
      subtopics={[
        {
          title: "AWS / Azure / GCP — Modelo de Responsabilidade Partilhada",
          icon: Shield,
          explanation: "Quando usas um serviço cloud, a segurança é uma responsabilidade partilhada entre ti e o fornecedor. O fornecedor (AWS, Azure, GCP) é responsável pela segurança DA cloud (infraestrutura física, rede, virtualização). Tu és responsável pela segurança NA cloud (os teus dados, configurações, acessos, aplicações). É como alugar um escritório: o senhorio mantém o edifício seguro, mas és tu que decides quem tem chave do teu gabinete.",
          importance: "Muitos incidentes de segurança na cloud acontecem porque os utilizadores assumem que 'a cloud é segura por defeito'. Na verdade, uma configuração errada pode expor dados ao mundo inteiro.",
          realExample: "Em 2019, a Capital One sofreu uma fuga de dados de 106 milhões de clientes porque um bucket S3 (armazenamento AWS) estava mal configurado — permitia acesso público. A AWS estava segura; a configuração do cliente é que estava errada.",
          practicalTask: "Se usas Google Drive, OneDrive ou iCloud: abre as definições de partilha de uma pasta e verifica quem tem acesso. Há ficheiros partilhados com 'qualquer pessoa com o link'? Se sim, é o equivalente a um bucket S3 público. Restringe o acesso apenas a quem realmente precisa.",
          bestPractices: [
            "Compreende o modelo de responsabilidade partilhada do teu fornecedor cloud.",
            "Revê regularmente as configurações de acesso público.",
            "Não assumes que a cloud é segura por defeito — configura ativamente.",
          ],
        },
        {
          title: "IAM (Gestão de Identidades e Acessos)",
          icon: Users,
          explanation: "IAM (Identity and Access Management) é o sistema que controla quem pode aceder a quê na cloud. Define utilizadores, grupos, papéis (roles) e políticas de acesso. O princípio fundamental é o do 'menor privilégio': cada pessoa ou sistema deve ter apenas o acesso mínimo necessário para fazer o seu trabalho — nada mais.",
          importance: "Credenciais com demasiados privilégios são uma das causas mais comuns de incidentes na cloud. Se uma conta com acesso total for comprometida, o atacante herda esses privilégios.",
          realExample: "Num caso real, um programador tinha uma conta IAM com acesso de administrador em toda a AWS da empresa (porque 'era mais fácil'). Quando o seu portátil foi comprometido, o atacante teve acesso a todos os serviços cloud — bases de dados, servidores, storage.",
          practicalTask: "Na tua conta Google, vai a myaccount.google.com > Segurança > Apps de terceiros com acesso à conta. Verifica que aplicações têm acesso e remove as que já não usas. Isto é gestão de identidade e acesso na prática.",
          bestPractices: [
            "Aplica o princípio do menor privilégio em todas as contas.",
            "Usa MFA em todas as contas cloud, especialmente administradores.",
            "Revê permissões regularmente e remove acessos desnecessários.",
            "Usa roles em vez de chaves de acesso fixas sempre que possível.",
          ],
        },
        {
          title: "Configurações Incorretas (Cloud Misconfigurations)",
          icon: Settings,
          explanation: "Misconfigurations (configurações incorretas) são erros humanos na configuração de serviços cloud: buckets de armazenamento abertos ao público, bases de dados sem password, firewalls com regras demasiado permissivas, etc. São a causa #1 de incidentes de segurança na cloud — não ataques sofisticados, mas erros simples.",
          importance: "É mais fácil do que parece cometer um erro de configuração. Um clique errado pode expor gigabytes de dados sensíveis à internet.",
          realExample: "Em 2020, investigadores descobriram milhares de bases de dados Elasticsearch expostas à internet sem qualquer autenticação. Continham dados pessoais, médicos e financeiros. Na maioria dos casos, o administrador simplesmente não ativou a autenticação.",
          practicalTask: "Checklist de segurança pessoal na cloud: (1) As tuas pastas partilhadas têm acesso restrito? (2) As tuas contas cloud têm MFA? (3) Há dispositivos antigos com acesso às tuas contas? (4) Tens backups dos ficheiros importantes? Se respondeste 'não' a alguma, corrige agora.",
          bestPractices: [
            "Usa ferramentas de auditoria de configuração (AWS Config, Azure Security Center).",
            "Implementa policies que impeçam configurações inseguras por predefinição.",
            "Faz revisões periódicas de segurança das configurações cloud.",
          ],
        },
        {
          title: "Logging & Monitoring na Cloud",
          icon: BarChart3,
          explanation: "Tal como num SOC tradicional, na cloud é crucial monitorizar e registar todas as atividades: quem acedeu, que recursos usou, que alterações fez. Serviços como AWS CloudTrail, Azure Monitor e GCP Cloud Logging registam tudo. Sem estes logs, um incidente na cloud é como um crime sem testemunhas.",
          importance: "Em média, um atacante permanece numa rede comprometida 200+ dias antes de ser detetado. Monitorização ativa e alertas reduzem drasticamente este tempo.",
          realExample: "Uma startup descobriu que alguém estava a usar as suas credenciais AWS para minerar criptomoedas — a fatura mensal passou de 50€ para 15.000€. Os logs do CloudTrail mostraram que as credenciais tinham sido expostas num repositório GitHub público.",
          practicalTask: "Verifica o histórico de login das tuas contas online: no Gmail, vai ao fundo da caixa de entrada e clica em 'Detalhes' (última atividade da conta). Vê de que localizações e dispositivos acederam à tua conta. Algum acesso parece suspeito?",
          bestPractices: [
            "Ativa logging em todos os serviços cloud sem exceção.",
            "Configura alertas para atividades incomuns (novos acessos, alterações de configuração).",
            "Centraliza logs num SIEM para correlação e análise.",
            "Guarda logs num local seguro e imutável (o atacante não deve poder apagá-los).",
          ],
        },
        {
          title: "Container Security (Docker, Kubernetes)",
          icon: Container,
          explanation: "Containers (como Docker) são como 'caixas' que empacotam uma aplicação com tudo o que precisa para funcionar. Kubernetes é o sistema que gere muitos containers em simultâneo. São usados massivamente na cloud, mas trazem riscos próprios: imagens com vulnerabilidades, configurações inseguras, segredos mal geridos e falta de isolamento entre containers.",
          importance: "Os containers tornaram-se a forma principal de correr aplicações na cloud. Se um container está comprometido e não está isolado, o atacante pode aceder a outros containers ou ao sistema host.",
          realExample: "Em 2018, investigadores descobriram que milhares de painéis de administração de Kubernetes estavam expostos à internet sem autenticação. Atacantes usaram estes painéis para instalar software de mineração de criptomoedas nos clusters das vítimas.",
          practicalTask: "Se usas Docker ou containers: verifica se as tuas imagens vêm de fontes oficiais (Docker Hub verified) e se estão atualizadas. Não corras containers como root. Se não usas containers, o conceito a reter é: cada 'caixa' deve conter apenas o mínimo necessário e estar isolada das outras.",
          bestPractices: [
            "Usa imagens base oficiais e minimais (alpine).",
            "Faz scan de vulnerabilidades em imagens antes de as usar.",
            "Nunca corras containers com privilégios de root.",
            "Implementa network policies em Kubernetes para isolar containers.",
          ],
        },
      ]}
      tools={[
        { name: "ScoutSuite", url: "https://github.com/nccgroup/ScoutSuite", desc: "Auditoria multi-cloud open-source" },
        { name: "Prowler", url: "https://github.com/prowler-cloud/prowler", desc: "Ferramenta de avaliação de segurança AWS/Azure/GCP" },
        { name: "Trivy", url: "https://trivy.dev", desc: "Scanner de vulnerabilidades para containers e IaC" },
        { name: "Checkov", url: "https://www.checkov.io", desc: "Análise estática de Infrastructure as Code" },
      ]}
      websites={[
        { name: "AWS Security Hub", url: "https://aws.amazon.com/security-hub", desc: "Central de segurança AWS" },
        { name: "Cloud Security Alliance", url: "https://cloudsecurityalliance.org", desc: "Boas práticas de segurança cloud" },
        { name: "Kubernetes Security", url: "https://kubernetes.io/docs/concepts/security", desc: "Documentação oficial de segurança K8s" },
        { name: "A Cloud Guru", url: "https://acloudguru.com", desc: "Formação em cloud e segurança" },
      ]}
      relatedAreas={[
        { title: "DevSecOps", url: "/devsecops", desc: "Segurança em pipelines de desenvolvimento" },
        { title: "IoT Security", url: "/iot-security", desc: "Segurança de dispositivos conectados" },
        { title: "GRC", url: "/grc", desc: "Conformidade e governança" },
      ]}
    />
  );
}
