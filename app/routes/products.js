'use strict';

var Stakeholder = require(__dirname+'/../models/stakeholder.js');
// var Product = require(__dirname+'/../models/product.js');

exports.new = function(req, res){
  Stakeholder.findAll(function(stakeholders){
    res.render('products/new', {stakeholders:stakeholders, title: 'Notification System'});
  });
};

exports.create = function(req, res){
  console.log('+++++++ ++++++++++ +++++++ +++++++++ ++++++++++ ++++++++');
  console.log(req.body.stakeholder);
  // Product.create();
  res.redirect('/');
};
