import BlockPage from "@/components/BlockPage";
import { Atom, ShieldAlert, KeyRound, Binary, FlaskConical, Globe } from "lucide-react";

export default function QuantumSecurity() {
  return (
    <BlockPage
      title="Quantum & Post-Quantum Security"
      subtitle="Preparar a cibersegurança para a era da computação quântica"
      icon={Atom}
      description="A computação quântica promete resolver problemas que computadores clássicos não conseguem — mas também ameaça a criptografia que protege a internet. Algoritmos como RSA e ECC, que dependem da dificuldade de fatorizar números grandes ou calcular logaritmos discretos, serão quebrados por computadores quânticos suficientemente poderosos. A criptografia pós-quântica (PQC) desenvolve novos algoritmos resistentes a ataques quânticos, e a transição já começou."
      audience="Criptógrafos, security architects, CISOs e qualquer profissional que precise garantir segurança de dados a longo prazo (saúde, governo, finanças)."
      connections="Ligado a Foundations (criptografia base), Cloud Security (TLS e certificados), Privacy Engineering (proteção de dados sensíveis) e Supply Chain Security (integridade de assinaturas digitais)."
      subtopics={[
        {
          title: "A Ameaça Quântica à Criptografia",
          icon: ShieldAlert,
          explanation: "O algoritmo de Shor, executado num computador quântico suficientemente poderoso, pode fatorizar números grandes e calcular logaritmos discretos em tempo polinomial. Isto significa que RSA, DSA, ECDSA, ECDH e Diffie-Hellman — a base da segurança na internet — serão vulneráveis. O conceito 'Harvest Now, Decrypt Later' (HNDL) é especialmente preocupante: adversários capturam dados encriptados hoje para os desencriptar quando tiverem computadores quânticos.",
          importance: "Dados com necessidade de confidencialidade de longo prazo (segredos de estado, dados médicos, propriedade intelectual) já estão em risco se forem capturados hoje.",
          realExample: "Agências de inteligência já estão a armazenar comunicações encriptadas para futura desencriptação quântica, segundo relatórios da NSA e do GCHQ.",
          practicalTask: "Faz um inventário de todos os algoritmos criptográficos usados na tua organização. Quais dependem de RSA ou ECC? Qual é o tempo de vida dos dados protegidos?",
          bestPractices: [
            "Iniciar inventário criptográfico (crypto-agility assessment).",
            "Classificar dados por tempo de confidencialidade necessário.",
            "Planear migração para algoritmos pós-quânticos em sistemas críticos.",
            "Acompanhar o roadmap do NIST para padronização PQC.",
          ],
        },
        {
          title: "Criptografia Pós-Quântica (PQC)",
          icon: KeyRound,
          explanation: "O NIST finalizou em 2024 os primeiros padrões PQC: ML-KEM (Kyber) para encapsulamento de chaves, ML-DSA (Dilithium) e SLH-DSA (SPHINCS+) para assinaturas digitais. Estes algoritmos baseiam-se em problemas matemáticos que se acredita serem resistentes tanto a computadores clássicos como quânticos: lattice-based (redes), hash-based, code-based e multivariate. A transição envolve atualizar protocolos como TLS, SSH, VPNs e certificados digitais.",
          importance: "A padronização pelo NIST é o sinal para iniciar a migração. Organizações que adiarem enfrentarão riscos crescentes à medida que a computação quântica avança.",
          realExample: "O Google Chrome e o Cloudflare já implementaram suporte experimental para ML-KEM em TLS 1.3, preparando a infraestrutura web para a era pós-quântica.",
          practicalTask: "Experimenta gerar um par de chaves com um algoritmo PQC usando a biblioteca liboqs (Open Quantum Safe). Compara o tamanho das chaves com RSA-2048.",
          bestPractices: [
            "Começar com implementações híbridas (clássico + PQC) para reduzir risco.",
            "Testar compatibilidade de algoritmos PQC com a infraestrutura existente.",
            "Usar bibliotecas de referência como liboqs para experimentação.",
            "Seguir as orientações do NIST e das agências nacionais de cibersegurança.",
          ],
        },
        {
          title: "Quantum Key Distribution (QKD)",
          icon: Binary,
          explanation: "QKD usa as propriedades da mecânica quântica para distribuir chaves criptográficas de forma teoricamente inviolável. O princípio de incerteza de Heisenberg garante que qualquer tentativa de intercetar a comunicação altera os fotões e é detetada. Protocolos como BB84 e E91 são os mais estudados. Embora promissor, QKD tem limitações práticas: requer hardware especializado, fibra ótica dedicada e distâncias limitadas (tipicamente <100 km sem repetidores quânticos).",
          importance: "QKD oferece segurança baseada em leis da física, não em complexidade computacional. Para comunicações ultra-sensíveis, pode complementar a criptografia pós-quântica.",
          realExample: "A China lançou o satélite Micius (2016) para QKD via satélite e construiu uma rede QKD de 2.000 km entre Pequim e Xangai, demonstrando a viabilidade a longa distância.",
          practicalTask: "Pesquisa os projetos europeus de QKD (EuroQCI) e identifica que países e organizações estão a implementar redes quânticas.",
          bestPractices: [
            "QKD é complementar, não substituto, da criptografia pós-quântica.",
            "Avaliar se o nível de sensibilidade dos dados justifica o investimento em QKD.",
            "Acompanhar os desenvolvimentos em repetidores quânticos para extensão de alcance.",
            "Considerar QKD como parte de uma estratégia de defesa em profundidade.",
          ],
        },
        {
          title: "Crypto-Agility",
          icon: FlaskConical,
          explanation: "Crypto-agility é a capacidade de um sistema substituir algoritmos criptográficos de forma rápida e sem reescrever código. Envolve abstração da camada criptográfica, configuração externa de algoritmos, suporte a múltiplos algoritmos em simultâneo e testes automatizados de migração. Sistemas crypto-agile podem transitar para PQC sem downtime ou rewrite completo.",
          importance: "A história mostra que algoritmos são eventualmente comprometidos (MD5, SHA-1, DES). A crypto-agility garante que a próxima transição — para PQC — seja gerível.",
          realExample: "A migração de SHA-1 para SHA-256 em certificados TLS levou mais de 10 anos e causou incompatibilidades significativas. Organizações crypto-agile fariam esta transição em semanas.",
          practicalTask: "Analisa uma aplicação tua: quão difícil seria substituir o algoritmo de hashing ou de encriptação? Os algoritmos estão hardcoded ou configuráveis?",
          bestPractices: [
            "Abstrair a camada criptográfica em bibliotecas ou serviços dedicados.",
            "Evitar hardcoding de algoritmos — usar configuração externa.",
            "Manter inventário atualizado de todos os usos de criptografia.",
            "Testar regularmente a capacidade de rotação de algoritmos.",
          ],
        },
        {
          title: "Timeline e Estado Atual",
          icon: Globe,
          explanation: "Estimativas variam, mas especialistas preveem computadores quânticos criptograficamente relevantes (CRQC) entre 2030 e 2040. O NIST finalizou os primeiros padrões PQC em 2024. A NSA exige que sistemas de segurança nacional migrem para PQC até 2035. A UE lançou a EuroQCI para infraestrutura quântica. Empresas como IBM, Google e Microsoft investem bilhões em computação quântica. O 'Q-Day' — quando um computador quântico quebrar RSA-2048 — é questão de quando, não se.",
          importance: "A janela de preparação está a fechar. Dados capturados hoje sob HNDL serão expostos quando o Q-Day chegar. A migração leva anos e deve começar agora.",
          realExample: "A Casa Branca emitiu o National Security Memorandum NSM-10 (2022) ordenando agências federais a inventariar sistemas criptográficos e planear migração para PQC.",
          practicalTask: "Cria um roadmap de 5 anos para a transição PQC da tua organização: inventário (ano 1), testes de compatibilidade (ano 2), implementação híbrida (anos 3-4), migração completa (ano 5).",
          bestPractices: [
            "Não esperar pelo Q-Day — começar a preparação agora.",
            "Priorizar sistemas com dados de longa confidencialidade.",
            "Formar equipas em criptografia pós-quântica.",
            "Participar em pilotos e programas de teste de PQC.",
          ],
        },
      ]}
      tools={[
        { name: "Open Quantum Safe (liboqs)", url: "https://openquantumsafe.org/" },
        { name: "NIST PQC Standards", url: "https://csrc.nist.gov/projects/post-quantum-cryptography" },
        { name: "IBM Quantum", url: "https://quantum-computing.ibm.com/" },
        { name: "Cloudflare PQC", url: "https://blog.cloudflare.com/post-quantum-crypto/" },
        { name: "ANSSI — PQC Recommendations", url: "https://www.ssi.gouv.fr/en/" },
      ]}
      newsLinks={[
        { title: "NIST — Post-Quantum Cryptography", url: "https://csrc.nist.gov/projects/post-quantum-cryptography" },
        { title: "Cloudflare Blog — Post-Quantum", url: "https://blog.cloudflare.com/tag/post-quantum/" },
        { title: "The Quantum Insider", url: "https://thequantuminsider.com/" },
        { title: "ENISA — Post-Quantum Cryptography", url: "https://www.enisa.europa.eu/topics/post-quantum-cryptography" },
      ]}
    />
  );
}
