(function(){
    'use strict';
    var shoppingList1=['Milk','chocolate','peanut butter','pepto bismol','frappe','shake','milkcake','milkcookies'];

    angular.module('customServiceApp',[])
    .controller('ShoppingListController',ShoppingListController)
    .service('ShoppingListService',ShoppingListService)
    .service('checkingOut',checkingOut);

    function ShoppingListController(ShoppingListService){
        var itemAdder=this;
        itemAdder.itemName="";
        itemAdder.itemQuantity="";
        itemAdder.addItem=function(){
            ShoppingListService.addItem(itemAdder.itemName,itemAdder.itemQuantity);
        }
        itemAdder.items=ShoppingListService.getItems();
        itemAdder.removeItem=function(itemIndex){
            ShoppingListService.removeItem(itemIndex);
        }
    }
    function ShoppingListService($q,checkingOut){
        var service=this;
        var items=[];
    //     service.addItem=function(itemName,itemQuantity){
    //         var promise1=checkingOut.NameCheck(itemName);
    //         promise1.then(function(response){
    //         var promise=checkingOut.QuantityCheck(itemQuantity);
    //         promise.then(function(result){
    //             var item={
    //                 name:itemName,
    //                 quantity:itemQuantity
    //             };
    //             items.push(item);
    //         },
    //         function(error){
    //             console.log(error.message);
    //         });
    //     },function(error){
    //         console.log(error.message);
    //     });
    // };
//     service.addItem=function(itemName,itemQuantity){
//         var promise1=checkingOut.NameCheck(itemName);
//         promise1
//         .then(function(response){
//         return checkingOut.QuantityCheck(itemQuantity);
//         })
//         .then(function(result){
//             var item={
//                 name:itemName,
//                 quantity:itemQuantity
//             };
//             items.push(item);
//         })
//         .catch(function(error){
//             console.log(error.message);
//         });
// };

service.addItem=function(itemName,itemQuantity){
    var promise1=checkingOut.NameCheck(itemName);
    var promise=checkingOut.QuantityCheck(itemQuantity);
    $q.all([promise,promise1])
    .then(function(result){
        var item={
            name:itemName,
            quantity:itemQuantity
        };
        items.push(item);
    })
    .catch(function(error){
        console.log(error.message);
    });
};

        service.getItems=function(){
            return items;
        };
        service.removeItem=function(itemIndex){
            items.splice(itemIndex,1);
        }
    }
function checkingOut($q,$timeout){
    var service=this;
    service.NameCheck=function(name){
        var deferred=$q.defer();
        var result={
            message:''
        };
        $timeout(function(){
            if(name.toLowerCase().indexOf('cookie')===-1){
                deferred.resolve(result)
            }
            else{
                result.message='Stay away from cookies';
                deferred.reject(result);
            }
        },3000);
        return deferred.promise;
    };
    service.QuantityCheck=function(quantity){
        var deferred=$q.defer();
        var result={
            message:""
        };
        $timeout(function(){
            if(quantity<6){
                deferred.resolve(result);
            }
            else{
                result.message="That's too much considering one month";
                deferred.reject(result);
            }
        },1000);
        return deferred.promise;
    };
}
})();