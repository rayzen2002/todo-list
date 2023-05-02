const express = require ('express');
const checklistRouter = require('./src/routes/checklist.js');
const rootRouter = require('./src/routes/index.js');
require('./config/database.js');
const path = require ('path');


const app = express();
app.use(express.json());

app.set('views' , path.join(__dirname , 'src/views'));
app.set('view engine' , 'ejs');


app.use('/', rootRouter)
app.use('/checklists',checklistRouter)



app.listen(3000, ()=>{
    console.log(`Servidor iniciado!!`);
})

