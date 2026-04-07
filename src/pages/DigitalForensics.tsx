import BlockPage from "@/components/BlockPage";
import { Search, HardDrive, Cpu, FileText, ShieldCheck, FileBarChart } from "lucide-react";

export default function DigitalForensics() {
  return (
    <BlockPage
      title="Digital Forensics"
      subtitle="Investigação pós-incidente: o que aconteceu, como e porquê"
      icon={Search}
      description="Digital Forensics (forense digital) é a ciência de investigar incidentes de segurança depois de acontecerem. Tal como a investigação criminal analisa provas físicas, a forense digital analisa provas digitais: ficheiros, logs, memória, discos. O objetivo é reconstruir o que aconteceu, como o atacante entrou, que dados foram afetados e recolher provas admissíveis."
      audience="Analistas de segurança, equipas de resposta a incidentes, profissionais de TI e qualquer pessoa curiosa sobre como se investigam ciberataques."
      connections="Liga-se diretamente a SOC (resposta a incidentes), Threat Intelligence (compreender o atacante), GRC (requisitos legais de preservação de provas) e Security Tools (ferramentas de investigação)."
      subtopics={[
        {
          title: "Análise de Disco (Disk Analysis)",
          icon: HardDrive,
          explanation: "A análise de disco examina o conteúdo de discos rígidos ou SSDs à procura de provas: ficheiros apagados (que muitas vezes podem ser recuperados), ficheiros ocultos, histórico de atividade e metadados (data de criação, modificação, acesso). É como arqueologia digital — escavar camadas de dados para reconstruir a história.",
          importance: "Mesmo quando um atacante tenta apagar os seus rastos, vestígios permanecem no disco. Ficheiros 'apagados' geralmente ficam no disco até serem sobrescritos — e podem ser recuperados por análise forense.",
          realExample: "Num caso de fraude empresarial, a análise forense de disco revelou que um funcionário tinha copiado bases de dados de clientes para um disco USB uma semana antes de sair da empresa. Os ficheiros tinham sido apagados do computador, mas foram recuperados pela equipa forense.",
          practicalTask: "Experimenta isto: no teu computador, quando apagamos um ficheiro, ele vai para a Reciclagem/Lixo. Mas mesmo depois de esvaziar a reciclagem, o ficheiro continua no disco até ser sobrescrito. É por isso que a forense consegue recuperar dados 'apagados'. Isto também reforça a importância de encriptar o disco se tiveres dados sensíveis.",
          bestPractices: [
            "Nunca trabalha no disco original — faz uma cópia (imagem forense) primeiro.",
            "Documenta cada passo da análise para validade legal.",
            "Usa ferramentas certificadas para preservar a integridade das provas.",
          ],
        },
        {
          title: "Memory Forensics",
          icon: Cpu,
          explanation: "Memory forensics analisa o conteúdo da memória RAM — a memória temporária do computador. Enquanto o disco guarda dados permanentemente, a RAM contém o que está a acontecer AGORA: processos em execução, ligações de rede ativas, passwords temporárias, malware que só existe em memória. Quando desligas o computador, esta informação perde-se — por isso, capturá-la rapidamente é crucial.",
          importance: "Alguns tipos de malware avançado nunca tocam o disco — correm apenas na memória RAM (fileless malware). Sem análise de memória, este tipo de ataque é invisível à forense tradicional.",
          realExample: "O malware Emotet, um dos mais perigosos dos últimos anos, usava técnicas fileless: injetava-se em processos legítimos na memória. A única forma de detetá-lo após infeção era analisar a memória RAM do sistema afetado.",
          practicalTask: "Conceito simplificado: abre o Gestor de Tarefas (Windows) ou Monitor de Atividade (Mac) e observa quanta RAM cada processo usa. Nota que há dezenas de processos a correr — um investigador forense analisaria cada um, procurando código malicioso escondido em processos aparentemente normais.",
          bestPractices: [
            "Captura a memória RAM o mais cedo possível após detetar um incidente.",
            "Nunca desligues um sistema suspeito antes de capturar a memória.",
            "Usa ferramentas especializadas como Volatility para análise de memória.",
          ],
        },
        {
          title: "Investigação de Logs",
          icon: FileText,
          explanation: "Os logs são o 'diário' dos sistemas — registam quem fez o quê, quando e como. Na forense digital, os logs são provas fundamentais: logs de autenticação (quem entrou), logs de acesso a ficheiros (quem abriu o quê), logs de rede (que comunicações houve), logs de aplicações (que erros ou ações ocorreram). Cruzar logs de diferentes fontes permite reconstruir a cronologia completa de um incidente.",
          importance: "Logs são frequentemente as provas mais acessíveis e valiosas. Mesmo que o disco tenha sido formatado, logs centralizados podem contar toda a história do ataque.",
          realExample: "Num ataque de ransomware, os logs de autenticação mostraram que o atacante entrou às 2h de sábado usando credenciais VPN roubadas, acedeu a 5 servidores em 3 horas e começou a encriptar ficheiros às 5h. Esta cronologia, construída a partir de logs, foi essencial para compreender o ataque e prevenir futuros.",
          practicalTask: "Verifica o teu histórico de login: no Gmail, vai ao fundo da caixa de entrada e clica em 'Detalhes'. No Facebook, vai a Definições > Segurança > Onde tens sessão iniciada. Estes são logs de autenticação simplificados. Algum acesso parece estranho? Um investigador forense faria exatamente esta análise, mas em escala muito maior.",
          bestPractices: [
            "Centraliza logs de todos os sistemas — não dependas de logs locais.",
            "Protege os logs contra alteração (imutabilidade).",
            "Define políticas de retenção — guarda logs por tempo suficiente para investigação.",
            "Sincroniza os relógios de todos os sistemas (NTP) para cronologia precisa.",
          ],
        },
        {
          title: "Preservação de Provas (Evidence Handling)",
          icon: ShieldCheck,
          explanation: "Em forense digital, as provas devem ser recolhidas e preservadas de forma que mantenham a sua validade legal. Isto significa: não alterar os dados originais (trabalhar com cópias), documentar cada passo (chain of custody — cadeia de custódia), usar ferramentas certificadas e calcular hashes para provar que os dados não foram modificados. É o equivalente digital de não contaminar uma cena de crime.",
          importance: "Se as provas não forem preservadas corretamente, podem ser inadmissíveis em tribunal. Um investigador que altera acidentalmente um ficheiro pode invalidar todo o caso.",
          realExample: "Num processo judicial por roubo de propriedade intelectual, a defesa argumentou que as provas digitais tinham sido alteradas porque a equipa forense não calculou hashes dos ficheiros originais antes da análise. O caso foi prejudicado pela má preservação de provas.",
          practicalTask: "Conceito de hash para verificação de integridade: se descarregares um ficheiro importante (ex.: uma ISO de sistema operativo), muitos sites fornecem o hash SHA256 do ficheiro. Após descarregar, podes calcular o hash do teu ficheiro e comparar — se for igual, o ficheiro está intacto. No Windows: certutil -hashfile ficheiro SHA256. No Mac/Linux: sha256sum ficheiro.",
          bestPractices: [
            "Trabalha SEMPRE com cópias (imagens forenses), nunca com o original.",
            "Calcula e regista hashes MD5/SHA256 de todas as provas no momento da recolha.",
            "Mantém cadeia de custódia detalhada: quem teve acesso, quando, porquê.",
            "Usa ferramentas validadas e aceites pela comunidade forense.",
          ],
        },
        {
          title: "Relatório Forense",
          icon: FileBarChart,
          explanation: "O relatório forense documenta toda a investigação: metodologia usada, provas recolhidas, análise realizada, cronologia reconstruída, conclusões e recomendações. Deve ser compreensível por não-técnicos (advogados, gestão) e suficientemente detalhado para validação técnica. É o produto final de toda a investigação.",
          importance: "Um relatório bem estruturado transforma dados técnicos em narrativa compreensível que suporta decisões legais, operacionais e estratégicas.",
          realExample: "Num relatório forense após um ataque de ransomware, o investigador documentou: o ponto de entrada (email de phishing), a cronologia do ataque (4 dias até à detonação), os sistemas afetados (12 servidores, 200 estações de trabalho), o impacto (4 dias de paragem) e recomendações (implementar MFA, segmentar rede, backups offline). O relatório levou a um investimento de 500.000€ em segurança.",
          practicalTask: "Se alguma vez descobrires que uma conta tua foi comprometida, documenta tudo: quando descobriste, que sinais notaste, que ações tomaste e em que ordem. Esta documentação, mesmo informal, segue os princípios de um relatório forense e pode ser útil se precisares de contactar o suporte ou autoridades.",
          bestPractices: [
            "Estrutura o relatório com sumário executivo, metodologia, descobertas e recomendações.",
            "Inclui cronologia detalhada do incidente.",
            "Usa linguagem clara — o relatório pode ser lido por não-técnicos.",
            "Preserva todas as provas e documentação de suporte.",
          ],
        },
      ]}
    />
  );
}
