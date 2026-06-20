# 🚀 HYPER PROMPT — Landing Page VINI Corp Solutions
> Prompt Master para Google Antigravity (Claude Sonnet 4.6)
> Stack: HTML + CSS + JS puro | Deploy: Vercel

---

## INSTRUÇÕES PARA O ANTIGRAVITY

Você é um desenvolvedor frontend sênior e designer UI/UX especialista em landing pages de alta conversão. Sua missão é criar uma landing page completa, profissional e moderna em um único arquivo `index.html` (com CSS e JS embutidos) para o cliente **VINI Corp Solutions**.

---

## SOBRE O CLIENTE

**Nome:** VINI Corp Solutions  
**Segmento:** Montagem de Móveis Corporativos e Residenciais  
**Público-alvo:** Empresas (escritórios, clínicas, coworkings, escolas, instituições, condomínios) e residências que precisam montar ou reorganizar mobiliário com qualidade e profissionalismo.  
**Objetivo do site:** Divulgar o trabalho, gerar leads, tirar dúvidas dos visitantes e direcionar para agendamento via WhatsApp e e-mail.

---

## IDENTIDADE VISUAL

### Paleta de Cores (obrigatória)
- **Primária:** Azul corporativo profundo `#1A2E4A` — transmite confiança, solidez
- **Acento:** Amarelo âmbar `#F5A623` — energia, precisão, ferramentas
- **Neutro escuro:** `#0D1B2A`
- **Neutro claro:** `#F4F6F9`
- **Branco puro:** `#FFFFFF`
- **Texto secundário:** `#6B7A8D`

### Tipografia (via Google Fonts — importar no `<head>`)
- **Display/Títulos:** `Syne` (peso 700/800) — moderno, marcante
- **Corpo/Texto:** `Inter` (peso 400/500/600) — leitura perfeita, profissional
- **Acento/Badge:** `Syne Mono` para números e destaques técnicos

### Tom e Personalidade Visual
- Sério, profissional e confiável — mas acessível e humano
- Ícones SVG inline (sem dependências externas)
- Cards com sombra suave, bordas arredondadas (8-12px)
- Efeito hover nos botões e cards (transições suaves 0.3s)
- Seções com fundo alternado (branco / azul corporativo / cinza claro)

---

## ESTRUTURA COMPLETA DA PÁGINA

### 1. `<head>`
- Meta charset UTF-8
- Meta viewport responsive
- Meta description SEO: "VINI Corp Solutions — Especialistas em montagem de móveis corporativos e residenciais. Atendemos empresas, escritórios, clínicas e residências. Solicite um orçamento via WhatsApp."
- Meta OG (Open Graph) para compartilhamento social
- Title: "VINI Corp Solutions | Montagem de Móveis Corporativos e Residenciais"
- Importação Google Fonts (Syne + Inter + Syne Mono)
- Favicon emoji: 🔧
- CSS embutido completo na tag `<style>`

---

### 2. HEADER / NAVBAR (fixo no topo, com scroll behavior)
- Logo: ícone SVG de ferramenta/chave + "VINI Corp Solutions" em Syne Bold
- Links de navegação suave: Início | Serviços | Diferenciais | Atendemos | Contato
- Botão CTA "Solicitar Orçamento" (amarelo âmbar, abre link WhatsApp)
- Em mobile: menu hambúrguer funcional (JS puro)
- Comportamento: navbar transparente no topo, fundo azul escuro com sombra ao scrollar

---

### 3. HERO SECTION (acima da dobra)
- Fundo: gradiente diagonal do azul `#1A2E4A` para `#0D1B2A`
- Elemento visual de destaque: grid sutil de linhas técnicas no background (CSS puro, sem imagem)
- **Headline principal (grande, Syne 800):**  
  "Transformamos Ambientes com Qualidade, Precisão e Profissionalismo."
- **Subtítulo (Inter 400, cinza claro):**  
  "Especialistas em montagem de móveis corporativos e residenciais — do escritório à sua casa."
- **Dois botões CTA lado a lado:**
  1. 🟡 "Solicitar Orçamento no WhatsApp" → link `https://wa.me/SEUNUMERO?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento.`
  2. ⬜ "Agendar por E-mail" (borda branca, fundo transparente) → `mailto:seuemail@email.com?subject=Solicitação%20de%20Orçamento%20-%20VINI%20Corp%20Solutions`
- **Badges de confiança abaixo dos botões (3 inline):**
  - ✅ +500 montagens realizadas
  - ✅ Atendimento para empresas e residências
  - ✅ Orçamento sem compromisso
- Animação: fade-in suave ao carregar (CSS keyframes)

---

### 4. SEÇÃO "NOSSOS SERVIÇOS" (fundo branco)
- Título da seção: "O Que Fazemos"
- Subtítulo: "Soluções completas de montagem para ambientes corporativos e residenciais"
- **Dois cards grandes lado a lado (grid responsivo):**

