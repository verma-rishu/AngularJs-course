(function(){
    'use strict'; //to avoid bleeding things in global scope
    //console.log();
    var shoppingList1=['Milk','chocolate','peanut butter','pepto bismol','frappe','shake','milkcake','milkcookies'];
    var shoppingList2=[
        {
            name:'Milk',
            quantity:'2'
        },
        {
            name:'Donuts',
            quantity:'200'
        },
        {
            name:'Cookies',
            quantity:'50'
        },
        {
            name:'Chocolate',
            quantity:'3'
        }
    ];
    var app= angular.module('wc',[]);
    app.controller('watcherController',CounterController);
    app.controller('shoppingListController',shoppingList);
   //watcherController.$inject=['$scope'];
    function CounterController($scope){
        $scope.countNumberOfWatchers=function(){
            console.log($scope.$$watchersCount);//.$$watcherscount);
        };
    }
    function shoppingList($scope){
        $scope.shoppingList1=shoppingList1;
        $scope.shoppingList2=shoppingList2;

        $scope.addItems=function(){
            var newItemAdded={
                name:$scope.newItem,
                quantity:$scope.newQuantity
            }
            $scope.shoppingList2.push(newItemAdded);
        }
    }
    var number=[1,2,3,4,5,6,7,8,9,10];
    function modulus2(value){
        return value%2;
    }
    var filteredArray=number.filter(function(value){
        return value>5;
    });
    console.log("Filetred Array:"+filteredArray);

    var filter2=number.filter(modulus2);
    console.log("Filter Name:"+filter2);
})();