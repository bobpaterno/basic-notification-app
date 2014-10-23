'use strict';

var Stakeholder = require(__dirname+'/../models/stakeholder.js');
var Product = require(__dirname+'/../models/product.js');

exports.index = function(req, res) {
  Product.findAll(function(products){
    res.render('products', { products:products, title: 'Notification System - Products'});
  });
};

exports.new = function(req, res){
  Stakeholder.findAll(function(stakeholders){
    res.render('products/new', {stakeholders:stakeholders, title: 'Notification System - New Product'});
  });
};

exports.create = function(req, res){
  var stakeholders = req.body.stakeholder;
  Product.create(req.body.name, stakeholders, function(product){
    res.redirect('/products');
  });
};

exports.show = function(req, res){
  Product.findById(req.params.id, function(product){
    res.render('products/show',{ product:product, title: 'Notification System - Show Product'});
  });
};
