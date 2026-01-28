# 👥 Cadastro de Usuários

> Aplicação web moderna para gerenciar cadastro de usuários com React + Vite.

[![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-purple?logo=vite)](https://vitejs.dev)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

## 🎯 Funcionalidades

- ✅ **Cadastrar** novos usuários
- ✅ **Listar** todos os usuários com avatar
- ✅ **Deletar** usuários com confirmação
- ✅ **Validação** de formulário
- ✅ **Design Responsivo** (mobile, tablet, desktop)
- ✅ **Tratamento de Erros** completo

## 🚀 Tecnologias

| Tecnologia | Versão | Descrição |
|-----------|--------|----------|
| React | 19.2.0 | Library UI |
| Vite | 7.2.4 | Build tool rápido |
| Styled Components | 6.3.8 | CSS-in-JS |
| React Router | 7.13.0 | Roteamento SPA |
| Axios | 1.13.3 | Requisições HTTP |

## 📋 Requisitos

- **Node.js** 18.x ou superior
- **npm** 10.x ou **yarn** 4.x

## 🔧 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/devclub-cadastro-usuarios.git
cd devclub-cadastro-usuarios

# Instale as dependências
npm install
# ou
yarn install
```

## ⚙️ Configuração

Crie um arquivo `.env.local` na raiz do projeto:

```env
VITE_API_URL=http://localhost:3000
```

> **Nota:** O arquivo `.env.local` já está incluído no projeto para facilitar o setup inicial.

## 🏃 Execução

```bash
# Desenvolvimento (com Hot Module Replacement)
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview

# Lint (verificar qualidade do código)
npm run lint
```

## 📁 Estrutura do Projeto

```
src/
├── components/              # Componentes reutilizáveis
│   ├── Button/
│   │   ├── index.jsx
│   │   └── styles.js
│   └── TopBackground/
│       ├── index.jsx
│       └── styles.js
├── pages/                   # Páginas/Views da aplicação
│   ├── Home/               # Página de cadastro
│   │   ├── index.jsx
│   │   └── styles.js
│   └── ListUsers/          # Página de listagem
│       ├── index.jsx
│       └── styles.js
├── services/               # Serviços (API)
│   └── api.js             # Configuração Axios
├── styles/                 # Estilos globais
│   └── GlobalStyles.js     # Reset e fontes globais
├── assets/                 # Imagens e ícones
│   └── trash.svg
├── routes.jsx             # Definição de rotas
└── main.jsx               # Ponto de entrada
```

## 🎨 Paleta de Cores

| Cor | Hex |
|-----|-----|
| Background | `#181f36` |
| Card | `#252d48` |
| Texto Primário | `#ffffff` |
| Border | `#d2dae2` |

## 📡 API

A aplicação comunica com um backend em `http://localhost:3000`

### Endpoints

#### GET `/usuarios`
Retorna lista de todos os usuários

```json
[
  {
    "id": 1,
    "name": "João Silva",
    "email": "joao@example.com",
    "age": 28
  }
]
```

#### POST `/usuarios`
Cadastra um novo usuário

```json
{
  "name": "João Silva",
  "email": "joao@example.com",
  "age": 28
}
```

#### DELETE `/usuarios/:id`
Deleta um usuário pelo ID

## 🧪 Desenvolvimento

### Padrões de Código

- ✅ Componentes funcionais com Hooks
- ✅ Nomeação clara e descritiva
- ✅ Separação de responsabilidades
- ✅ Tratamento de erros com try/catch
- ✅ Validação de entrada

### Commits

Siga o padrão convencional:

```bash
git commit -m "feat: adiciona validação de email"
git commit -m "fix: corrige delete de usuário"
git commit -m "docs: atualiza README"
```

## 🐛 Troubleshooting

**Erro: "Failed to resolve import"**
- Verifique se o arquivo existe no caminho correto
- Verifique o case-sensitive do arquivo (ex: `TrashIcon` vs `trashicon`)

**Erro: "Cannot POST /usuarios"**
- Certifique-se que o backend está rodando em `http://localhost:3000`
- Verifique a variável `VITE_API_URL` no `.env.local`

**Erro: "CORS error"**
- Verifique se o backend permite CORS
- Adicione headers CORS no backend se necessário

## 📈 Próximos Passos

- [ ] Adicionar testes com Vitest + React Testing Library
- [ ] Implementar react-hook-form para validações avançadas
- [ ] Adicionar react-toastify para notificações
- [ ] Migrar para TypeScript
- [ ] Implementar loading states e skeletons
- [ ] Adicionar dark mode
- [ ] Deploy na Vercel/Netlify

## 📚 Recursos

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Styled Components](https://styled-components.com)
- [React Router](https://reactrouter.com)

## 📝 Licença

MIT License - veja [LICENSE](LICENSE) para mais detalhes

## 👨‍💻 Autor

**Gabriel Mende**  
📧 Email: seu-email@example.com  
🔗 LinkedIn: [seu-perfil](https://linkedin.com/in/seu-usuario)  
🐙 GitHub: [@seu-usuario](https://github.com/seu-usuario)

---

<div align="center">
  Feito com ❤️ para DevClub
</div>
