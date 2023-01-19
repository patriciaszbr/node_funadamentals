## Diferença de Stateful e Statless:

- Stateful ===> os dados sao armazenados localmente em memória. Exemplo: Dados armazenados em arrays vazios. Sem conexao com o banco.
  Nunca utilizado em produção.

- Statless ===> ???

## JSON - JavaScript Object Notation.

Estrutura de dados utilizado na transicao de dados de diferentes tipos do front para o back e do back para o front.

## Como o front vai saber que o back devolveu uma resposta no formato de JSON?

Através dos cabeçalhos.

## Cabeçalhos (requisição / respostas) => Metadados.

- Tanto da requisição quanto da resposta são metadados.

- Metadados sao quase informações para que o back e front saibam lhe dar com a requisição da melhor forma.

- Cabeçalhos nada mais são que informações adiconais que nao tem haver com o dado retornado do front para o back e sim como o dado PODE SER INTERPRETADO pelo front-end.

Exemplo de cabeçalhos padrões:

`.setHeader('Content-type', 'application/json')`

Baicamente o `Content-type` informa o tipo de dados que está sendo retornado, no caso, o `'application/json'`
