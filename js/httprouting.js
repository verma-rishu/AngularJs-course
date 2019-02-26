(function(){
    'user strict';
    angular.module('httpRouterApp',[])
    .controller('httpServiceController',httpServiceController)
    .service('menuCategories',menuCategories)
    .constant('apiurl','http://davids-restaurant.herokuapp.com');

function httpServiceController($scope,menuCategories,menuresolve){
    var menu=this;
    //use resolve

    menu.categories=menuresolve.data;

    menu.logCategoryMenu=function(name,apiurl){
        var promise=menuCategories.shortNameCall(name);
        promise.then(function(response){
            menu.data=response.data;
            console.log(menu.data.menu_items[0].name);
            console.log(menu.data.menu_items[0].short_name);
            console.log(menu.data.menu_items[0].description);

        })
        .catch(function(error){
            console.log(error);
        })
        };
    menu.postcheck=function(){
        var promise=menuCategories.postjob(menu.name,menu.job);
        promise.then(function(response){
            console.log("Job posted!");
        },function(error){
            console.log('Error is: ',error);
            console.log('Job not posted');
        })
    };
    }
function menuCategories($http,apiurl){
    var service=this;
    service.getMenu=function(){
        return $http.get(apiurl+ '/categories.json');
    }
    service.shortNameCall=function(name){
        return $http.get(apiurl+ '/menu_items.json',{params:{
            category:name
        }});
    }
    service.postjob=function(name, job){
        return $http.post('https://reqres.in/api/users',{params:{
            name:name,
            job: job
        }});
    }
}
}) ();