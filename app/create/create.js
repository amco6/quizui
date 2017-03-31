'use strict';

angular.module('myApp.create', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/create', {
            templateUrl: 'create/create.html',
            controller: 'CreateCtrl',
            controllerAs: 'vm'
        });
    }])
    .directive('question', function() {
        return {
            templateUrl: 'create/question.html',
            controller: 'CreateCtrl'
        }
    })

    .controller('CreateCtrl', [function() {
        var vm = this;
        vm.questions = [];

        vm.addQuestion = addQuestion;


        function addQuestion() {
            vm.questions.push({});
            console.log(vm.questions);
        }

    }]);