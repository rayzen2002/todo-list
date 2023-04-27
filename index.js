const express = require ('express')

const app = express();

app.get('/' , (req , res)=>{
    res.send('<h1>Kevin Spacey is Keyzer Soze !!</h1>');
})
app.listen(3000, ()=>{
    console.log(`Servidor iniciado!!`);
})

app.get('/json' , (req,res) =>{
    res.json({name : 'KevinSpacey' , isKeyzerSoze : true})
})