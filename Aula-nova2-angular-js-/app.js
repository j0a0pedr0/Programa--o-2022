var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function($scope) {
  $scope.products = ["Milk", "Bread", "Cheese"];
  $scope.produtos = ["oleo","ovo","bacon"];
  $scope.produtos2 = ["oleo","ovo","bacon"];
  $scope.addItem = function () {
    $scope.errortext = "";
    if (!$scope.item) {return;}
    if ($scope.produtos.indexOf($scope.item) == -1) {
      $scope.produtos.push($scope.item);
    } else {
      $scope.errortext = "The item is already in your shopping list.";
      console.log($scope.errortext);
    }
  }

  $scope.addItem2 = function () {
    $scope.errortext = "";
    if (!$scope.item2) {return;}
    if ($scope.produtos2.indexOf($scope.item2) == -1) {
      $scope.produtos2.push($scope.item2);
    } else {
      $scope.errortext = "The item is already in your shopping list.";
      console.log($scope.errortext);
    }
  }

  $scope.addItem3 = function () {
    $scope.errortext = "";
    if (!$scope.item3) {return;}
    if ($scope.products.indexOf($scope.item3) == -1) {
      $scope.products.push($scope.item3);
    } else {
      $scope.errortext = "The item is already in your shopping list.";
      console.log($scope.errortext);
    }
  }
  
  $scope.removeItem = function(x){
      $scope.products.splice(x,1);
  }
  $scope.removeItem2 = function(n){
    $scope.produtos.splice(n,1);
  }
  $scope.removeItem3 = function(m){
    $scope.produtos2.splice(m,1);
  }
});