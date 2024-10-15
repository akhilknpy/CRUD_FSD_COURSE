const express=require('express')
const router=express.Router()
const courseModel=require('../models/courseSchema')
router.use(express.json())//To identify dat As JSON
router.use(express.urlencoded({extended:true}))


//GET Operation
router.get('/',async (req,res)=>{
    try{
        const data=await courseModel.find();
        res.status(200).send(data);
    }catch(error){
        res.sendStatus(404).send("Data not found");
    }
})

//POST Operation
router.post('/addCourse',async(req,res)=>{
    try{
        var item=req.body;
        const data1=new courseModel(item);
        const savedata=await data1.save();
        res.status(200).send("Post Successful")
    }catch(error){
        res.sendStatus(404).send("Failed to POST data")
    }
})

//Update Operation
router.put('/edit/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const data=await courseModel.findByIdAndUpdate(id,req.body)
        res.status(200).send("Update Successful")
    }catch(error){
        res.status(404).send("Failed to update")
    }
})

//Delete Operation

router.delete('/delete/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const data=await courseModel.findByIdAndDelete(id)
        res.status(200).send("Deleted successfully")
    }catch(error){
        res.status(404).send("Failed to delete Data")
    }
})

module.exports=router