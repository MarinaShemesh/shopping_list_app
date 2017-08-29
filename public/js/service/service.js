'use strict'

angular.module('ShoppingListCheckOff')
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

function ShoppingListCheckOffService(){
  const service = this;

  const items = [
                     { name: "rice", quantity: "1 bag" },
                     { name: "apples", quantity: "2 bags" },
                     { name: "bread", quantity: "2 loaves" },
                     { name: "milk", quantity: "1 carton" },
                     { name: "eggs", quantity: "1 dozen" }

                     ];

  const bought = [];

  service.getItems = function(){
     return items;
   };

  service.buyItem = function(itemIndex){
    bought.push(items.splice(itemIndex, 1)[0]);
  };

   service.boughtItem = function(itemIndex){
    return bought;
  };

}

