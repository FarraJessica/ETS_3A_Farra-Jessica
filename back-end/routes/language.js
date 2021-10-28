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

  language.findAll()
    .then((respond) => {
     	  res.json(respond);
    })
});
// router.get('/:name', function(req, res, next) {
//   language.findByPk(req.params.name).then((respond) => {
// 	  res.json(respond);
//   })
// });

// POST
router.post('/', function(req, res, next) {
  language.create(req.body).then((respond) => {
    res.json(respond)
  }).catch((err) => next(err))
});

// UPDATE
router.put('/:language_id', function (req, res, next) {
  language.update(req.body, {
    where: {
      language_id: req.params.language_id
    }})
    .then((respond) => {
      res.json(respond)
    })
    .catch((error) => next(error))
});

// DELETE
// router.delete('/:name', function (req, res, next) {
//   language.destroy({
//     where: {
//       name: req.params.name
//     }
//   })
//     .then((respond) => {
//       res.json(respond),
//       message
//   })
//   .catch((error) => next(error))
// });
router.delete('/:name', function (req, res, next) {
  language.destroy({
    where: {
      name: req.params.name
    }
  })
    .then(() => {
      view.messageSuccess('Data with name ${name} success deleted');
    })
    .catch(error => {
      view.messageError(error.message);
    })
});
module.exports = router;
