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

  app.get('/', dbg, home.index);

  console.log('Routes Loaded');
  fn();
}
