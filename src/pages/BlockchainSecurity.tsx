import BlockPage from "@/components/BlockPage";
import { Blocks, FileCode, Wallet, AlertTriangle, ShieldCheck, Search } from "lucide-react";

export default function BlockchainSecurity() {
  return (
    <BlockPage
      title="Blockchain & Web3 Security"
      subtitle="Segurança em smart contracts, DeFi e ecossistema descentralizado"
      icon={Blocks}
      description="Blockchain e Web3 introduzem um novo paradigma de aplicações descentralizadas — mas também novos vetores de ataque. Smart contracts imutáveis com bugs podem perder milhões em minutos. DeFi protocols são alvos constantes de exploits. Wallets, bridges e DAOs requerem modelos de segurança diferentes dos tradicionais. Este módulo explora as ameaças, boas práticas e ferramentas para proteger o ecossistema Web3."
      audience="Developers de smart contracts, auditores de segurança Web3, investidores em DeFi e profissionais de segurança que precisam compreender este ecossistema emergente."
      connections="Ligado a Foundations (criptografia), Web & API Security (vulnerabilidades em dApps), DevSecOps (auditorias automatizadas) e Quantum Security (impacto futuro na criptografia de blockchain)."
      subtopics={[
        {
          title: "Vulnerabilidades em Smart Contracts",
          icon: FileCode,
          explanation: "Smart contracts são programas imutáveis que executam na blockchain. As vulnerabilidades mais comuns incluem: reentrancy (um contrato malicioso chama de volta o contrato vulnerável antes de atualizar o estado), integer overflow/underflow, front-running (manipulação da ordem das transações), e falhas de controlo de acesso. Linguagens como Solidity (Ethereum) e Rust (Solana) têm armadilhas específicas que developers devem conhecer.",
          importance: "Smart contracts são imutáveis após deploy — um bug não pode ser 'patchado' como software tradicional. Erros custam milhões e são irreversíveis.",
          realExample: "O hack do DAO (2016) explorou uma vulnerabilidade de reentrancy e drenou 60 milhões de dólares em ETH, levando ao controverso hard fork do Ethereum.",
          practicalTask: "Analisa um smart contract vulnerável no Ethernaut (jogo de hacking da OpenZeppelin) e tenta explorar a vulnerabilidade de reentrancy no nível 'Re-entrancy'.",
          bestPractices: [
            "Seguir o padrão Checks-Effects-Interactions para prevenir reentrancy.",
            "Usar bibliotecas auditadas como OpenZeppelin para funções comuns.",
            "Implementar circuit breakers (pausabilidade) em contratos críticos.",
            "Limitar o valor de ETH/tokens que um contrato pode processar por transação.",
          ],
        },
        {
          title: "Segurança em Wallets e Chaves",
          icon: Wallet,
          explanation: "Em Web3, 'not your keys, not your crypto' é lei. A segurança das chaves privadas é fundamental: hardware wallets (Ledger, Trezor) armazenam chaves offline; multi-signature wallets exigem múltiplas aprovações; social recovery wallets permitem recuperação via guardiões de confiança. Phishing, malware e engenharia social são os principais vetores de roubo de wallets.",
          importance: "Não existe 'recuperar password' em blockchain. Perder ou comprometer a chave privada significa perder o acesso permanentemente aos ativos.",
          realExample: "O hack do Ronin Bridge (2022) comprometeu 5 de 9 chaves de validador e roubou 625 milhões de dólares — o maior hack DeFi da história.",
          practicalTask: "Configura uma hardware wallet (ou simulador) e pratica: criar backup da seed phrase, assinar uma transação offline e verificar o endereço no dispositivo.",
          bestPractices: [
            "Usar hardware wallets para armazenamento de valores significativos.",
            "Implementar multi-sig para tesourarias de DAOs e organizações.",
            "Nunca armazenar seed phrases digitalmente ou em cloud.",
            "Verificar sempre o endereço de destino no dispositivo antes de assinar.",
          ],
        },
        {
          title: "Ataques a DeFi e Bridges",
          icon: AlertTriangle,
          explanation: "DeFi (Decentralized Finance) replica serviços financeiros em blockchain: empréstimos, exchanges, derivados. Os ataques mais comuns incluem flash loan attacks (empréstimos instantâneos usados para manipular preços), oracle manipulation (alterar feeds de preço externos), e bridge exploits (comprometer pontes entre blockchains). Flash loans permitem ataques sem capital inicial — o atacante empresta, explora e devolve numa única transação.",
          importance: "Em 2022, mais de 3 mil milhões de dólares foram roubados de protocolos DeFi. Bridges cross-chain são particularmente vulneráveis por combinarem complexidade com valores elevados.",
          realExample: "O exploit do Wormhole Bridge (2022) explorou uma falha de validação e cunhou 120.000 wETH falsos ($320M). O atacante explorou uma discrepância entre a verificação de assinaturas e a emissão de tokens.",
          practicalTask: "Estuda um flash loan attack real (ex: bZx 2020) e desenha o fluxo do ataque: empréstimo → manipulação → lucro → devolução, tudo numa transação.",
          bestPractices: [
            "Usar múltiplos oráculos (Chainlink, Band, TWAP) para resistência a manipulação.",
            "Implementar delays e limites em operações de alto valor.",
            "Auditar interações cross-contract e composability risks.",
            "Monitorizar transações suspeitas com ferramentas on-chain.",
          ],
        },
        {
          title: "Auditoria de Smart Contracts",
          icon: ShieldCheck,
          explanation: "A auditoria de smart contracts combina análise manual por especialistas com ferramentas automatizadas. O processo inclui: revisão do código linha a linha, análise estática (Slither, Mythril), fuzzing (Echidna), verificação formal (Certora) e testes de propriedade. Programas de bug bounty (Immunefi) complementam auditorias formais. Uma auditoria não garante segurança — é uma opinião informada num ponto no tempo.",
          importance: "Projetos não auditados são considerados de alto risco pela comunidade. Uma auditoria de qualidade pode encontrar vulnerabilidades que custariam milhões se exploradas.",
          realExample: "A Trail of Bits descobriu uma vulnerabilidade crítica no Compound Finance durante uma auditoria que, se explorada, teria permitido drenar todos os fundos do protocolo.",
          practicalTask: "Instala o Slither e corre-o num smart contract Solidity de exemplo. Analisa os findings e classifica-os por severidade.",
          bestPractices: [
            "Realizar pelo menos 2 auditorias independentes antes de mainnet.",
            "Combinar análise manual com ferramentas automatizadas.",
            "Lançar programa de bug bounty com recompensas proporcionais ao TVL.",
            "Re-auditar após qualquer alteração ao código do contrato.",
          ],
        },
        {
          title: "Monitorização e Resposta On-Chain",
          icon: Search,
          explanation: "A transparência da blockchain permite monitorização em tempo real de transações suspeitas. Ferramentas como Forta Network, Tenderly e OpenZeppelin Defender monitorizam contratos e alertam sobre anomalias. Blockchain forensics (Chainalysis, Elliptic) rastreiam fundos roubados através de mixers e exchanges. A resposta a incidentes em Web3 é diferente: contratos são imutáveis, mas bridges podem ser pausadas e governance pode votar ações de emergência.",
          importance: "A velocidade de resposta é crítica em Web3 — um exploit pode drenar um protocolo em minutos. Monitorização proativa pode detetar e mitigar ataques em tempo real.",
          realExample: "O protocolo Euler Finance recuperou $197M de fundos roubados em 2023 através de negociação on-chain com o atacante, facilitada por rastreamento de blockchain forensics.",
          practicalTask: "Explora o Etherscan e analisa uma transação de um exploit conhecido. Identifica: endereço do atacante, contrato explorado, valor roubado e caminho dos fundos.",
          bestPractices: [
            "Implementar monitorização em tempo real com Forta ou Tenderly.",
            "Definir runbooks de resposta a incidentes específicos para Web3.",
            "Manter relações com exchanges para congelamento rápido de fundos.",
            "Usar timelocks em governance para permitir resposta a ataques.",
          ],
        },
      ]}
      tools={[
        { name: "Slither (Análise Estática)", url: "https://github.com/crytic/slither" },
        { name: "Mythril (Análise Simbólica)", url: "https://github.com/ConsenSys/mythril" },
        { name: "Echidna (Fuzzing)", url: "https://github.com/crytic/echidna" },
        { name: "OpenZeppelin Contracts", url: "https://www.openzeppelin.com/contracts" },
        { name: "Immunefi (Bug Bounties)", url: "https://immunefi.com/" },
        { name: "Ethernaut (Prática)", url: "https://ethernaut.openzeppelin.com/" },
        { name: "Forta Network (Monitorização)", url: "https://forta.org/" },
      ]}
      newsLinks={[
        { title: "Rekt News — Leaderboard de Hacks DeFi", url: "https://rekt.news/" },
        { title: "Immunefi Blog — Web3 Security", url: "https://immunefi.com/blog/" },
        { title: "Trail of Bits Blog", url: "https://blog.trailofbits.com/" },
        { title: "OpenZeppelin Blog", url: "https://blog.openzeppelin.com/" },
      ]}
    />
  );
}
