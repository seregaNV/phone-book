(function() {
    'use strict';
    function PhonebookRoute($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $routeProvider
            .when('/', {
                templateUrl: 'index.html',
                controller: 'PhonebookCtrl'
            })
            .otherwise({
                redirectTo: '/'
            })
    }
    angular.module('phonebook').config(['$routeProvider', '$locationProvider', PhonebookRoute]);
})();