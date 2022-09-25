# :hammer: Rotas:

# :hammer: Admin:
- `admin/register`: precisa do Username, email e password - retorna um array contendo os dados
- `admin/login`: precisa do email e password - retorna um token que deve ser indexado no header com o nome "x-auth-token" contendo o valor do token

# :hammer: Cursos:
<<<<<<< Updated upstream
- `cursos/create`: descrição da funcionalidade 2a relacionada à funcionalidade 2
- `cursos/approve/:id`: :id quer dizer que o id do curso deve ser passado na url, ja no body deve conter {
=======
- `cursos/create`: Cria um curso -  é nescessario das seguintes informações no req.body {
"userId": "dados.Userid", `*string*`
"name": "dados.nome", `*string*`
"desc": "desc" `*string de no maximo 500 caracteres*`
} - retorna um array com os dados do curso cadastrado
- `cursos/approve/:id`: Aprova um curso - :id quer dizer que o id do curso deve ser passado na url, ja no body deve conter {
>>>>>>> Stashed changes
    "isAproved: true"} para cursos aprovados - retorna uma mensagem de confirmação simples como "Curso Aprovado" em um json
- `cursos/disapprove/:id`: :id quer dizer que o id do curso deve ser passado na url, ja no body deve conter {
    "isAproved: false"} para cursos reprovados - retorna uma mensagem de confirmação simples como "Curso Reprovado" em um jsonn