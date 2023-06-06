var express = require('express');
var router = express.Router();

const MessageModel=require('../models/messageModel');

/* GET home page. */
router.get('/', function (req, res, next) {
    //   res.render('index', { title: 'Express' });
    // res.json({message: 'Welcome to apisample'});
    const query=MessageModel.find();
    query
        .then((result)=>res.json({message: 'All Messages', data:result}))
        .catch((err)=>res.json({message: 'Error!',error:err}))
});


router.post('/',function(req,res,next){
    const newMessage=new MessageModel(req.body);
    newMessage.save()
        .then((result)=>res.json({message: 'Mesage Saved', data:result}))
        .catch((err)=>res.json({message: 'Error', error:err}))
});

router.get('/:messageID', function (req, res, next) {

    const query=MessageModel.findById(req.params.messageID);
    query
        .then((result)=>res.json({message: 'Message', data:result}))
        .catch((err)=>res.json({message: 'Error!',error:err}))
});

router.put('/:messageID', function (req, res, next) {

    const query=MessageModel.findByIdAndUpdate(req.params.messageID,req.body,{new:true});
    query
        .then((result)=>res.json({message: 'Message Updated', data:result}))
        .catch((err)=>res.json({message: 'Error!',error:err}))
});

router.delete('/:messageID', function (req, res, next) {

    const query=MessageModel.findByIdAndDelete(req.params.messageID,req.body,{new:true});
    query
        .then((result)=>res.json({message: 'Message Deleted', data:result}))
        .catch((err)=>res.json({message: 'Error!',error:err}))
});


module.exports = router;
