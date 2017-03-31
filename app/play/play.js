'use strict';

angular.module('myApp.play', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/play', {
    templateUrl: 'play/play.html',
    controller: 'PlayCtrl'
  });
}])

.controller('PlayCtrl', ['$http', '$location', function($http, $location) {

    console.log("play");
    var vm = this;
    vm.playQuiz = playQuiz;

    activate();

    function activate() {
        $http.get("http://localhost:8080/quizzes").then(function(response) {
            vm.quizzes = response.data;
            console.log(response);
        })
    }

    function playQuiz(id) {
        $location.path("/play/quiz/" + id);
    }



}]);