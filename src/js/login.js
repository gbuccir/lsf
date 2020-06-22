
angular.module('login', [])
    .component('login',  {
        templateUrl: '../../src/view/login.html',
        bindings: {

        },

        controller: ['$scope', function login($scope) {

            alert("login");
        }],
    })