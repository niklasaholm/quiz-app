angular.module('app', [])

.factory('MainFactory', function($http) {
    return $http.get('/questions');

})

.controller('MainCtrl', ['$scope', '$http', 'MainFactory', function($scope, $http, MainFactory) {

    $scope.selected = []
    $scope.index = 0;
    $scope.result = 0;
    $scope.len = 5;

    MainFactory.success(function(data) {  
        selectQuestions(data);
        console.log(data)
    })
    .error(function(err) {
        console.log(err);
    });

    
    $scope.checkAnswer = function(alternative) {
            if (alternative == $scope.selected[$scope.index].answer) {
            $scope.result++;
        } 
        nextQuestion();
    };


    function nextQuestion() {
        ++$scope.index;
    }


    function selectQuestions(questions) {
        for (i = 0; i < $scope.len; i++) {
            $scope.selected[i] = questions[i];

        }
    }


}])

.directive('showScore', function() {
    return {
        template: '<h2>{{ result }} out of {{ len }}</h2>'
    };
})
