import express from 'express';

import{ montadoras, veiculos } from './dados.js';

const app = express();

app.get('/', (req,res)=>{
    res.json({"status": "Server OK"});
})

app.get('veiculo', (req,res)=>{
    res.json(veiculos)
})

app.get('montadoras', (req,res)=>{
    res.json(montadoras)
})

const PORT = 3030
app.listen(PORT,()=>{
    console.log('Sistema inicializado:'  , 'Acesso: htttp://localhost/3030')
});

export default express();