const express = require('express');
const httpStatusCodes = require('http-status-codes');
const router = express.Router();

// Add the reference
const user = require('../models/user.model');

// refactor get method
router.get('/', (req, res) => {
    user.find().then(users => {
        res.send(users);
    }).catch(err => {
        res.status(httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).send(err);
    });
});

router.post('/', (req, res) => {
    const userPayload = req.body;
    user.create(userPayload).then(doc => {
        res.status(httpStatusCodes.StatusCodes.CREATED).send(doc)
    }).catch(err => {
        res.status(httpStatusCodes.StatusCodes.BAD_REQUEST).send(err);
    });
});

//http://localhost:5001/api/user/6449a9d428144c1d6929ff4d

router.get('/:id', (req, res) => {
    let id = req.params.id;
    user.findById(id).then( user => {
        res.status(httpStatusCodes.StatusCodes.OK).send(user);
    }).catch(err => {
        res.status(httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).send(err);
    });
});

router.put('/:id', async (req,res) =>{
    let id = req.params.id;
    const body = req.body;
    await user.findByIdAndUpdate(id, { 
        name: body.name,
        contact: body.contact,
        address: body.address
    }).then(doc => {
        res.status(httpStatusCodes.StatusCodes.OK).send(doc);
    }).catch (err => {
        res.status(httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).send(err);
    });
})

router.delete('/:id', async (req,res) => {
    let id= req.params.id;
    await user.findByIdAndDelete(id).then( user => {
        res.status(httpStatusCodes.StatusCodes.OK).send(user);
    }).catch(err => {
        res.status(httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).send(err);
    });
})


module.exports = router;