const Sequelize = require('sequelize');
var express = require('express');
var router = express.Router();
var DataTypes = Sequelize.DataTypes;
const sequelize = new Sequelize('postgres://postgres:farrjess26@localhost:5432/dvdrental');
var language = require('../models/languages')(sequelize, DataTypes);

//GET
router.get('/', function(req, res, next) {
  res.setHeader(
    'Access-Control-Allow-Origin', '*',
  )
  res.setHeader(
    'Content-Type', 'application/json'
  )

  language.findAll({order: [['language_id', 'ASC']]})
    .then((respond) => {
     	  res.json(respond);
    })
});

// POST
router.post('/', function (req, res, next) {
  language.create(req.body).then((respond) => {
    res.json(respond)
  }).catch((error) => next(error))
});

// UPDATE
router.put('/', function (req, res, next) {
  language.update({ name: req.body.newName}, {
    where: {
      name: req.body.oldName
    }})
    .then((respond) => {
      res.json(respond)
    })
    .catch((error) => next(error))
});

// DELETE
router.delete('/:name', function (req, res, next) {
  language.destroy({
    where: {
      name: req.params.name
    }
  })
    .then((respond) => {
      res.json(respond),
      message
  })
  .catch((error) => next(error))
});

module.exports = router;
