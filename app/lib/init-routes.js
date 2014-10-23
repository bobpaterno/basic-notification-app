'use strict';

var dbg = require(__dirname + '/route-debugger.js');
var initialized = false;

module.exports = function(req, res, next){
  if(!initialized){
    initialized = true;
    load(req.app, next);
  }else{
    next();
  }
};

function load(app, fn){
  var home = require(__dirname + '/../routes/home.js');
  var notifications = require(__dirname + '/../routes/notifications.js');
  var products = require(__dirname + '/../routes/products.js');

  app.get('/', dbg, home.index);
  app.get('/products', dbg, products.index);
  app.post('/products', dbg, products.create);
  app.get('/products/new', dbg, products.new);
  app.get('/products/:id', dbg, products.show);
  app.get('/notifications/new', dbg, notifications.new);

  console.log('Routes Loaded');
  fn();
}
