const express = require ('express');

const router = express.Router();

const Checklist = require('../model/checklist');

router.get('' ,  async (req,res)=>{
    try {
        let checklist = await Checklist.find({});
        res.status(200).json(checklist)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
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

router.get('/:id' , async (req,res)=>{
    try {
        let checklist = await Checklist.findById(req.params.id)
        res.status(200).json(checklist)
    } catch (error) {
        res.status(422).json(error)
        console.log(error)
    }
})

router.put('/:id' , async (req,res) =>{
    // console.log(req.params.id);
    // res.send(`PUT ID : ${req.params.id}`);
    try {
        let { name } = req.body
        let checklist = await Checklist.findByIdAndUpdate(req.params.id , { "name" : name } , {new : true})
        res.status(200).json(checklist)
    } catch (error) {
        res.status(422).json(error)
        console.log(error)
    }
})

router.delete('/:id' , async (req,res) =>{
    try {
        let { name } = req.body
        let checklist = await Checklist.findByIdAndRemove(req.params.id , { "name" : name } , {new : true})
        res.status(200).json(checklist)
    } catch (error) {
        res.status(422).json(error)
        console.log(error)
    }
})
module.exports = router;