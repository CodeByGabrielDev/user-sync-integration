# Desafio Técnico — Integração de Usuários com Node.js

Aplicação desenvolvida em Node.js + TypeScript com foco em integração de dados, consumo de API REST, processamento de informações e persistência em banco de dados.

O projeto simula uma sincronização de usuários/RH, consumindo dados da API RandomUser, aplicando regras de negócio e persistindo os registros localmente.

---

# Objetivo

Desenvolver uma aplicação capaz de:

- Consumir uma API externa
- Processar os dados recebidos
- Persistir informações em banco de dados
- Atualizar registros existentes
- Gerar um relatório de processamento

---

# Tecnologias Utilizadas

- Node.js
- TypeScript
- Axios
- TypeORM
- SQLite
- ts-node-dev

---

# API Utilizada

RandomUser API:

```txt
https://randomuser.me/api/?results=150
```

A aplicação consome 150 usuários aleatórios para simular o processamento de colaboradores.

---

# Estrutura do Projeto

```txt
src
│
├── client
│   └── RandomUserClient.ts
│
├── config
│   ├── api.ts
│   └── database.ts
│
├── dto
│   └── Response
│
├── entity
│   └── UserEntity.ts
│
├── repository
│   └── UserRepository.ts
│
├── service
│   └── UserService.ts
│
└── app.ts
```

---

# Fluxo da Aplicação

```txt
RandomUser API
        ↓
RandomUserClient
        ↓
UserService
        ↓
Validação de regras de negócio
        ↓
Verificação de usuário existente
        ↓
INSERT ou UPDATE
        ↓
Persistência no banco
        ↓
Geração do relatório
```

---

# Regras de Negócio

## Persistência apenas de maiores de idade

A aplicação persiste somente usuários com idade maior ou igual a 18 anos.

Validação realizada utilizando o campo:

```txt
dob.age
```

## Email como chave única

O campo:

```txt
email
```

é utilizado como identificador único do usuário.

Caso o usuário já exista:
- os dados são atualizados

Caso não exista:
- um novo registro é inserido

---

# Persistência de Dados

A aplicação utiliza TypeORM para persistência utilizando SQLite.

A entidade `UserEntity` armazena informações como:

- Nome
- Sobrenome
- Email
- Idade
- Nacionalidade
- Telefones
- Localização
- Dados de login

---

# Relatório de Processamento

Ao final da execução, a aplicação gera um arquivo `report.md` contendo:

- Quantidade de registros processados
- Quantidade de usuários inseridos
- Quantidade de usuários atualizados
- Regras aplicadas durante o processamento

---

# Conceitos Aplicados

- Integração com APIs REST
- Async/Await
- DTO Pattern
- Repository Pattern
- Arquitetura em camadas
- Persistência relacional
- Manipulação de dados
- Regras de negócio
- Organização de código

---

# Como Executar

## Instalar dependências

```bash
npm install
```

## Executar aplicação

```bash
npm run dev
```

---

# Scripts Disponíveis

```bash
npm run dev
```

Executa a aplicação utilizando ts-node-dev.

---

# Autor

Gabriel Lima de Oliveira
