'use strict';

angular.module('myApp.mainController', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'menu/menu.html',
    controller: 'MainCtrl',
    controllerAs: 'vm'
  });
}])

.controller('MainCtrl', ['$location', function($location) {
  var vm = this;
  vm.goTo = goTo;

  function goTo(path) {
    $location.path(path);
    console.log(path);
  }

}]);