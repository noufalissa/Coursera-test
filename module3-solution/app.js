(function () {
'use strict';
angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
    var ddo = {
      templateUrl: "listItems.html",
      scope: {
        ctrl: "<",
        onRemove: "&",
        result:"@result"
      },
    };
    return ddo;
  }
//controller
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
  var list = this;

  list.searchTerm ="";
  list.searchResult="";
  list.found=[];


  list.search  = function(){


    if(list.searchTerm &&   list.searchTerm.length > 0) {
            list.searchResult = "";
            var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);

            promise.then(function(response) {
              console.log(response);
              list.found = response;
              if(list.found.length === 0) {
                list.searchResult = "Nothing found (matching \"" + list.searchTerm + "\")";
              }
            });
          }
          else
          {
            list.searchResult = "Nothing found";
          }
 };
                   //*****************************************//
 list.onRemove = function(index) {
       console.log("Index: ", index);
       list.found.splice(index, 1);
     };
                //*********************************************//
list.searchResult = function () {
    if(list.found.length==0)
       return "Nothing found (matching \"" + list.searchTerm + "\")";
       if(list.search ===""){
         list.found=[];
      return "Nothing found";
        }
    };
}

//service///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService ($http, ApiBasePath) {
var service = this;
service.getMatchedMenuItems = function (searchTerm) {
  var response = $http({
    method: "GET",
    url: (ApiBasePath + "/menu_items.json")
    }).then(function(response){
      service.foundItems = response.data.menu_items;
      for (var i =service.foundItems.length-1; i >= 0; i--) {
        if(service.foundItems[i].description.search(searchTerm)==-1)
							service.foundItems.splice(i,1);
      }
      return service.foundItems;
    });
 return response;
};
}
})();