**Card 1 — Móveis Corporativos** (ícone: 🏢 SVG escritório)
- Borda superior: linha amarela âmbar (acento)
- Lista de serviços com ícone ✔ amarelo:
  - Estações de Trabalho
  - Mesas em L
  - Mesas Corporativas
  - Mesas de Reunião
  - Cadeiras de Escritório
  - Armários Corporativos
  - Gaveteiros
  - Arquivos e Estantes
  - Mobiliário para escritórios em geral

**Card 2 — Móveis Residenciais** (ícone: 🏠 SVG casa)
- Borda superior: linha amarela âmbar
- Lista de serviços com ícone ✔ amarelo:
  - Guarda-roupas
  - Painéis para TV
  - Racks
  - Estantes
  - Escrivaninhas
  - Mesas
  - Cômodas
  - Armários diversos

- Abaixo dos cards: botão CTA centralizado "Ver todos os serviços — Fale pelo WhatsApp"

---

### 5. SEÇÃO "POR QUE ESCOLHER A VINI CORP?" (fundo azul escuro `#1A2E4A`, texto claro)
- Título: "Por Que Escolher a VINI Corp Solutions?"
- Grid de 3 colunas (em mobile: 1 coluna) com **6 cards de diferenciais:**
  1. 🎯 **Atendimento Personalizado** — Cada projeto tratado de forma única, do início ao fim.
  2. ⏰ **Pontualidade e Compromisso** — Respeitamos seu tempo e seus prazos.
  3. 🔒 **Montagem Segura e Organizada** — Processo limpo, sem danos ao seu ambiente.
  4. 👷 **Profissionais Experientes** — Anos de experiência em montagem corporativa e residencial.
  5. ✨ **Excelente Acabamento** — Atenção total aos detalhes para um resultado impecável.
  6. ⚡ **Agilidade na Execução** — Serviço rápido sem abrir mão da qualidade.
- Cada card: fundo levemente mais claro (`rgba(255,255,255,0.07)`), ícone SVG grande, título e descrição
- Hover: elevação suave com sombra amarela sutil

---

### 6. SEÇÃO "QUEM ATENDEMOS" (fundo cinza claro `#F4F6F9`)
- Título: "Atendemos Você, Onde Você Estiver"
- Subtítulo: "Da empresa ao lar, temos a solução ideal de montagem"
- Grid de ícones (8 itens, 4 colunas desktop / 2 mobile):
  - 🏢 Escritórios
  - 🏭 Empresas
  - 💻 Coworkings
  - 🏥 Clínicas
  - 🎓 Escolas
  - 🏛️ Instituições
  - 🏗️ Condomínios
  - 🏠 Residências
- Cada item: ícone SVG grande (azul corporativo), label abaixo
- Efeito hover: fundo branco com sombra e ícone âmbar

---

### 7. SEÇÃO "NOSSO COMPROMISSO" (fundo branco, layout destaque)
- Layout dividido: texto à esquerda + elemento visual à direita
- **Lado esquerdo:**
  - Eyebrow label: "COMPROMISSO"
  - Título: "Cada Detalhe Importa"
  - Texto: "Cada montagem é realizada com atenção aos detalhes, seguindo padrões de qualidade que garantem segurança, durabilidade e satisfação total. Nosso objetivo é que você utilize seu ambiente com conforto e tranquilidade desde o primeiro dia."
  - CTA: "Solicite seu Orçamento Agora →"
- **Lado direito:**
  - Card estilizado com 3 métricas animadas via JS (counter-up ao entrar na viewport):
    - `500+` Montagens Realizadas
    - `100%` Satisfação Garantida
    - `0` Reclamações de Segurança

---

### 8. SEÇÃO "SOLICITE UM ORÇAMENTO" / CTA FINAL (fundo gradiente amarelo para âmbar)
- Título (azul escuro, Syne 800): "Pronto para Transformar Seu Ambiente?"
- Subtítulo: "Entre em contato agora. Atendimento rápido, sem compromisso e com toda a excelência VINI Corp."
- **Dois botões grandes:**
  1. 🟢 "Chamar no WhatsApp" (fundo verde WhatsApp `#25D366`, ícone SVG do WhatsApp)  
     → `https://wa.me/SEUNUMERO?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento.`
  2. 📧 "Enviar E-mail" (fundo azul escuro)  
     → `mailto:seuemail@email.com?subject=Solicitação%20de%20Orçamento%20-%20VINI%20Corp%20Solutions&body=Olá%20VINI%20Corp!%20Gostaria%20de%20solicitar%20um%20orçamento.`
- Abaixo: texto pequeno cinza "Respondemos em até 1 hora útil"

---

