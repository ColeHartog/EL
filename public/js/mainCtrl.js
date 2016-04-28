angular.module('apptastic').controller('mainCtrl', function($scope, $http){
    
    $scope.test = "Hello World";
    
    $scope.getBooks = function(){
        $http({
            method: "GET",
            url: "/api/books"
        }).then(function(response){
            $scope.books = response.data;
        })
    }();
    
    $scope.getShelfs = function(){
        $http({
            method: "GET",
            url: "/api/shelfs"
        }).then(function(response){
            $scope.shelfs = response.data;
        })
    }();
    
})