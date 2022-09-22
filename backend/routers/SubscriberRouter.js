const express = require('express');
const router = express.Router();
const Model = require('../models/SubscriberModel');

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
router.get('/getbyowner/:ownerid',(req,res) =>{
    console.log(req.params.username);
    // res.send('😎');
    Model.find({owner : req.params.ownerid})
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

// exporting
module.exports = router;