## Requisições HTTP são compostas de 2 principais recuros:

- HTTP
- URL

## Dentro de HTTP existem alguns metodos, os mais comuns são: GET, POST, PUT, PATCH, DELETE.

- GET

  Buscar um recurso do back-end.

- POST

  Criar um recurso no back-end.


- PUT

  Atualizar um recurso no back-end.


- PATCH

  Atualizar informação específica de um recurso no back.
  

- EDELETE

  Deletar um recurso do back.

### INSTALLATIONS
1 - No package.json, adicionar o script para que possa utilizar o import ao inves do required.
`  "type": "module",`

2 - No package.json, adcionar o script para monitorar alterações no servidor de modo automatico.
` "dev": "node --watch src/server.js"`