
1 - Iniciando um projeto:
`npm init -y`

2 - Instalando o HTTPie:
`sudo pacman -S httpie`

3 - No package.json, adicionar o script para que possa utilizar o import ao inves do required.
`  "type": "module",`

4 - No package.json, adcionar o script para monitorar alterações no servidor de modo automatico.
` "dev": "node --watch src/server.js"`