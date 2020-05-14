(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var buy = this;
  buy.initlist = ShoppingListCheckOffService.getbuyItems();
  buy.buying = function (itemIndex) {
    ShoppingListCheckOffService.addItem(itemIndex);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughted = this;
  boughted.seclist = ShoppingListCheckOffService.getboughtItems();
}



function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var initialitems =
  [
    {name:'Cookie',quantity:5},
    {name:'milk',quantity:10},
    {name:'cola',quantity:15},
    {name:'choco',quantity:20},
    {name:'ice cream',quantity:25}
  ];

  service.getbuyItems = function () {
    return initialitems;
  };

var boughtitems = [];

service.addItem = function (itemIndex) {
  var one = {name:initialitems[itemIndex].name,quantity:initialitems[itemIndex].quantity};
    boughtitems.push(one);
    initialitems.splice(itemIndex, 1);
  };

  service.getboughtItems = function () {
    return boughtitems;
  };

  service.messageEth = function (initialitems) {
    if (initialitems.length = 0) {
          return "Everything ";
    }
  };

}

})();
