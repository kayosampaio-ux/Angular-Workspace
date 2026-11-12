# Sistema de Cadastro de Usuários

Aplicação web desenvolvida com **Angular** para praticar navegação entre páginas, componentes standalone e formulários com template forms. O projeto reúne uma página inicial e uma tela para cadastrar e consultar usuários, com uma interface escura, minimalista e responsiva.

> **Desenvolvido por Kayo Sampaio**

## Funcionalidades

- Navegação entre as páginas **Home** e **Usuários** usando Angular Router.
- Redirecionamento automático da rota inicial para `/home`.
- Formulário de cadastro com nome e e-mail, validação dos campos e envio com `ngSubmit`.
- Exibição dos usuários cadastrados na sessão atual.
- Interface adaptável para telas menores, com tema escuro, detalhes luminosos e animações sutis.
- Respeito à preferência do sistema por movimento reduzido.

Os cadastros ficam apenas na memória do navegador: ao atualizar ou fechar a página, a lista é reiniciada. O projeto ainda não utiliza banco de dados nem armazenamento permanente.

## Tecnologias

- Angular 19
- TypeScript
- Angular Router
- Angular Forms (`FormsModule`)
- CSS

## Como executar

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

3. Abra [http://localhost:4200](http://localhost:4200) no navegador.

O servidor atualiza a aplicação automaticamente quando os arquivos são alterados.

## Rotas

| Caminho | Página |
| --- | --- |
| `/home` | Página inicial |
| `/usuarios` | Formulário e lista de usuários |
| `/` | Redireciona para `/home` |

## Estrutura principal

```text
src/app/
├── app.ts                 # Componente raiz
├── app.html               # Header e outlet das rotas
├── app.routes.ts          # Configuração de navegação
├── components/
│   ├── header/            # Cabeçalho e links de navegação
│   └── footer/            # Componente de rodapé
├── pages/                 # Página inicial
└── usuarios/              # Formulário e listagem de usuários
```

## Build

Para gerar a versão de produção:

```bash
npm run build
```

Os arquivos gerados ficam em `dist/`.

---

Feito por **Kayo Sampaio**.