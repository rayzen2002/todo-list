const express = require ('express');

const router = express.Router();

const Checklist = require('../model/checklist');

router.get('/' ,  async (req,res)=>{
    try {
        let checklist = await Checklist.find({});
       
        res.status(200).render('checklists/index' , { checklists : checklist})
    } catch (error) {
        console.log(error)
        res.status(200).render('pages/error' , { error : 'Erro ao exibir as listas' })
    }
})

router.get('/new' , async (req , res) =>{
    try {
        let checklist = new Checklist();
        res.status(200).render('checklists/new' ,  { checklist : checklist });
    } catch (error) {
        res.status(500).render('pages/error' , { errors : 'Erro ao carregar o formulario' })
    }
})

router.get('/:id/edit' , async (req , res) => {
    try {
        let checklist = await Checklist.findById(req.params.id).populate('tasks');
        res.status(200).render('checklists/edit' , { checklist : checklist })
    } catch (error) {
        res.status(500).render('pages/error' , { errors : 'Erro ao exibir a edicao de lista ' })
    }
})


router.post('/' , async (req,res)=>{
    let { name } = req.body.checklist;
    let checklist = new Checklist({ name })

    try {
        await checklist.save()
        res.redirect('/checklists');
    } catch (error) {
        res.status(422).render('checklists/new' , { checklists :{ ...checklist ,  error}  })
    }
})


router.get('/:id' , async (req,res)=>{
    try {
        let checklist = await Checklist.findById(req.params.id).populate('tasks')
      
        res.status(200).render('checklists/show' , { checklist : checklist })
    } catch (error) {
        res.status(200).render('pages/error' , { error : 'Erro ao exibir as listas de tarefas' })
    }
})

router.put('/:id' , async (req,res) =>{
    let { name } = req.body.checklist;
    let checklist =  await Checklist.findById(req.params.id);
    try { 
        await checklist.updateOne( { name } )
        res.redirect('/checklists')
    } catch (error) {
        let errors =  error.errors;
        res.status(422).render('checklists/edit' , { checklist : { ...checklist , errors }  })
        console.log(error)
        console.log(name)
        console.log(checklist)
    }
})

router.delete('/:id' , async (req,res) =>{
    try {
        let { name } = req.body
        let checklist = await Checklist.findByIdAndRemove(req.params.id , { $set: {name: name }} , {new : true})
        res.status(200).redirect('/checklists');
    } catch (error) {
        res.status(422).render('checklists/edit' , { error : 'erro ao deletar lista de tarefas'  })
        console.log(error)
    }
})
module.exports = router;