'use strict';

var productsCollection = global.nss.db.collection('products');
var Stakeholder = require(__dirname+'/../models/stakeholder.js');
var Mongo = require('mongodb');
var async = require('async');
var _ = require('lodash');

function Product(){
}

Product.findAll = function(cb){
  productsCollection.find().toArray(function(e,products){
    cb(products);
  });
};

Product.findById = function(id, cb){
  var _id = Mongo.ObjectID(id);
  productsCollection.findOne({_id:_id}, function(err, product){
    async.map(product.stakeholders, getStakeholder, function(err,stakeholders){
      product.stakeholders = stakeholders;
      cb(product);
    });
  });
};


Product.create = function(prodName, stakeholders, cb) {
    var product = new Product();
    product.name = prodName;
    product.stakeholders = massageStakeholderObject(stakeholders);

    productsCollection.save(product, function(){ cb(product); });
};

// ================
// Helper functions
// ================
function getStakeholder(pStakeholder,callback){
  Stakeholder.findById(pStakeholder._id, function(stakeholder){
    console.log('55555555555555555555555555555555562e87637642398764928637896');
    var result = { name: stakeholder.name, email: stakeholder.email, role: pStakeholder.role } ;
    console.log(result);
    callback(null, result);
  });
}

function massageStakeholderObject(stakeholders) {
  // Converts a compex object into an a useble array of objects
  //{ ids: [val,val,...], roles: [val,val,...] } --> [ {id:val, role:val}, ... ]
  return _.zip(stakeholders).map(function(rec){ return {_id:rec[0], role:rec[1]}; });
}

module.exports = Product;
