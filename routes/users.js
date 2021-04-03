const express = require('express');
const router = express.Router();
require('dotenv').config();
const User = require('../model/user');

// Home page
router.get("/",async(req,res)=>{
    const data = await User.query();
    res.render('home',{data:data})
})
// To add new user
router.post("/adduser",async (req,res)=>{
    return await User.query().insertGraph(req.body)
    .then((result) => {
        res.redirect('/')
    }).catch((err) => {
        console.log(err)
    });

})

//to render a adduser page
router.get("/submit",(req,res)=>{
    res.render('adduser')
})

//to delete user
router.get('/delete/:id',async (req,res)=>{
    let id = req.params.id;
    await User.query().deleteById(id)
   .then((d)=>{
       if (d){
           // again home page after deleting
        res.redirect('/')
       }
   }).catch((err)=>{
       console.log(err)
   })
})

// to view a user
router.get("/view/:id",async(req,res)=>{
    let id = req.params.id;
    await User.query().findById(id)
        .then((data)=>{
            if (data.length!=0){
                res.render('view_details',{data:data})
            }
        }).catch((err)=>{
            console.log(err)
            res.send({msg:err})
        })
})

// to edit user's details
router.get('/edit/:id',async(req,res)=>{
    res.render('edit')
})
module.exports = router;