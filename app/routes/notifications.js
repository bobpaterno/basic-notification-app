'use strict';

var Product = require(__dirname+'/../models/product.js');

exports.new = function(req, res){
  Product.findAll(function(products){
    res.render('notifications/new', {products:products, title: 'Notification System'});
  });
};

exports.create = function(req, res){
  res.redirect('/');
};
