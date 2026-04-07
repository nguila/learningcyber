import BlockPage from "@/components/BlockPage";
import { Shield, Wifi, Monitor, Layers, Lock, ShieldCheck } from "lucide-react";

export default function Foundations() {
  return (
    <BlockPage
      title="Foundations"
      subtitle="A base de tudo na cibersegurança"
      icon={Shield}
      description="Este é o ponto de partida. Antes de proteger sistemas, é preciso perceber como funcionam. Aqui vais aprender como a internet transmite dados, como os sistemas operativos trabalham, o que é encriptação e quais os princípios fundamentais de segurança."
      audience="Qualquer pessoa — desde utilizadores comuns que querem perceber melhor o mundo digital, até estudantes a iniciar percurso em segurança informática."
      connections="Todos os outros blocos dependem destes fundamentos. Sem compreender redes, não se entende SOC; sem criptografia, não se entende autenticação segura."
      subtopics={[
        {
          title: "Networking (TCP/IP, DNS, HTTP/S)",
          icon: Wifi,
          explanation: "Quando abres um site no browser, o teu computador envia pedidos através da internet usando protocolos — regras que garantem que os dados chegam ao destino certo. TCP/IP é como o sistema postal da internet: garante que cada 'pacote' de dados tem um endereço e chega intacto. O DNS é como uma lista telefónica — traduz nomes como 'google.pt' para números (endereços IP) que os computadores entendem. HTTP/S é o protocolo que o browser usa para pedir páginas web; o 'S' (Secure) significa que a comunicação é encriptada.",
          importance: "Se não percebes como os dados viajam, não consegues perceber como podem ser intercetados ou manipulados. Muitos ataques exploram falhas nestes protocolos básicos.",
          realExample: "Em 2018, um ataque de 'DNS hijacking' redirecionou utilizadores de um banco brasileiro para uma cópia falsa do site, roubando credenciais de milhares de clientes.",
          practicalTask: "Abre o teu browser, visita um site qualquer e clica no ícone de cadeado ao lado do endereço. Verifica se diz 'Ligação segura' e vê o certificado. Depois, abre a linha de comandos (cmd no Windows ou terminal no Mac/Linux) e escreve 'ping google.pt' — vais ver o endereço IP real do servidor.",
          bestPractices: [
            "Verifica sempre o cadeado HTTPS antes de inserir dados pessoais num site.",
            "Desconfia de sites cujo domínio parece estranho (ex.: g00gle.pt em vez de google.pt).",
            "Usa DNS seguros (como 1.1.1.1 ou 8.8.8.8) para mais privacidade.",
          ],
        },
        {
          title: "Linux & Windows Internals",
          icon: Monitor,
          explanation: "O sistema operativo (SO) é o 'gestor' do teu computador — decide que programas podem correr, quem tem acesso a quê e como os ficheiros são guardados. Windows e Linux são os SO mais comuns. Cada um tem processos (programas em execução), utilizadores com diferentes permissões e um sistema de ficheiros organizado em pastas. Pensa no SO como o 'porteiro' de um edifício: controla quem entra, onde vai e o que pode fazer.",
          importance: "A maioria dos ataques explora fraquezas ao nível do sistema operativo — permissões mal configuradas, processos suspeitos ou ficheiros acessíveis a quem não devia.",
          realExample: "O ransomware WannaCry (2017) explorou uma vulnerabilidade no Windows para encriptar ficheiros em centenas de milhares de computadores em todo o mundo, incluindo hospitais no Reino Unido.",
          practicalTask: "No Windows, abre o Gestor de Tarefas (Ctrl+Shift+Esc) e observa os processos em execução. Tenta identificar quais conheces e quais são desconhecidos. Se usas Mac ou Linux, abre o terminal e escreve 'top' ou 'ps aux' para ver os processos ativos.",
          bestPractices: [
            "Mantém o sistema operativo sempre atualizado.",
            "Não uses conta de administrador para tarefas do dia a dia.",
            "Verifica regularmente que programas estão instalados e remove os que não usas.",
            "Ativa o firewall do sistema operativo.",
          ],
        },
        {
          title: "Modelo OSI",
          icon: Layers,
          explanation: "O modelo OSI é como um 'mapa' com 7 camadas que explica como a comunicação funciona em redes. Cada camada tem uma função: desde os cabos físicos (camada 1) até à aplicação que usas (camada 7). Imagina que envias uma carta: primeiro escreves (aplicação), metes num envelope (apresentação), levas ao correio (sessão), o correio garante a entrega (transporte), escolhe a rota (rede), viaja fisicamente (ligação de dados e física). Na internet, acontece algo semelhante, mas em milissegundos.",
          importance: "Perceber as camadas ajuda a localizar onde ocorreu um problema ou ataque. Por exemplo, um ataque pode ser na camada de rede (manipulação de IP) ou na camada de aplicação (injeção em formulários web).",
          realExample: "Quando um site fica lento, a equipa técnica investiga em que camada está o problema: pode ser um cabo partido (camada 1), congestionamento de rede (camada 3) ou um servidor sobrecarregado (camada 7).",
          practicalTask: "Pensa numa ação simples que fazes online, como abrir o e-mail. Tenta imaginar as camadas: o teu browser (aplicação), a encriptação HTTPS (apresentação/sessão), o TCP que garante a entrega (transporte), o IP que endereça (rede), o Wi-Fi (ligação de dados) e as ondas de rádio (física).",
          bestPractices: [
            "Não precisas de decorar as 7 camadas — entende o conceito de que a comunicação tem várias etapas.",
            "Quando algo falha na internet, pensa em camadas: é o Wi-Fi? O servidor? O browser?",
          ],
        },
        {
          title: "Criptografia Básica",
          icon: Lock,
          explanation: "Criptografia é a ciência de proteger informação transformando-a num formato ilegível para quem não tem a 'chave'. Há vários conceitos importantes: encriptação (transformar dados legíveis em código), chaves (o 'segredo' para descodificar), hashing (transformar dados num resumo único e irreversível — usado para verificar passwords) e assinaturas digitais (provar que um documento não foi alterado e quem o enviou).",
          importance: "Sem criptografia, qualquer pessoa numa rede Wi-Fi poderia ler os teus e-mails, ver as tuas passwords ou alterar transferências bancárias. É a base de toda a confiança digital.",
          realExample: "Quando acedes ao teu banco online, a comunicação é encriptada com TLS/HTTPS. Mesmo que alguém intercete os dados, só vê caracteres sem sentido. As tuas passwords são guardadas como hashes — o banco nunca sabe a tua password real, apenas compara resumos.",
          practicalTask: "Vai a um site de geração de hashes (como 'sha256 online generator') e escreve uma palavra qualquer. Observa o resultado — é sempre do mesmo tamanho, independentemente da palavra. Agora muda uma letra e vê como o hash muda completamente. Isto é o que acontece com a tua password quando é guardada de forma segura.",
          bestPractices: [
            "Usa passwords longas e únicas — elas são convertidas em hashes para proteção.",
            "Verifica sempre que os sites usam HTTPS antes de enviar dados.",
            "Ativa encriptação no teu disco (BitLocker no Windows, FileVault no Mac).",
            "Nunca partilhes chaves privadas ou passwords por canais não seguros.",
          ],
        },
        {
          title: "Princípios de Segurança (Tríade CIA)",
          icon: ShieldCheck,
          explanation: "CIA não é a agência americana — é Confidencialidade, Integridade e Disponibilidade, os três pilares da segurança da informação. Confidencialidade: só pessoas autorizadas acedem à informação (ex.: a tua password é só tua). Integridade: a informação não é alterada sem autorização (ex.: ninguém muda o valor numa transferência bancária). Disponibilidade: a informação e os sistemas estão acessíveis quando precisas (ex.: o site do banco funciona quando queres fazer uma operação).",
          importance: "Todos os controlos de segurança existem para proteger um ou mais destes pilares. Quando se avalia um risco ou um incidente, pergunta-se sempre: o que foi comprometido — confidencialidade, integridade ou disponibilidade?",
          realExample: "O ataque ao Parlamento Europeu em 2022 (DDoS) afetou a Disponibilidade — o site ficou inacessível. Uma fuga de dados pessoais de clientes viola a Confidencialidade. Um atacante que altera registos médicos compromete a Integridade.",
          practicalTask: "Pensa num ficheiro importante que tens no computador (foto, documento, trabalho). Pergunta-te: (C) quem mais poderia aceder a ele? (I) Como saberias se alguém o alterou sem a tua permissão? (D) O que aconteceria se o perdesses amanhã? Tens backup?",
          bestPractices: [
            "Faz backups regulares dos teus ficheiros importantes (protege Disponibilidade).",
            "Usa passwords fortes e MFA (protege Confidencialidade).",
            "Verifica checksums quando descarregas software importante (protege Integridade).",
            "Aplica o princípio do menor privilégio — só dá acesso a quem realmente precisa.",
          ],
        },
      ]}
      tools={[
        { name: "Wireshark", url: "https://www.wireshark.org", desc: "Analisador de tráfego de rede gratuito e open-source" },
        { name: "PuTTY", url: "https://www.putty.org", desc: "Cliente SSH/Telnet para Windows" },
        { name: "VirtualBox", url: "https://www.virtualbox.org", desc: "Virtualização gratuita para testar SO sem risco" },
        { name: "GNS3", url: "https://www.gns3.com", desc: "Simulador de redes para praticar configurações" },
      ]}
      websites={[
        { name: "Professor Messer", url: "https://www.professormesser.com", desc: "Vídeos gratuitos de CompTIA Network+ e Security+" },
        { name: "Cybrary", url: "https://www.cybrary.it", desc: "Plataforma de formação em cibersegurança" },
        { name: "Khan Academy — Networking", url: "https://www.khanacademy.org/computing/computers-and-internet", desc: "Conceitos base de redes e internet" },
        { name: "Linux Journey", url: "https://linuxjourney.com", desc: "Aprender Linux do zero, passo a passo" },
      ]}
      relatedAreas={[
        { title: "SOC", url: "/soc", desc: "Monitorização e resposta a incidentes" },
        { title: "Security Tools", url: "/security-tools", desc: "Ferramentas essenciais da área" },
        { title: "Cloud Security", url: "/cloud-security", desc: "Segurança em ambientes cloud" },
      ]}
    />
  );
}
