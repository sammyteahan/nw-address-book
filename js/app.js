(function() {

  angular.module('app', ['ui.router'])

  .controller('MainCtrl', MainCtrl)



  MainCtrl.$inject = ['$scope', '$state'];
  function MainCtrl($scope, $state) {
    var title = 'Addresses';

    angular.extend(this, {
      title: title
    });
  }


}());