(function(){
'user script';
angular.module('nameCalculator',[])
.controller('DIController',changeText)
.filter('custom',customFilterFactory);

//DIController.$inject=['$scope','customFilter'];
function changeText($scope,customFilter){
    $scope.textInside=function(){
        var message=$scope.name;//'hi rishu!';
        return message;  //return message;
    };
    $scope.filterInAction=function(){
        var message=$scope.name;//'hi rishu!';
        message=customFilter(message);
        console.log(message);
        $scope.name=message;
    };
}
function customFilterFactory(){
    return function(input){
        var splitStr = input.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
   // Directly return the joined string
     return splitStr.join(' '); 
    };
}

})();