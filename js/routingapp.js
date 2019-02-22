(function(){
angular.module('routingapp',['ui.router']).config(RoutesConfig);

RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
function RoutesConfig($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider
    .state('home',{
        url:'/home',
        template:'<div>Home Page</div>'
    })
    .state('contacts',{
        url:'/contacts',
        template:'<div>Contact Page</div>'
    })
    .state('search',{
        url:'/search',
        templateUrl:'customservice.html'
    })
}
})();