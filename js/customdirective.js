(function(){
    'use strict';
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

    angular.module('customServiceApp',[])
    .controller('ShoppingListAddController',ShoppingListAddController)
    .controller('ShoppingListShowController',ShoppingListShowController)
    .service('ShoppingListService',ShoppingListService)
    .directive('myTag',tagcall)
    .directive('listItem',ListItem);

    function ListItem(){
        var ddo={
            templateUrl:'listitem.html'
        };
        return ddo;
    }

    function tagcall(){
        var ddo={
            template:'{{item.quantity}} of {{item.name}}'
        };
        return ddo;
    }

    function ShoppingListAddController(ShoppingListService){
        var list=this;
        list.itemName="";
        list.itemQuantity="";
        list.addItem=function(){
            ShoppingListService.addItem(list.itemName,list.itemQuantity);
        }
    }
    function ShoppingListShowController(ShoppingListService){
        var showList=this;
        showList.items=ShoppingListService.getItems();
        showList.removeItem=function(itemIndex){
            ShoppingListService.removeItem(itemIndex);
        }
    }
    function ShoppingListService(){
        var service=this;
        var items=[];
        service.addItem=function(itemName,itemQuantity){
            var item={
                name:itemName,
                quantity:itemQuantity
            };
            items.push(item);
        };
        service.getItems=function(){
            return items;
        };
        service.removeItem=function(itemIndex){
            items.splice(itemIndex,1);
        }
    }
})();