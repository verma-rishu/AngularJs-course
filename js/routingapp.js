(function(){
angular.module('routingapp',['ui.router','customServiceApp','httpRouterApp'])
.config(RoutesConfig)
.controller('routingController',routingController);

function routingController(){
    console.log("Hello Routing App");
}

RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
function RoutesConfig($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider
    .state('home',{
        url:'/home',
        template:'<div>Home Page</div>',
        //controller: 'routingController as route'
    })
    .state('contacts',{
        url:'/contacts',
        template:'<div>Contact Page</div>'
    })
    .state('search',{
        url:'/search',
        templateUrl:'customservice.html'
    })
    .state('http',{
        url:'/http',
        templateUrl:'httprouting.html',
       // controller: 'httpServiceController as menu',
        resolve:{
            menuresolve: ['menuCategories',function(menuCategories){
                return menuCategories.getMenu();
            }],
        }
    })
    // .state('categorydata',{
    //     url:'/catagory/{ItemId}',
    //     templateUrl:'categoryDisplay.html',
    //     controller: 'categoryController as menuCategory'
    // })
}

})();