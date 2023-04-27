const express = require ('express')

const app = express();

app.use(express.json());

const log = (req,res,next)=>{
    console.log(req.body);
    console.log(`Data: ${Date.now()}`);
    next();
}

app.use(log);

app.get('/' , (req , res)=>{
    res.send('<h1>Kevin Spacey is Keyzer Soze !!</h1>');
})
app.listen(3000, ()=>{
    console.log(`Servidor iniciado!!`);
})

app.get('/json' , (req,res) =>{
    console.log(req.body);
    res.json({name : 'KevinSpacey' , isKeyzerSoze : true})
})