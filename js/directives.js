(function() {
    'use strict';
    function ditMyDirective() {
        return {
            restrict: 'AE',//'A' - атрибут, 'E' - елемент в вигляді тега, 'C' - в вигляді коментарієв
            template: 'Hello, Angular\'s Directive!'
        }
    }
    function ditUserInfo() {
        return {
            restrict: 'AE',
            scope: {userInfo: '=user'},
            //template: 'My name is <b>{{ userInfo.name }}</b> <i>{{ userInfo.surname }}</i>',
            templateUrl: 'template/user.html',
            link: function(scope, element, attrs) {
                element.on('click', function() {
                    alert(scope.userInfo.company);
                })
            }
        }
    }
    function pbCompanyCard() {
        return {
            restrict: 'E',
            scope: {company: '='},
            templateUrl: 'template/company-card.html'
        }
    }
    angular.module('phonebook').directive('ditMyDirective', ditMyDirective);
    angular.module('phonebook').directive('ditUserInfo', ditUserInfo);
    angular.module('phonebook').directive('pbCompanyCard', pbCompanyCard);
})();