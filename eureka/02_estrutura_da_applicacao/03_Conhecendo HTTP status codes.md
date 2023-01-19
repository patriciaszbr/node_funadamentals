### HTTP STATUS CODE: 100, 200, 300, 400, 500

 - Informational responses (100 – 199)
    Trazem informações ao front

 - Successful responses (200 – 299)
    todas req, devolvem "ok" a menos que altere o status


 - Redirection messages (300 – 399)
    - 301 ou 302
    Quando o front faz a requisição para uma rota INEXISTENTE. Ele redireciona para a rota atual.

 - Client error responses (400 – 499)
    400 
    São erros originados por causa da requisição feita para back-end.
    Ex: Front envia um formulario sem e-mail do usuario. O back tem que   retornar o erro informando a ausencia do preenchimento.
    

 - Server error responses (500 – 599)
    500 internal server error.
    502 bad gateway

    São basicamente erros inesperados. Alguma falha no back, no banco de dados etc.


