No node, toda porta de entrada e saída é automaticamente uma stream.

 - STDIN ==> Retorna uma stream conecatda ao STDIN, ou seja, tudo que o usuário digita no terminal. Uma stream Writable.
 `
  process.stdin // stream de leitura
    .pipe(process.sdtout) // stream de escrita
 `

### Uma stram de leitura tem como proposito ENVIAR DADOS, FORNECER INFORMACOES

 Dentros de streams nunca vao consequiser ler dados em formatos primitivos: numeros. Normalmente a leitura é feita através dos buffers.