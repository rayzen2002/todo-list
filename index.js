const express = require ('express');
const checklistRouter = require('./src/routes/checklist.js');
const taskRouter = require('./src/routes/task.js');
const rootRouter = require('./src/routes/index.js');
require('./config/database.js');
const path = require ('path');
const methodOverride = require('method-override')


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(methodOverride('_method' , { methods : ['POST' , 'GET'] }));
app.use('/tasks' , taskRouter.simple);
app.use(express.static('public', { type: 'text/javascript' }));

app.use(express.static(path.join('__dirname' , 'public')));

app.set('views' , path.join(__dirname , 'src/views'));
app.set('view engine' , 'ejs');


app.use('/', rootRouter)
app.use('/checklists', checklistRouter)
app.use('/checklists', taskRouter.checklistDependent)



app.listen(3000, ()=>{
    console.log(`Servidor iniciado!!`);
})

