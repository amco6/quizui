'use strict';

angular.module('myApp.quiz', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/play/quiz/:quizId', {
            templateUrl: 'quiz/quiz.html',
            controller: 'QuizCtrl'
        });
    }])

    .controller('QuizCtrl', ['$http', '$location', '$routeParams', function($http, $location, $routeParams) {

        var vm = this;
        vm.correctAnswers = 0;

        activate();
        vm.checkAnswerA = checkAnswerA;
        vm.checkAnswerB = checkAnswerB;
        vm.checkAnswerC = checkAnswerC;
        vm.checkAnswerD = checkAnswerD;

        function activate() {
            $http.get("http://localhost:8080/quiz/" + $routeParams.quizId).then(function(response) {
                vm.quiz = response.data;
            })
        }

        function checkAnswerA(index, question) {
            checkAnswer(index, question, "a");
        }
        function checkAnswerB(index, question) {
            checkAnswer(index, question, "b");
        }
        function checkAnswerC(index, question) {
            checkAnswer(index, question, "c");
        }
        function checkAnswerD(index, question) {
            checkAnswer(index, question, "d");
        }

        function checkAnswer(index, question, letter) {
            if (question.correctAnswer === letter) {
                vm.correctAnswers ++;
                if (letter === "a") {
                    vm.quiz.questions[index].answerACorrect = true;
                } else if (letter === "b") {
                    vm.quiz.questions[index].answerBCorrect = true;
                } else if (letter === "c") {
                    vm.quiz.questions[index].answerCCorrect = true;
                } else if (letter === "d") {
                    vm.quiz.questions[index].answerDCorrect = true;
                }

            } else {
                if (letter === "a") {
                    vm.quiz.questions[index].answerAIncorrect = true;
                } else if (letter === "b") {
                    vm.quiz.questions[index].answerBIncorrect = true;
                } else if (letter === "c") {
                    vm.quiz.questions[index].answerCIncorrect = true;
                } else if (letter === "d") {
                    vm.quiz.questions[index].answerDIncorrect = true;
                }
            }
            vm.quiz.questions[index].played = true;


            finished()
        }

        function finished() {
            var played = 0;
            angular.forEach(vm.quiz.questions, function(question) {
                if (question.played) {
                    played ++;
                }
            });
            if (played === vm.quiz.questions.length) {
                alert("You've finished!");
            }

        }


    }]);