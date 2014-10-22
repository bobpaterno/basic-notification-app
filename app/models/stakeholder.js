'use strict';

var stakeholders = global.nss.db.collection('stakeholders');

function Stakeholder(){
}

Stakeholder.findAll = function(cb){
  stakeholders.find().toArray(function(e,p){
        cb(p);
    });
};

module.exports = Stakeholder;
