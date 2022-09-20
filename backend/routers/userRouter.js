const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');

router.post('/add', (req,res) => {
    console.log(req.body);
    // res.send('response from user Router');
      new Model(req.body).save()    // promise
      .then((result) => {
        console.log(result);
        res.json(result);
        
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
        
      });
});
router.get('/getall',(req,res) =>{
    Model.find()
    .then((result) => {
        console.log(result);
        res.json(result);

    })
    .catch((err) => {
        console.log(err);
        res.json(err);
        
    });
})
//  ':' colon refers that url parameter
router.get('/getbyusername/:username',(req,res) =>{
    console.log(req.params.username);
    // res.send('😎');
    Model.find({username : req.params.username})
    .then((result) => {
        console.log(result);
        res.json(result);

    }).catch((err) => {
        console.log(err);
        res.json(err);
        
    });

});
router.delete('/delete/:id',(req,res) =>{
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
        
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });
})
// "put" is use for  update

router.put('/update/:id',(req,res) =>{
    Model.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
        res.json(result);
        
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });
})

router.post('/authenticate',(req,res) =>{

        const formdata = req.body;
        
        Model.findOne({email : formdata.email, password : formdata.password})
        .then((result) => {
            if(result){
                res.status(200).json(result);
            }else{
                res.status(401).json({status : 'login failed'});
            }
        })
})



// exporting
module.exports = router;