### 9. FAQ — PERGUNTAS FREQUENTES (fundo branco)
- Título: "Dúvidas Frequentes"
- Accordions funcionais em JS puro (sem biblioteca), animação de abertura suave:
  1. **Vocês atendem fora de [cidade]?** → "Sim! Atendemos empresas e residências na região. Entre em contato para verificar disponibilidade na sua localidade."
  2. **Como funciona o orçamento?** → "O orçamento é gratuito e sem compromisso. Basta entrar em contato pelo WhatsApp ou e-mail com a lista dos móveis que precisa montar."
  3. **Quanto tempo leva a montagem?** → "O tempo varia de acordo com a quantidade e complexidade dos móveis. Informamos o prazo estimado no momento do orçamento."
  4. **Vocês trazem ferramentas?** → "Sim! Nossa equipe chega equipada com todas as ferramentas necessárias para uma montagem segura e organizada."
  5. **Atendem empresas com grandes volumes?** → "Com certeza! Somos especializados em projetos corporativos de qualquer porte. Fale conosco para um atendimento personalizado."
  6. **O serviço tem garantia?** → "Sim. Garantimos a qualidade da nossa montagem. Em caso de qualquer ajuste necessário após o serviço, retornamos sem custo adicional."

---

### 10. FOOTER (fundo `#0D1B2A`, texto claro)
- Logo + slogan: "Transformamos ambientes com qualidade, precisão e profissionalismo."
- **3 colunas:**
  - **Coluna 1:** Navegação rápida (links para as seções)
  - **Coluna 2:** Serviços (Corporativos | Residenciais)
  - **Coluna 3:** Contato
    - 📱 WhatsApp: link clicável
    - 📧 E-mail: link clicável
    - (Placeholder para cidade/região se quiser adicionar)
- Linha separadora
- Copyright: "© 2025 VINI Corp Solutions. Todos os direitos reservados."

---

### 11. BOTÃO FLUTUANTE WHATSAPP (fixo, canto inferior direito)
- Ícone SVG do WhatsApp, fundo verde `#25D366`
- Tamanho: 60x60px, border-radius: 50%
- Sombra + animação de pulso suave (CSS keyframes)
- Tooltip ao hover: "Fale conosco agora!"
- Link: `https://wa.me/SEUNUMERO?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento.`
- Z-index alto para ficar sempre visível

---

## REQUISITOS TÉCNICOS OBRIGATÓRIOS

### Performance e SEO
- [ ] Um único arquivo `index.html` (CSS e JS inline/embutidos)
- [ ] Sem dependências externas além do Google Fonts
- [ ] Todas as imagens: usar SVG inline ou CSS puro (sem imagens externas)
- [ ] Smooth scroll nativo: `scroll-behavior: smooth` no CSS
- [ ] Meta tags completas (description, og:title, og:description, og:type)
- [ ] HTML semântico: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`
- [ ] Alt text em todos os elementos visuais (acessibilidade)

### Responsividade
- [ ] Mobile-first: totalmente responsivo em 320px, 375px, 768px, 1024px, 1280px+
- [ ] Menu hambúrguer funcional em mobile (JS puro)
- [ ] Grid com CSS Grid e Flexbox (sem frameworks como Bootstrap)
- [ ] Imagens e cards ajustam automaticamente (nunca overflow horizontal)

### JavaScript Puro (sem bibliotecas)
- [ ] Menu mobile hambúrguer toggle
- [ ] Scroll suave para seções ao clicar nos links do menu
- [ ] Navbar: adiciona classe `.scrolled` ao scrollar (muda visual)
- [ ] Counter-up animado na seção de métricas (IntersectionObserver)
- [ ] FAQ accordion: abre/fecha com animação de altura
- [ ] Ano dinâmico no copyright: `new Date().getFullYear()`

### UX/Conversão
- [ ] CTAs (WhatsApp e E-mail) presentes em pelo menos 4 pontos da página
- [ ] Botão flutuante WhatsApp sempre visível
- [ ] Microcopy motivador nos CTAs ("Rápido, gratuito e sem compromisso")
- [ ] Hover states em todos os elementos interativos
- [ ] Loading experience: transição fade-in da página ao carregar

---

## VARIÁVEIS QUE VOCÊ DEVE SUBSTITUIR

Antes de finalizar, pergunte ao usuário (ou substitua nos placeholders):
- `SEUNUMERO` → número WhatsApp com DDD e código do país (ex: `5511999999999`)
- `seuemail@email.com` → e-mail de contato do Vini
- Cidade/região de atendimento (para FAQ e rodapé)

---

## ENTREGÁVEL ESPERADO

Arquivos em **`HTML, CSS e JS`** completos e funcionais, prontos para ser arrastados para o painel da Vercel e publicados imediatamente. Os arquivos deve abrir perfeitamente no browser localmente (sem servidor), sem erros no console, e com todos os links de WhatsApp e e-mail funcionando.

**Após gerar o código:**
1. Abra o preview no Antigravity
2. Teste em viewport mobile (375px) e desktop (1280px)
3. Verifique se todos os links de CTA estão clicáveis
4. Confirme que o botão flutuante do WhatsApp aparece em todas as seções
5. Faça deploy na Vercel arrastando a pasta do projeto

---

*Hyper Prompt criado para Google Antigravity com Claude Sonnet 4.6 | Stack: HTML + CSS + JS | Deploy: Vercel*
