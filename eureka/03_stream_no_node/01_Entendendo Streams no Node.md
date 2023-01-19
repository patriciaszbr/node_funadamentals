// Importação de clientes via CSV (Excel) de 1GB

Sem o stream, o node percorre o arquivo todo para depois fazer a leitura. O que pode
demandar tempo dependendo da velocidade da internet.


Com Stream no node, é realizada a leitura de dados que vem da requisição aos poucos e processando
ENQUANTO o arquivo está sendo enviado/baixado.
Readable Streams / Writable Streams - > enviando ou lendo dados aos poucos.

