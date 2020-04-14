const express = require('express');
const knex = require('knex');

const knexfile = require('../knexfile.js');

const db = knex(knexfile.development);

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
    .then(allCars => {
        res.status(200).json({data: allCars});
    })
    .catch(err => {
        console.log(err);
        res.status(404).json({message: 'error 404'});
    })
})

router.get('/:id', (req, res) => {
    db('cars')
    .where({id: req.params.id})
    .then(car => {
        res.status(200).json({data: car});
    })
    .catch(err => {
        console.log(err);
        res.status(404).json({message: 'error 404'});
    })
})

router.post('/', (req, res) => {
    db('cars')
    .insert(req.body)
    .then(newId => {
        db('cars')
        .where({id: newId[0]})
        .then(newCar =>{
            res.status(200).json({message: `A new car with ID:${newId} was added to database`,
                                 data: newCar});
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({message: 'error 500'});
    })
})

module.exports = router;