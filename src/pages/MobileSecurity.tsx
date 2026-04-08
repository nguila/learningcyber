import BlockPage from "@/components/BlockPage";
import { Smartphone, AppWindow, Fingerprint, Wifi, ShieldAlert } from "lucide-react";

export default function MobileSecurity() {
  return (
    <BlockPage
      title="Mobile Security"
      subtitle="Proteger smartphones e aplicações móveis"
      icon={Smartphone}
      description="Mobile Security abrange a proteção de dispositivos móveis (smartphones, tablets) e das aplicações que neles correm. Com a maioria das pessoas a usar o telemóvel para tudo — banca, email, redes sociais — a segurança móvel tornou-se crítica."
      audience="Utilizadores de smartphones, programadores de apps móveis, gestores de TI e qualquer pessoa que queira proteger melhor o seu dispositivo móvel."
      connections="Liga-se a Web & API Security (APIs móveis), Foundations (redes), GRC (políticas BYOD) e Privacy Engineering (dados pessoais em apps)."
      subtopics={[
        { title: "Segurança de Apps (OWASP Mobile Top 10)", icon: AppWindow, explanation: "O OWASP Mobile Top 10 lista as vulnerabilidades mais comuns em aplicações móveis: armazenamento inseguro de dados, comunicações sem encriptação, autenticação fraca e código inseguro. Muitas apps guardam dados sensíveis (tokens, passwords) em locais acessíveis no dispositivo.", importance: "Usamos apps para quase tudo. Uma app com falhas pode expor dados bancários, mensagens privadas ou localização.", realExample: "Em 2022, investigadores descobriram que várias apps populares de fitness guardavam tokens de sessão em texto simples no dispositivo, permitindo a qualquer app maliciosa roubar a sessão do utilizador.", practicalTask: "Revê as permissões das apps no teu telemóvel: vai a Definições > Privacidade > Permissões. Quantas apps têm acesso à câmara, microfone ou localização? Remove permissões desnecessárias.", bestPractices: ["Descarrega apps apenas de lojas oficiais (App Store, Google Play).", "Revê permissões regularmente e remove as desnecessárias.", "Mantém apps e sistema operativo atualizados.", "Usa autenticação biométrica quando disponível."] },
        { title: "Autenticação Biométrica", icon: Fingerprint, explanation: "Impressão digital, reconhecimento facial e outros dados biométricos são usados para autenticação em dispositivos móveis. São mais convenientes que passwords, mas trazem desafios: dados biométricos não podem ser 'mudados' como uma password. Se forem comprometidos, o problema é permanente.", importance: "A biometria adiciona conveniência mas deve ser complementada com outros fatores. Um rosto ou impressão digital copiados comprometem o acesso permanentemente.", realExample: "Investigadores demonstraram que impressões digitais podem ser replicadas a partir de fotos de alta resolução. Modelos 3D de rostos conseguiram enganar sistemas de reconhecimento facial básicos (sem deteção de profundidade).", practicalTask: "Verifica no teu telemóvel que métodos de autenticação tens ativos. Tens PIN/password como fallback? A biometria é conveniente, mas o PIN forte é a última linha de defesa se a biometria falhar.", bestPractices: ["Usa biometria como complemento, não substituto de passwords.", "Ativa sempre um PIN/password forte como fallback.", "Mantém o firmware do sensor biométrico atualizado.", "Em contextos de alto risco, usa MFA com biometria + outro fator."] },
        { title: "Redes Wi-Fi e VPN", icon: Wifi, explanation: "Ligar-se a redes Wi-Fi públicas (cafés, aeroportos, hotéis) é arriscado: atacantes podem criar redes falsas com nomes semelhantes ou interceptar tráfego não encriptado. VPN (Virtual Private Network) cria um 'túnel' encriptado entre o teu dispositivo e a internet, protegendo os teus dados mesmo em redes inseguras.", importance: "Em redes Wi-Fi públicas, sem VPN, qualquer pessoa na mesma rede pode potencialmente ver o teu tráfego, capturar cookies de sessão ou redirecionar-te para sites falsos.", realExample: "Num aeroporto, investigadores criaram uma rede Wi-Fi chamada 'Airport_Free_WiFi'. Em poucas horas, centenas de pessoas ligaram-se. Os investigadores puderam ver (mas não exploraram) tráfego não encriptado — incluindo logins em sites sem HTTPS.", practicalTask: "Verifica se o teu telemóvel se liga automaticamente a redes Wi-Fi conhecidas. Desativa a ligação automática a redes abertas. Se usas Wi-Fi público regularmente, considera uma VPN como ProtonVPN (gratuito) ou Mullvad.", bestPractices: ["Evita fazer operações sensíveis (banca, email) em Wi-Fi público sem VPN.", "Desativa a ligação automática a redes abertas.", "Usa VPN de fornecedores confiáveis — VPNs gratuitas duvidosas podem ser piores que nenhuma.", "Prefere dados móveis a Wi-Fi público para operações sensíveis."] },
        { title: "MDM e Políticas BYOD", icon: ShieldAlert, explanation: "MDM (Mobile Device Management) é a tecnologia que permite a organizações gerir e proteger dispositivos móveis dos funcionários. BYOD (Bring Your Own Device) é a política de permitir que funcionários usem dispositivos pessoais para trabalho. Ambos criam desafios: como proteger dados empresariais sem invadir a privacidade pessoal?", importance: "Com trabalho remoto e BYOD, o perímetro de segurança das empresas estende-se aos dispositivos pessoais dos funcionários — que podem ser perdidos, roubados ou comprometidos.", realExample: "Um funcionário perdeu o telemóvel pessoal que usava para aceder ao email corporativo. Sem MDM, a empresa não conseguiu limpar remotamente os dados empresariais do dispositivo. Com MDM, um wipe remoto teria resolvido o problema em minutos.", practicalTask: "Se usas o teu telemóvel para trabalho: ativa a encriptação do dispositivo, configura bloqueio automático de ecrã (30 segundos) e ativa a funcionalidade de localização/wipe remoto (Find My iPhone / Find My Device).", bestPractices: ["Ativa encriptação e bloqueio automático em todos os dispositivos.", "Configura wipe remoto para casos de perda ou roubo.", "Separa dados pessoais e profissionais quando possível.", "Define políticas claras de BYOD na organização."] },
      ]}
      tools={[
        { name: "MobSF", url: "https://mobsf.github.io/Mobile-Security-Framework-MobSF", desc: "Framework open-source de análise de segurança móvel" },
        { name: "Frida", url: "https://frida.re", desc: "Toolkit de instrumentação dinâmica para apps" },
        { name: "ProtonVPN", url: "https://protonvpn.com", desc: "VPN gratuita e segura baseada na Suíça" },
      ]}
      websites={[
        { name: "OWASP Mobile", url: "https://owasp.org/www-project-mobile-top-10", desc: "Top 10 riscos de segurança móvel" },
        { name: "Mobile Security Testing Guide", url: "https://mas.owasp.org", desc: "Guia OWASP de testes de segurança móvel" },
      ]}
      newsLinks={[
        { title: "Mobile Security Blog — Lookout", url: "https://www.lookout.com/blog", source: "Lookout" },
        { title: "Android Security Bulletins", url: "https://source.android.com/docs/security/bulletin", source: "Google" },
        { title: "Apple Security Updates", url: "https://support.apple.com/en-us/100100", source: "Apple" },
      ]}
      relatedAreas={[
        { title: "Web & API Security", url: "/web-api-security", desc: "APIs usadas por apps móveis" },
        { title: "Privacy Engineering", url: "/privacy-engineering", desc: "Privacidade em dispositivos móveis" },
        { title: "Foundations", url: "/foundations", desc: "Conceitos base de redes e segurança" },
      ]}
    />
  );
}
