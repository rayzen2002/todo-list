const express = require ('express')
const checklistRouter = require('./src/routes/checklist.js')
require('./config/database.js')
const app = express();
app.use(express.json());

app.use('/checklists',checklistRouter)



app.listen(3000, ()=>{
    console.log(`Servidor iniciado!!`);
})

