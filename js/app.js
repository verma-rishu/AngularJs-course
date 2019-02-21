(function(){
    'use strict'; //to avoid bleeding things in global scope
    angular.module('nameCalculator',[])

    /* basic data binding */

    // .controller('firstController',function($scope){
    //     $scope.name="Rishu";
    //     $scope.sayHello=function(){
    //         return 'Hello Rishu!';
    //     }
    // });

    /* ng-keyup */

    /*.controller('nameCalculatorController',function($scope){
        $scope.name='';
        $scope.totalValue=0;
        $scope.displayLength=function(){
            var totalInputValue=0;
            totalInputValue=calculateLength($scope.name);
            $scope.totalValue=totalInputValue;
        };

        function calculateLength(string){
            var totalInputValue=0;
            for(var i=0;i<string.length;i++){
                totalInputValue +=string.charCodeAt(i);
            }
            return totalInputValue;
        };
    });
*/
    /*dependency Injection*/

    .controller('DIController',function($scope,$filter){
        $scope.name='';
        $scope.uname='';
        $scope.cost=0.40;
        $scope.upper=function(){
            var upName=$filter('uppercase');
            $scope.name=upName($scope.name);
        };
        $scope.lower=function(){
            // var loName=$filter('lowercase');
            // $scope.uname=loName($scope.uname);
            // //return loName;
            var output=$filter('lowercase')($scope.uname);
            console.log(output);
            $scope.uname=output;
        };
    });
    
})();