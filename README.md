# GS-MatchingWork

Projeto para o gerenciamento e matching de usuários, habilidades, projetos e cursos, promovendo integração eficiente entre organizações, estudantes e profissionais.

---

## Título e Descrição

**GS-MatchingWork**  
Sistema web para cadastro e gestão de projetos, pessoas, habilidades e cursos. Permite encontrar candidatos ideais para projetos, registrar cursos, além de um painel administrativo moderno e responsivo.

---

## Status do Projeto

Em desenvolvimento  

Necessário implementar o sistema inteligente para atribuir os projetos aos usuários

---

## Sumário

- [Título e Descrição](#título-e-descrição)
- [Status do Projeto](#status-do-projeto)
- [Sumário](#sumário)
- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Endpoints ou Rotas Principais](#endpoints-ou-rotas-principais)
- [Autores e Créditos](#autores-e-créditos)
- [Screenshots / Demonstração](#screenshots--demonstração)
- [Contato](#contato)
- [Links](#links)

---

## Sobre o Projeto

Projeto acadêmico e tecnológico com foco no gerenciamento de projetos e promoção do desenvolvimento de habilidades. Usuários podem se inscrever em projetos, cadastrar cursos e monitorar progresso de forma intuitiva. Ideal para empresas, universidades, comunidades e profissionais.

---

## Tecnologias Utilizadas

- [React] + [TypeScript]
- [Java 17+] + [Quarkus]
- [Tailwind CSS]
- [Vite]
- [OracleSQL]

---

## Instalação

### Requisitos

- Node.js 18+, npm ou yarn
- Java 17+ (para o backend)
- Banco de dados configurado (.env)

### Passos

Clone o repositório:

git clone https://github.com/Japitu/GS-MatchingWork.git
cd GS-MatchingWork


Instale as dependências do frontend:

cd frontend
npm install

Instale as dependências do backend:

cd ../backend
./mvnw install

npm run dev # frontend
./mvnw quarkus:dev # backend

---

## Como Usar

1. Cadastre-se e faça login na plataforma.

Para Contas Corporativas é possível:

2. Cadastrar projetos e cursos via painel.
3. Edite, exclua e visualize registros dos projetos.
4. Consulte relatórios e detalhes dos projetos e cursos.

habilidades, , usuários

Para Contas de Usuários é possível:

2. Cadastrar Competencias e Habilidade.
3. Visualizar Projetos e Cursos.
4. Realizar inscrição nos projetos visualizados


---

## Estrutura de Pastas

GS-MatchingWork/

src: contendo todas os componentes e páginas do sistema separado por:

Assets: Com figuras e Icones utilizado no projeto
Components: contendo Cabeçalho e Layout basicos
Contexts: Contendo os temas para troca de cor
Pages: Com todas as páginas do sistema

Arquivo .env contendo dominio da API

---

## Endpoints ou Rotas Principais

GET /api/projeto - Lista projetos
GET /api/projeto/{id} - Busca projeto por id
POST /api/projeto - Cria novo projeto
PUT /api/projeto/{id} - Edita projeto
DELETE /api/projeto/{id} - Remove projeto

GET /api/curso - Lista cursos
GET /api/curso/{id} - Busca curso por id
POST /api/curso - Cria curso
PUT /api/curso/{id} - Edita curso
DELETE /api/curso/{id} - Remove curso

GET /api/habilidade - Lista habilidades
GET /api/habilidade/{id} - Busca habilidade por id
POST /api/habilidade - Cria habilidade
PUT /api/habilidade/{id} - Edita habilidade
DELETE /api/habilidade/{id} - Remove habilidade

GET /api/usuario - Lista usuarios
GET /api/usuario/{id} - Busca usuario por id
POST /api/usuario - Cria usuario
PUT /api/usuario/{id} - Edita usuario
DELETE /api/usuario/{id} - Remove usuario

GET /api/combinacao - Lista combinações
GET /api/combinacao/{id} - Busca combinação por id
POST /api/combinacao - Cria combinação
PUT /api/combinacao/{id} - Edita combinação
DELETE /api/combinacao/{id} - Remove combinação

GET /api/usuario-habilidade - Lista usuario-habilidade
GET /api/usuario-habilidade/{id} - Busca usuario-habilidade por id
GET /api/usuario-habilidade/habilidade/{id} - Busca usuario-habilidade por id da habilidade
POST /api/usuario-habilidade - Cria usuario-habilidade
PUT /api/usuario-habilidade/{id} - Edita usuario-habilidade
DELETE /api/usuario-habilidade/{id} - Remove usuario-habilidade

GET /api/projeto-habilidade - Lista projeto-habilidade
GET /api/projeto-habilidade/{id} - Busca projeto-habilidade por id
GET /api/projeto-habilidade/habilidade/{id} - Busca projeto-habilidade por id da habilidade
POST /api/projeto-habilidade - Cria projeto-habilidade
PUT /api/projeto-habilidade/{id} - Edita projeto-habilidade
DELETE /api/projeto-habilidade/{id} - Remove projeto-habilidade


---

## Autores e Créditos

- [Felipe Ishii](https://github.com/Japitu)
- [Nickolas Souza](https://github.com/Nickolas0506)
- [Vitória Rodrigues](https://github.com/Vitoria146)

- [Vinícius Marcili](https://github.com/vinimarcili)
- [Gilberto Neves](https://github.com/Nickolas0506)

---

## Contato

- LinkedIn: 
- [Felipe Ishii](https://www.linkedin.com/in/felipe-ishii)
- [Nickolas Souza](https://www.linkedin.com/in/nickolas-davi-17824b355)
- [Vitória Rodrigues](https://www.linkedin.com/in/vitoria-rodrigues-martins/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)

---

## Links

- **GITHUB:** https://github.com/Japitu/GS-MatchingWork
- **Vídeo do YOUTUBE:** [Link para vídeo da Apresentação](https://www.youtube.com/watch?v=0hmaRIP2xMg)

---
