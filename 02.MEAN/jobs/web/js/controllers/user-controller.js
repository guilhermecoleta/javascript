(function(angular) {
  'use strict';

  angular.module('jobs').controller('UserController', controller);

  controller.$inject = ['UserService'];

  function controller(UserService) {
    const vm = this;

    vm.initUsers = () => {
      UserService.getUsers()
      .then(response => {
        console.log(response)
        vm.users = response.data;
      })
    };

    vm.save = (user) => {
      UserService.saveUser(user)
      .then((res) => {
        console.log(res);
        vm.user = {};
        vm.initUsers();
      })
      .catch((err) => {
        console.log(err);
      })
    };

    vm.deleteSelected = (users) => {
      UserService.removeAll(users)
      .then((res) => {

      });
    };
  }

})(window.angular);
