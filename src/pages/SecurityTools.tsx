import BlockPage from "@/components/BlockPage";
import { Wrench, Globe, Wifi, Eye, Bomb, Shield } from "lucide-react";

export default function SecurityTools() {
  return (
    <BlockPage
      title="Security Tools"
      subtitle="As ferramentas essenciais da cibersegurança"
      icon={Wrench}
      description="A cibersegurança depende de ferramentas especializadas para análise, teste, monitorização e defesa. Esta secção apresenta as ferramentas mais importantes do ecossistema, explicando o que fazem, em que contextos se usam e como se integram nos diferentes blocos da stack."
      audience="Estudantes e aspirantes a profissionais de segurança, analistas SOC, pentesters, e qualquer pessoa curiosa sobre as ferramentas usadas no dia a dia da cibersegurança."
      connections="Estas ferramentas são usadas transversalmente: Nmap e Wireshark em Foundations e SOC, Burp Suite e ZAP em Web Security e Pentesting, Metasploit em Pentesting, e todas em formação e aprendizagem."
      subtopics={[
        {
          title: "Burp Suite",
          icon: Globe,
          explanation: "Burp Suite é a ferramenta de referência para testes de segurança em aplicações web. Funciona como um proxy — intercepta as comunicações entre o teu browser e o site, permitindo analisar e modificar pedidos HTTP. É usado tanto para testes manuais como automatizados. Pensa nisto como um 'raio-X' do tráfego web: vês tudo o que o teu browser envia e recebe, incluindo dados que normalmente são invisíveis.",
          importance: "A maior parte das aplicações modernas são web. Burp Suite permite encontrar vulnerabilidades como XSS, SQL Injection, falhas de autenticação e muito mais, antes que um atacante o faça.",
          realExample: "Num pentest web, um analista usou o Burp Suite para interceptar um pedido de login e descobriu que a aplicação enviava a password em texto simples (sem encriptação) dentro do corpo do pedido HTTP. Além disso, descobriu que podia alterar o parâmetro 'role=user' para 'role=admin' e obter acesso administrativo.",
          practicalTask: "Sem instalar nada, abre as Ferramentas de Desenvolvedor do teu browser (F12) e vai ao separador 'Rede' (Network). Agora navega num site e observa os pedidos HTTP que o browser faz. Vês URLs, headers e às vezes dados enviados. Isto é uma versão simplificada do que o Burp Suite mostra — mas o Burp permite editar e reenviar estes pedidos.",
          bestPractices: [
            "Usa Burp Suite apenas em aplicações para as quais tens autorização de teste.",
            "Começa pela versão Community (gratuita) para aprender.",
            "Combina análise manual com o scanner automático para melhores resultados.",
            "Usado principalmente em: Pentesting, Web & API Security.",
          ],
        },
        {
          title: "Nmap",
          icon: Wifi,
          explanation: "Nmap (Network Mapper) é a ferramenta mais usada para descoberta de rede e auditoria de segurança. Faz scan de portas — 'bate' em cada porta de um sistema para ver quais estão abertas e que serviços estão a correr. É como verificar todas as portas e janelas de um edifício para saber quais estão abertas. Também identifica sistemas operativos, versões de software e pode detetar firewalls.",
          importance: "Saber que portas estão abertas e que serviços estão expostos é o primeiro passo para avaliar a superfície de ataque. Portas abertas desnecessárias são convites a problemas.",
          realExample: "Um administrador de rede usou Nmap para fazer um scan interno e descobriu que um servidor antigo, esquecido num canto, ainda estava ligado com 15 portas abertas, incluindo FTP sem password e uma versão antiga do Apache com vulnerabilidades críticas.",
          practicalTask: "Conceito sem instalação: imagina o teu router doméstico como um edifício. A porta 80 (HTTP) pode estar aberta para o site de configuração, a porta 443 (HTTPS) para gestão segura. Se a porta 23 (Telnet, protocolo antigo e inseguro) estiver aberta, é como ter uma janela sem fecho. Nmap revelaria todas estas 'portas' rapidamente.",
          bestPractices: [
            "Só faz scan a redes e sistemas que te pertencem ou para os quais tens autorização.",
            "Documenta os resultados de cada scan para comparação futura.",
            "Faz scans regulares à tua infraestrutura para detetar alterações inesperadas.",
            "Usado principalmente em: Pentesting, SOC, Foundations, Vulnerability Management.",
          ],
        },
        {
          title: "Wireshark",
          icon: Eye,
          explanation: "Wireshark é um analisador de tráfego de rede — captura e mostra todos os pacotes de dados que passam pela tua interface de rede. É como ter uma escuta telefónica digital: vês cada 'conversa' entre o teu computador e outros sistemas. Permite analisar protocolos, encontrar anomalias e diagnosticar problemas de rede. Em segurança, é usado para detetar comunicações suspeitas, malware que comunica com servidores externos e fugas de dados.",
          importance: "Muitos ataques envolvem comunicação de rede — malware que envia dados para fora, ataques man-in-the-middle, túneis DNS. O Wireshark permite 'ver' estas comunicações.",
          realExample: "Um analista SOC usou Wireshark para investigar porque é que um computador estava a gerar tráfego incomum às 3h da manhã. A análise revelou que o computador estava infetado com malware que enviava dados para um servidor na China através de pacotes DNS encriptados (DNS tunneling).",
          practicalTask: "Sem instalar Wireshark, abre as Ferramentas de Desenvolvedor do browser (F12) e vai ao separador 'Rede'. Faz uma pesquisa no Google e observa quantos pedidos o browser faz: HTML, CSS, JavaScript, imagens, APIs de analytics. Cada um é um 'pacote' que o Wireshark mostraria. Agora imagina ver TODOS os pacotes de TODOS os programas do teu computador — isso é o Wireshark.",
          bestPractices: [
            "Usa Wireshark apenas na tua própria rede ou com autorização.",
            "Filtra o tráfego por protocolo ou IP para encontrar o que procuras.",
            "Capturar tráfego de outros sem autorização é ilegal — usa responsavelmente.",
            "Usado principalmente em: SOC, Foundations, Digital Forensics, Threat Intelligence.",
          ],
        },
        {
          title: "Metasploit",
          icon: Bomb,
          explanation: "Metasploit é a framework de exploração mais conhecida do mundo. Contém milhares de módulos para explorar vulnerabilidades conhecidas, gerar payloads (código malicioso para testes) e simular ataques completos. É como um 'canivete suíço' do pentesting — num único ambiente, tens acesso a exploits para quase todas as vulnerabilidades conhecidas. Usado exclusivamente em testes autorizados.",
          importance: "Permite a pentesters provar de forma eficiente que vulnerabilidades são exploráveis, sem precisar de desenvolver exploits do zero. Acelera testes e demonstra impacto real.",
          realExample: "Num pentest autorizado, o pentester usou Metasploit para explorar uma vulnerabilidade EternalBlue (a mesma do WannaCry) num servidor Windows não atualizado e obteve acesso total ao sistema em segundos. Isto demonstrou à gestão da empresa o risco real de não aplicar patches.",
          practicalTask: "Não precisas de usar Metasploit para perceber o conceito. Visita exploit-db.com — é uma base de dados pública de exploits. Pesquisa uma vulnerabilidade conhecida (ex.: 'Apache') e observa como os exploits são descritos: que versão afetam, que impacto têm e como se corrige. O Metasploit automatiza o uso destes exploits em testes autorizados.",
          bestPractices: [
            "Usa Metasploit APENAS com autorização escrita e âmbito definido.",
            "Nunca uses em sistemas de produção — sempre em ambientes de teste.",
            "Documenta cada exploit usado e o resultado obtido.",
            "Usado principalmente em: Pentesting (exclusivamente em testes autorizados).",
          ],
        },
        {
          title: "OWASP ZAP",
          icon: Shield,
          explanation: "OWASP ZAP (Zed Attack Proxy) é uma ferramenta gratuita e open-source para testes de segurança em aplicações web. Semelhante ao Burp Suite, funciona como proxy e scanner, mas é completamente gratuito. É mantido pela comunidade OWASP e é ideal para quem está a aprender. Tem scanner automático (aponta para um site e ele testa vulnerabilidades comuns) e modo manual para testes mais detalhados.",
          importance: "Sendo gratuito e acessível, o ZAP democratiza os testes de segurança web. Qualquer programador ou pequena empresa pode usar para testar as suas aplicações sem custos.",
          realExample: "Uma startup sem budget para segurança integrou o OWASP ZAP no seu pipeline CI/CD. A cada deploy, o ZAP fazia um scan automático da aplicação em staging. Em 3 meses, detetou e corrigiu 23 vulnerabilidades antes de chegarem a produção — incluindo 2 de severidade alta.",
          practicalTask: "Visita zaproxy.org e explora a documentação de 'Getting Started'. Não precisas de instalar — lê sobre como funciona, que tipo de testes faz e como se integra num pipeline de desenvolvimento. Quando estiveres pronto para praticar, podes instalar e apontar para aplicações de treino como DVWA ou OWASP Juice Shop.",
          bestPractices: [
            "Ideal para iniciantes — começa pelo ZAP antes de investir em ferramentas pagas.",
            "Integra no pipeline CI/CD para scans automáticos.",
            "Usa em conjunto com SAST para cobertura completa.",
            "Usado principalmente em: Web & API Security, DevSecOps, Pentesting.",
          ],
        },
      ]}
      tools={[
        { name: "Kali Linux", url: "https://www.kali.org", desc: "Distribuição Linux com centenas de ferramentas de segurança" },
        { name: "CyberChef", url: "https://gchq.github.io/CyberChef", desc: "Ferramenta web para encoding, hashing e análise de dados" },
        { name: "Ghidra", url: "https://ghidra-sre.org", desc: "Ferramenta de engenharia reversa da NSA (open-source)" },
        { name: "theHarvester", url: "https://github.com/laramies/theHarvester", desc: "Recolha de emails, subdomínios e IPs" },
      ]}
      websites={[
        { name: "Awesome Security", url: "https://github.com/sbilly/awesome-security", desc: "Lista curada de ferramentas e recursos de segurança" },
        { name: "SecTools.org", url: "https://sectools.org", desc: "Top 125 ferramentas de segurança" },
        { name: "OWASP Projects", url: "https://owasp.org/projects", desc: "Projetos open-source de segurança web" },
        { name: "PacketStorm", url: "https://packetstormsecurity.com", desc: "Notícias, ferramentas e exploits de segurança" },
      ]}
      newsLinks={[
        { title: "Kali Linux Blog — Novas ferramentas", url: "https://www.kali.org/blog/", source: "Kali Linux" },
        { title: "PacketStorm Security", url: "https://packetstormsecurity.com/", source: "PacketStorm" },
        { title: "ToolsWatch — Novas ferramentas de segurança", url: "https://www.toolswatch.org/", source: "ToolsWatch" },
        { title: "Kitploit — Ferramentas para pentesters", url: "https://www.kitploit.com/", source: "Kitploit" },
      ]}
      relatedAreas={[
        { title: "Pentesting", url: "/pentesting", desc: "Testes de segurança ofensivos" },
        { title: "SOC", url: "/soc", desc: "Operações de segurança" },
        { title: "DevSecOps", url: "/devsecops", desc: "Segurança no desenvolvimento" },
      ]}
      ethicsNote="Todas as ferramentas apresentadas devem ser usadas exclusivamente para fins legítimos: testes autorizados, aprendizagem em ambientes controlados e defesa. Usar estas ferramentas contra sistemas sem autorização é ilegal e antiético. Plataformas como Hack The Box, TryHackMe e OWASP WebGoat oferecem ambientes seguros para praticar."
    />
  );
}
