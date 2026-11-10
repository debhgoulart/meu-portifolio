# Portfólio Pessoal — Deborah Goulart

Portfólio moderno, minimalista e de alta fidelidade visual desenvolvido para **Deborah Goulart**, Desenvolvedora Full Stack com ênfase em arquitetura backend, ecossistema Java/Spring Boot e interfaces com Vue.js 3.

Inspirado em interfaces de produtos de tecnologia de ponta (Linear, Vercel, Google Antigravity), o projeto conta com um background orgânico renderizado em tempo real via **WebGL com a biblioteca NEAT (`@firecms/neat`)**, com resposta fluida à movimentação do mouse e adaptação dinâmica entre tema claro e escuro.

---

## 🚀 Tecnologias

- **Vue.js 3** (Composition API + `<script setup>`)
- **TypeScript** (tipagem estrita sem erros)
- **Vite 6** (build ultrarrápido)
- **Tailwind CSS v4** (estilização utilitária e minimalista)
- **@firecms/neat** (gradiente 3D procedural dinâmico em WebGL)
- **Lucide Vue Next** (ícones consistentes e elegantes)
- **@vueuse/core** (utilitários reativos)

---

## 🎨 Identidade Visual & Design

- **Estilo:** Minimalista, limpo e profissional com tipografia expressiva (*Plus Jakarta Sans*).
- **Paleta de Destaque:** Tons de roxo / lavanda / violeta.
  - **Modo Claro:** Fundo off-white (`#fbfaff`), superfícies delicadas e gradientes suaves em tons pastel de lavanda e lilás.
  - **Modo Escuro:** Fundo em grafite profundo com subtom violeta (`#090712`), contrastes nítidos e brilhos roxos intensos.
- **Background Interativo NEAT:**
  - Deformação orgânica e física fluida com interpolação suave (lerp) baseada na movimentação do mouse.
  - Animação ambiente contínua quando o ponteiro estiver parado ou em telas sensíveis ao toque (smartphones/tablets).
  - Respeita acessibilidade e `prefers-reduced-motion`.
  - Fallback visual em CSS para dispositivos sem suporte a WebGL.

---

## 📁 Estrutura do Projeto

```
src/
├── assets/                  # Favicon e vetores estáticos
├── components/
│   ├── background/
│   │   └── InteractiveGradient.vue   # Instância desacoplada do NEAT WebGL
│   ├── common/
│   │   ├── BackToTop.vue             # Botão flutuante para voltar ao topo
│   │   ├── SectionHeading.vue        # Cabeçalhos com tags em badge
│   │   └── ThemeToggle.vue           # Alternador Sol/Lua com persistência
│   ├── layout/
│   │   ├── Navbar.vue                # Barra de navegação com Glassmorphism
│   │   └── Footer.vue                # Rodapé com ano dinâmico e links
│   └── sections/
│       ├── HeroSection.vue           # Apresentação impactante e destaques
│       ├── AboutSection.vue          # Trajetória contada em 1ª pessoa
│       ├── ExperienceSection.vue     # Detalhamento corporativo do CREA-RJ
│       ├── EducationSection.vue      # Graduação UVA (CR 8,9), HackingU e Redbone
│       ├── SkillsSection.vue         # Habilidades técnicas categorizadas
│       ├── ProjectsSection.vue       # Projetos com filtros e cards modernos
│       └── ContactSection.vue        # Conexão, redes e cópia de e-mail em 1 clique
├── composables/
│   ├── useScrollSpy.ts               # Destaque dinâmico de seção ativa na navbar
│   └── useTheme.ts                   # Gestão reativa e persistência de tema
├── data/
│   └── portfolioData.ts              # Fonte única da verdade (dados centralizados)
├── types/
│   └── portfolio.ts                  # Interfaces e contratos TypeScript
├── App.vue                           # Orquestrador da Single Page
├── main.ts                           # Entrada da aplicação
└── style.css                         # Diretivas Tailwind e estilização global
```

---

## ⚙️ Como executar localmente

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Gerar build de produção e validar TypeScript:**
   ```bash
   npm run build
   ```

4. **Visualizar o build localmente:**
   ```bash
   npm run preview
   ```

---

## ✍️ Como atualizar seus dados e projetos

Toda a fonte de dados do portfólio está isolada em **`src/data/portfolioData.ts`**:
- Para adicionar novos projetos, basta incluir novos objetos no array `projects`.
- Para atualizar bio, links de redes sociais ou e-mail, edite o objeto `personalInfo`.
- Para atualizar novas experiências ou certificações, modifique os arrays correspondentes.

---

## 🌐 Publicação na Vercel

O projeto está 100% pronto para publicação estática gratuita na Vercel:
1. Conecte o repositório GitHub (`debhgoulart/meu-portifolio`) na Vercel.
2. O arquivo `vercel.json` configurado cuidará do roteamento e otimizações automaticamente.
3. Build command: `npm run build` | Output directory: `dist`.
