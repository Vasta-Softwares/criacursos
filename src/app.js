const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const app = express();
const port = 3000

//conectando o mongoose a base de dados
const DB_USER = 'criacursos';
const DB_PASSWORD = 'criacursos123';
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@criacursos.9yjy8ci.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    console.log('conectamos ao MONGODB')
    //lendo a porta 3000
    app.listen(3000);
})
.catch((err) => 
    console.log(err)
)

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//lendo o JSON
app.use(
    express.urlencoded({
        extended: true
    })
);


//rotas

app.get('/', (req, res) => {
    res.json({message: 'eita mano deu certo'});
})