'use strict';

exports.new = function(req, res){
  res.render('notifications/new', {title: 'Notification System'});
};
