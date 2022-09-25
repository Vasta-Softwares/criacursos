# :hammer: Rotas:

# :hammer: Admin:
- `admin/register`: Cria um admin - precisa do Username, email e password - retorna um array contendo os dados
- `admin/login`: Loga num admin - precisa do email e password - retorna um token que deve ser indexado no header com o nome "x-auth-token" contendo o valor do token

# :hammer: Cursos:
- `cursos/create`: Cria um curso -  é nescessario das seguintes informações no req.body {
"userId": "", `*string*`
"name": "", `*string*`
"desc": "" `*string de no maximo 500 caracteres*`
} - retorna um array com os dados do curso cadastrado
- `cursos/approve/:id`: Aprova um curso - :id quer dizer que o id do curso deve ser passado na url, ja no body deve conter {
    "isAproved: true"} para cursos aprovados - retorna uma mensagem de confirmação simples como "Curso Aprovado" em um json
- `cursos/disapprove/:id`: Reprova um curso - :id quer dizer que o id do curso deve ser passado na url, ja no body deve conter {
    "isAproved: false"} para cursos reprovados - retorna uma mensagem de confirmação simples como "Curso Reprovado" em um jsonn