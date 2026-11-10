# Portfólio Pessoal — Deborah Goulart

Bem-vindo(a) ao repositório do meu portfólio pessoal! Desenvolvi esta aplicação para apresentar minha trajetória profissional, formação acadêmica, projetos e competências técnicas como Desenvolvedora Full Stack.

A interface foi projetada com foco em experiência visual moderna, minimalista e responsiva, contando com background procedural interativo em WebGL, alternância fluida entre tema claro e escuro, e suporte a múltiplos idiomas (Português e Inglês).

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** [Vue.js 3](https://vuejs.org/) (Composition API, `<script setup>`)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (tipagem estrita)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Background Interativo:** [@firecms/neat](https://github.com/FireCMSco/neat) (gradientes procedural WebGL responsivos ao movimento do mouse)
- **Ícones:** [Lucide Vue Next](https://lucide.dev/)
- **Hospedagem & Deploy:** [Vercel](https://vercel.com/)

---

## ✨ Funcionalidades

- **Background WebGL Interativo:** Efeito de onda e deformação física que responde à movimentação do cursor e do toque, com modo ambiente contínuo e tratamento de acessibilidade (`prefers-reduced-motion`).
- **Tema Claro & Escuro (Dark/Light Mode):** Alternância instantânea com transições suaves e persistência da preferência no `localStorage`.
- **Internacionalização (PT / EN):** Seletor de idioma integrado para alternar todo o conteúdo dinamicamente entre português e inglês.
- **Scroll Spy com Navegação Suave:** Indicação em tempo real da seção visualizada diretamente na barra de navegação.
- **Visualização de Projetos:** Alternância entre visualização detalhada em cards editoriais (*Project View*) e listagem tabular compacta (*Index View*), com filtros por categoria (Full Stack, Backend, Frontend).
- **Cópia Rápida de Contato:** Botão interativo para copiar e-mail diretamente para a área de transferência com feedback visual.

---

## 📁 Estrutura de Diretórios

```
src/
├── assets/          # Favicon e imagens estáticas
├── components/
│   ├── background/  # Componente do canvas WebGL interativo
│   ├── common/      # Componentes reutilizáveis (botões, alternador de tema, scroll to top)
│   ├── layout/      # Cabeçalho (Navbar) e rodapé (Footer)
│   └── sections/    # Seções da página (Hero, Sobre, Experiência, Formação, Stack, Projetos, Contato)
├── composables/     # Composables Vue (tema, scroll spy, idioma e conteúdo reativo)
├── data/            # Conteúdo e dados centralizados em PT e EN
├── types/           # Interfaces e tipos TypeScript
├── App.vue          # Componente raiz da aplicação
├── main.ts          # Ponto de entrada
└── style.css        # Configurações globais e diretivas do Tailwind CSS
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- `npm` ou seu gerenciador de pacotes preferido

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone git@github.com:debhgoulart/meu-portifolio.git
   cd meu-portifolio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse a aplicação no navegador em `http://localhost:5173`.

4. **Gerar build de produção:**
   ```bash
   npm run build
   ```

5. **Visualizar o build localmente:**
   ```bash
   npm run preview
   ```

---

## 📬 Contato

- **LinkedIn:** [linkedin.com/in/debhgoulart](https://www.linkedin.com/in/debhgoulart/)
- **GitHub:** [@debhgoulart](https://github.com/debhgoulart)
- **E-mail:** [debh.goulart@gmail.com](mailto:debh.goulart@gmail.com)
