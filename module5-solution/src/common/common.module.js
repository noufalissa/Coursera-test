(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://noufal-for-angular-task.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
