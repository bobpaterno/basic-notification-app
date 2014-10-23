'use strict';

var stakeholdersCollection = global.nss.db.collection('stakeholders');
var Mongo = require('mongodb');
var _ = require('lodash');

function Stakeholder(){
}

Stakeholder.findAll = function(cb){
  stakeholdersCollection.find().toArray(function(e,p){
    cb(p);
  });
};

Stakeholder.findById = function(id, cb){
  var _id = Mongo.ObjectID(id);
  stakeholdersCollection.findOne({_id:_id}, function(err, stakeholder){
    cb(_.create(Stakeholder.prototype, stakeholder));
  });
};

module.exports = Stakeholder;
