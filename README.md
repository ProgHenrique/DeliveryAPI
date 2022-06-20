<h1 align="center">DeliveryAPI</h1>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

[<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">](https://nodejs.org/en/)
[<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">](https://www.typescriptlang.org/)
[<img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white">](https://www.prisma.io)
[<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white">](https://expressjs.com/pt-br/)
[<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white">](https://jwt.io)



## 💻 Projeto

Uma API de entrega de pedidos

## Rotas

### Authenticate

- `POST` /client/authenticate - recebe o `username` e `password` pelo corpo da requisição, e cria um token de autentição do usuário.
- `POST` /deliveryman/authenticate - recebe o `username` e `password` pelo corpo da requisição, e cria um token de autentição do entregador.

### Client 

- `POST` /client - recebe o `username` e `password` pelo corpo da requisição, cria um novo usuário e retornar o usuário criado

- `GET` /client/deliveries - exige um Bearer token do usuário e retornar todos os deliveries do usuário

### Deliveryman

- `POST` /deliveryman - recebe o `username` e `password` pelo corpo da requisição, cria um novo entregador e retornar o entregador criado

- `GET` /deliveryman - retorna todos os entregadores disponíveis

- `PATCH` /deliveryman - altera o status do entregador entre disponível e offline

- `POST` /deliveryman/deliveries - exige um Bearer token do entregador e retorna todos os deliveries finalizados por esse entregador

### Delivery

`POST` /delivery - recebe o item do usuario pelo corpo da requisição, o bearer token do usuário e cria o pedido do usuário e retorna esse pedido

`GET` /delivery/available - retorna todos os pedidos disponíveis para entrega (necessário está logado como deliveryman)

`PUT` /delivery/accept/:id - exige um Bearer token do entregador, recebe o id do pedido pelos parâmetros da requisição e atribui um pedido a um entregador

`PUT` /delivered - exige um Bearer token do entregador e finaliza uma entrega em aberto


## 🚀 Como executar

- Clone o repositório e acesse o diretório
- Rode `npm install` ou `yarn` para instalar as dependências
- Altere `.env.example` para `.env`
- entre em `.env` e ajuste as informações para o seu banco de dados `DATABASE_URL` acesse o [link](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-postgres) para mais informações de como fazer a conexão
- Rode `npm run dev` ou `yarn dev` para subir o server
- Use um REST CLIENT de sua preferência como: `Insomnia` ou `Postman` para fazer as requisiçoes
