(function(){
  'use strict';

  $(document).ready(init);

  function init() {
    $('#add-stakeholder').click(cloneStakeholder);
  }

  function cloneStakeholder() {
    var $selectBox = $('.stakeholders-select:first-child');
    var $lastBox = $('.stakeholders-select').last();
    $selectBox.clone().insertAfter($lastBox);
  }
})();
