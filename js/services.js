(function() {
    'use strict';
    function LogFactory() {
        return {
            log: function(arg) {
                console.log(arg);
            }
        }
    }
    function AlertFactory() {
        return {
            log: function(arg) {
                alert(arg);
            }
        }
    }
    function SharedData() {
        return {
            someData: 'Test'
        };
    }
    function phoneFactory($resource) {
        return $resource('data/:companyId.:format', {
            companyId: 'companys',
            format: 'json'
        }, {
            update: {method: 'PUT', params: {phoneId: 'phone'}, isArray: true} // {phoneId: '@phone'}
        });
    }
    angular.module('phonebook').factory('LogFactory', LogFactory);
    angular.module('phonebook').factory('AlertFactory', AlertFactory);
    angular.module('phonebook').factory('SharedData', SharedData);
    angular.module('phonebook').factory('Company', ['$resource', phoneFactory]);
})();