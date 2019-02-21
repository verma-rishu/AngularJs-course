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
    .service('ShoppingListService',ShoppingListService);

    function ShoppingListAddController(ShoppingListService){
        var itemAdder=this;
        itemAdder.itemName="";
        itemAdder.itemQuantity="";
        itemAdder.addItem=function(){
            ShoppingListService.addItem(itemAdder.itemName,itemAdder.itemQuantity);
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