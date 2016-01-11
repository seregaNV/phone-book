(function() {
    'use strict';
    function decorator() {
        return function(input, symbol) {
            return symbol + ' ' + input + ' ' + symbol;
        };
    }
    angular.module('phonebook').filter('decorator', decorator);
})();