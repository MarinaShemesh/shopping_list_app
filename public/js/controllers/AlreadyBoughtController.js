'use strict'

angular.module('ShoppingListCheckOff')
  .controller('AlreadyBoughtController', AlreadyBoughtController);


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){

  const list2 = this;
  list2.bought = ShoppingListCheckOffService.boughtItem();
}

