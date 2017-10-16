'use strict';

angular.module('drenajesWebInterfazApp')
  .controller('MainCtrl', function ($scope, $cookies, apiService) {
    if($cookies.get("a") != null){
      $cookies.put("a", "1" + $cookies.get("a") )
    }
    else{
      $cookies.put("a", "1")
    }
      console.log($cookies.get("a"))
});
