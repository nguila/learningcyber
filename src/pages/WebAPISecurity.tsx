import BlockPage from "@/components/BlockPage";
import { Globe, List, ShieldAlert, KeyRound, Cookie, TextCursorInput } from "lucide-react";

export default function WebAPISecurity() {
  return (
    <BlockPage
      title="Web & API Security"
      subtitle="Proteger os sites e APIs que usamos todos os dias"
      icon={Globe}
      description="A web é a superfície de ataque mais exposta do mundo digital. Sites, aplicações web e APIs (interfaces que permitem a comunicação entre sistemas) são alvos constantes. Este bloco ensina-te a compreender as vulnerabilidades mais comuns e como te proteger como utilizador ou programador."
      audience="Programadores web, utilizadores conscientes, pequenos empresários com presença online e qualquer pessoa que use sites e aplicações web."
      connections="Baseia-se nos Foundations (HTTP, redes), integra-se com DevSecOps (segurança no desenvolvimento), usa Security Tools para testes e alimenta Pentesting e SOC."
      subtopics={[
        {
          title: "OWASP Top 10",
          icon: List,
          explanation: "O OWASP Top 10 é uma lista das 10 vulnerabilidades mais críticas em aplicações web, atualizada regularmente pela comunidade OWASP (Open Web Application Security Project). Inclui problemas como injeção de código (SQL Injection), falhas de autenticação, exposição de dados sensíveis e configurações inseguras. Pensa nisto como o 'top 10 dos erros mais comuns que os programadores cometem'.",
          importance: "Estas 10 categorias cobrem a maioria dos ataques web reais. Se uma aplicação estiver protegida contra o OWASP Top 10, já tem uma base sólida de segurança.",
          realExample: "SQL Injection (injeção de SQL) é historicamente a #1. Em 2019, um atacante usou SQL injection para aceder a dados de 100 milhões de clientes da Capital One. O atacante inseriu comandos SQL num campo de input do site, manipulando a base de dados diretamente.",
          practicalTask: "Quando estiveres num site, observa o URL e os formulários. Se vires parâmetros estranhos no URL (como ?id=1 OR 1=1), isso pode indicar tentativa de injeção. Verifica sempre se os sites onde inseris dados usam HTTPS e parecem legítimos.",
          bestPractices: [
            "Nunca confies em dados enviados pelo utilizador — valida sempre no servidor.",
            "Mantém dependências e frameworks atualizados.",
            "Usa headers de segurança HTTP (Content-Security-Policy, X-Frame-Options, etc.).",
            "Faz revisão de segurança regular das aplicações web.",
          ],
        },
        {
          title: "OWASP API Top 10",
          icon: ShieldAlert,
          explanation: "APIs (Application Programming Interfaces) são como 'portas de serviço' que permitem a aplicações comunicar entre si. A tua app de meteorologia usa uma API para obter dados; o teu banco usa APIs para processar transações. O OWASP API Top 10 lista as vulnerabilidades mais comuns específicas de APIs, como autenticação fraca, exposição excessiva de dados e falta de limitação de acessos.",
          importance: "As APIs são cada vez mais o alvo preferido dos atacantes porque muitas vezes são menos protegidas que os sites que servem. Uma API mal configurada pode expor dados que o site 'esconderia'.",
          realExample: "Em 2021, uma API mal configurada do LinkedIn permitiu a extração de dados de 700 milhões de utilizadores. A API devolvia mais informação do que a necessária (violação do princípio de 'exposição mínima de dados').",
          practicalTask: "Da próxima vez que instalares uma app no telemóvel, lê as permissões que pede. Se uma app de lanterna pede acesso aos teus contactos e localização, questiona porquê. Isso reflete o mesmo princípio: as APIs e apps só devem aceder ao estritamente necessário.",
          bestPractices: [
            "Implementa autenticação e autorização robustas em todas as APIs.",
            "Limita a quantidade de dados devolvidos (princípio do menor privilégio).",
            "Implementa rate limiting para prevenir abusos.",
          ],
        },
        {
          title: "Autenticação e Autorização",
          icon: KeyRound,
          explanation: "Autenticação é provar quem és (ex.: login com username e password). Autorização é o que tens permissão para fazer depois de autenticado (ex.: um funcionário pode ver os seus dados salariais, mas não os de todos). Confundir estes conceitos ou implementá-los mal é uma das causas mais comuns de falhas de segurança.",
          importance: "Se a autenticação falha, qualquer pessoa pode entrar. Se a autorização falha, um utilizador normal pode aceder a dados de administrador. Ambas devem ser sólidas.",
          realExample: "Em 2019, o Facebook descobriu que milhões de passwords estavam armazenadas em texto simples (sem hash) nos seus sistemas internos. Embora não tenham sido exploradas externamente, qualquer funcionário poderia tê-las lido.",
          practicalTask: "Verifica se as tuas contas mais importantes (email, banco, redes sociais) têm MFA (Multi-Factor Authentication) ativo. No Gmail, vai a myaccount.google.com > Segurança > Verificação em dois passos. Ativar MFA é uma das ações mais eficazes que podes tomar.",
          bestPractices: [
            "Usa passwords únicas e fortes para cada serviço (usa um gestor de passwords).",
            "Ativa MFA em todas as contas que o suportem.",
            "Nunca guardes passwords em texto simples — usa hashing seguro (bcrypt, argon2).",
            "Implementa bloqueio após tentativas falhadas de login.",
          ],
        },
        {
          title: "Gestão de Sessões",
          icon: Cookie,
          explanation: "Quando fazes login num site, o servidor cria uma 'sessão' — um bilhete temporário que diz 'este utilizador já se autenticou'. Esse bilhete é guardado num cookie no teu browser. Se alguém roubar esse cookie, pode 'ser tu' sem precisar da tua password. A gestão segura de sessões garante que estes bilhetes são difíceis de roubar e expiram rapidamente.",
          importance: "Session hijacking (roubo de sessão) é um ataque real e frequente. Um cookie de sessão roubado dá acesso total à conta — sem precisar de password.",
          realExample: "Em cafés e redes Wi-Fi públicas, um atacante pode usar ferramentas para intercetares cookies de sessão de outros utilizadores (se o site não usar HTTPS). Isto era tão fácil que uma extensão do Firefox chamada 'Firesheep' (2010) automatizava o processo, levando muitos sites a adotarem HTTPS obrigatório.",
          practicalTask: "Abre o teu browser, vai a Definições > Privacidade > Cookies e vê os cookies guardados. Nota quantos sites têm cookies ativos. Experimenta fazer logout de um serviço e ver se o cookie associado desaparece ou muda.",
          bestPractices: [
            "Usa sempre HTTPS — nunca transmitas cookies por HTTP.",
            "Configura cookies com flags Secure, HttpOnly e SameSite.",
            "Define expiração razoável para sessões.",
            "Faz logout quando terminas em computadores partilhados.",
          ],
        },
        {
          title: "Validação de Input",
          icon: TextCursorInput,
          explanation: "Validação de input é verificar e limpar todos os dados que um utilizador envia para o sistema. Quando escreves algo num formulário web, esse texto vai para o servidor. Se o servidor aceita tudo sem verificar, um atacante pode enviar código malicioso em vez de texto normal. É como um porteiro que verifica identificações — se deixar entrar qualquer pessoa sem verificar, o edifício fica em risco.",
          importance: "A falta de validação de input está na origem de muitas vulnerabilidades: SQL Injection, Cross-Site Scripting (XSS), Command Injection e muitas outras.",
          realExample: "XSS (Cross-Site Scripting): um atacante insere código JavaScript num campo de comentário de um fórum. Quando outros utilizadores visualizam o comentário, o código executa no browser deles, podendo roubar cookies de sessão ou redirecionar para sites maliciosos.",
          practicalTask: "Quando preencheres um formulário online, observa como o site reage se inserires caracteres especiais (<, >, \", '). Sites bem construídos rejeitam ou escapam estes caracteres. Se um site aceita HTML e o mostra tal e qual, pode ser vulnerável a XSS.",
          bestPractices: [
            "Valida TODOS os inputs — no lado do cliente E do servidor.",
            "Usa listas de permissão (allowlists) em vez de listas de bloqueio.",
            "Escapa caracteres especiais antes de usar inputs em queries ou HTML.",
            "Usa frameworks e bibliotecas que incluem proteção contra injeção por predefinição.",
          ],
        },
      ]}
      tools={[
        { name: "Burp Suite", url: "https://portswigger.net/burp", desc: "Ferramenta de referência para testes web" },
        { name: "OWASP ZAP", url: "https://www.zaproxy.org", desc: "Proxy de testes de segurança open-source" },
        { name: "Postman", url: "https://www.postman.com", desc: "Teste e documentação de APIs" },
        { name: "SQLMap", url: "https://sqlmap.org", desc: "Deteção automática de SQL Injection" },
      ]}
      websites={[
        { name: "OWASP", url: "https://owasp.org", desc: "Comunidade global de segurança de aplicações" },
        { name: "PortSwigger Web Academy", url: "https://portswigger.net/web-security", desc: "Laboratórios práticos de segurança web gratuitos" },
        { name: "OWASP Juice Shop", url: "https://owasp.org/www-project-juice-shop", desc: "Aplicação web vulnerável para treino" },
        { name: "HackTheBox", url: "https://www.hackthebox.com", desc: "Plataforma de treino com desafios web" },
      ]}
      relatedAreas={[
        { title: "DevSecOps", url: "/devsecops", desc: "Segurança no ciclo de desenvolvimento" },
        { title: "Pentesting", url: "/pentesting", desc: "Testes de segurança autorizados" },
        { title: "Mobile Security", url: "/mobile-security", desc: "Segurança em aplicações móveis" },
      ]}
      ethicsNote="As vulnerabilidades web descritas aqui são apresentadas para fins educativos e defensivos. Nunca testes vulnerabilidades em sites ou sistemas sem autorização expressa do proprietário. Testar sem permissão é ilegal e antiético."
    />
  );
}
