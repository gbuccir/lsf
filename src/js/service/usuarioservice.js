angular.module('usuarioService', [])
    .factory("usuarioService", ["$rootScope", "$http", function ($rootScope, $http) {

        var service = this;

        function setLogarCallback(func){
            service.logar = func;
        }

        function logarCallback(){
            service.logar()
        }

       function setUser(user){
           service.user = user;
       }

       function getUser(){
           return service.user;
       }

            
        return {
            setLogarCallback:setLogarCallback,
            logarCallback:logarCallback,
            setUser:setUser,
            getUser:getUser
        };

    }]);