const express = require ('express');

const router = express.Router();

const Checklist = require('../model/checklist');

router.get('' , (req,res)=>{
    console.log(`Router do checklist!`)
    res.send()
})

router.post('/' , async (req,res)=>{
    let { name } = req.body;

    try {
        let checklist = await Checklist.create({"name" : name})
        res.status(200).send(checklist);
        console.log(checklist);
    } catch (error) {
        res.status(422).json(error)
        console.log(error)
    }
    
    
  
})

router.get('/:id' , (req,res)=>{
    console.log(req.params.id);
    res.send(`ID : ${req.params.id}`);
})

router.put('/:id' , (req,res) =>{
    console.log(req.params.id);
    res.send(`PUT ID : ${req.params.id}`);
})

router.delete('/:id' , (req,res) =>{
    console.log(req.params.id);
    res.send(`DELETE ID : ${req.params.id}`);
})

module.exports = router;