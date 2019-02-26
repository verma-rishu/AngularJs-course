(function(){
    'user strict';
    angular.module('httpServiceApp',[])
    .controller('httpServiceController',httpServiceController)
    .service('menuCategories',menuCategories)
    .constant('apiurl','http://davids-restaurant.herokuapp.com')

    function httpServiceController($scope,menuCategories){
        var menu=this;
        var promise=menuCategories.getMenu();
        promise.then(function(response){
            menu.categories=response.data;
        },function(error){
            console.log('Something went wrong');
        });

        menu.logCategoryMenu=function(name,apiurl){
            var promise=menuCategories.shortNameCall(name);
            promise.then(function(response){
                menu.data=response.data;
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
        menu.uploadimage=_=>{
            var promise=menuCategories.postImage(menu.image);
            promise.then(function(response){
                console.log("Image Uploaded");
            },function(error){
                console.log('Error is: ',error);
                console.log('Image not Uploaded');
            })
        };
        menu.removeItems=function(itemIndex){
            console.log('calling remove');
        //.slice(itemIndex,1);
        }
        }
    function menuCategories($http,apiurl){
        var service=this;
        service.getMenu=function(){
            // var response=$http({
            //     method:'GET',
            //     url:(apiurl+ '/categories.json')
            // });
            return $http.get(apiurl+ '/categories.json');
        }
        service.shortNameCall=function(name){
            // var response=$http({
            //     method:'GET',
            //     url: (apiurl+ '/menu_items.json'),
            //     params:{
            //         category:name
            //     }
            // });
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
        service.postImage=function(image){
            return $http.post('https://api.imgur.com/3/image',{params:{
            image:image
            }});
        }
    }
})();