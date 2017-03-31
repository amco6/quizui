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

    .controller('CreateCtrl', ['$http', function($http) {
        var vm = this;
        vm.questions = [{number: 0}];

        vm.addQuestion = addQuestion;
        vm.removeQuestion = removeQuestion;
        vm.submit = submit;

        function addQuestion(index) {
            vm.questions.push({number: index});
            console.log(index);
        }

        function removeQuestion(index) {
            if (vm.questions.length > 1) {
                vm.questions.splice(index, 1);
            }
            console.log(index);
        }

        function submit() {
            console.log(vm.quiz);
            console.log(vm.questions);

            vm.quiz.questions = vm.questions;
            postQuiz(vm.quiz);
        }

        function postQuiz(quiz) {

            $http.post("http://localhost:8080/quiz/new", quiz, null)
                .then(function(response) {
                console.log(response);
            });
        }

    }]);