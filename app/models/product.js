'use strict';

var products = global.nss.db.collection('products');

function Product(){
}

Product.findAll = function(cb){
  products.find().toArray(function(e,p){
        cb(p);
    });
};

module.exports = Product;
