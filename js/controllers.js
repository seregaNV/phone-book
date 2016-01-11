(function() {
    'use strict';
    function MainCtrl($scope, logger){
        $scope.name = 'Guest';
        $scope.myFunc = function() {
            logger.log('Hello!');
            logger.m += 1;
        };
        $scope.user = {name: 'Sergey', surname: 'Nagorniy', company: 'AAA CO'};
        $scope.user2 = {name: 'Vasya', surname: 'Pupkin', company: 'BBB CO'};
    }
    function Test1($scope, sharedData){
        $scope.data = sharedData;
    }
    function Test2($scope, sharedData){
        $scope.changeData = function() {
            sharedData.someData = 'DataChanged!';
        }
    }
    function PhonebookCtrl($scope, Company) {
        $scope.companys = Company.query();
        $scope.view = 'list';
    }
    angular.module('phonebook')
        .controller('MainCtrl', ['$scope', 'AlertFactory', MainCtrl])
        .controller('Test1', ['$scope', 'SharedData', Test1])
        .controller('Test2', ['$scope', 'SharedData', Test2])
        .controller('PhonebookCtrl', ['$scope', 'Company', PhonebookCtrl])
    ;
})();