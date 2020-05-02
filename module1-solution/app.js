/*(function () {
    'use strict';

    angular.module('LunchCheck', [])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject = ['$scope'];//avoid disapper when we will process Minification
   function LunchCheckController ($scope)
    {
        $scope.name;
        $scope.message;
        $scope.colChange ={};
        $scope.borChange = {};
        $scope.displayNumeric = function ()
        {
            if (!$scope.name)
            {
                $scope.message = "Please enter data first";
                $scope.colChange =
                {
                   "color": "red"
                };
               $scope.borChange =
                {
                   "border-color": "red"
                };
            }
            else
            {
                var nameSplit = $scope.name.split(",");
                if (nameSplit.length <= 3)
                {
                    $scope.message ="Enjoy!";
                }
                else
                {
                    $scope.message =  "Too much!";
                };
                $scope.colChange =
                {
                   "color": 'green'
                };
                $scope.borChange =
                {
                   "border-color": "green"
                };
            };
        };
    };
})();*/
//after minifier the previous code will be
!function(){"use strict";function e(e){e.name,e.message,e.colChange={},e.borChange={},e.displayNumeric=function(){e.name?(e.name.split(",").length<=3?e.message="Enjoy!":e.message="Too much!",e.colChange={color:"green"},e.borChange={"border-color":"green"}):(e.message="Please enter data first",e.colChange={color:"red"},e.borChange={"border-color":"red"})}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();
