'use strict'

angular.module('ShoppingListCheckOff')
  .controller('BuyController', BuyController);

BuyController.$inject = ['ShoppingListCheckOffService'];
function BuyController(ShoppingListCheckOffService){

  const list1 = this;

  list1.items = ShoppingListCheckOffService.getItems();

  list1.buyItem = function(itemIndex){
  ShoppingListCheckOffService.buyItem(itemIndex);
  };

}

