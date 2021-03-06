'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.directives.dropdown',
  'myApp.directives.sortable',
  'myApp.directives.numericInput'
])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/multiSelectDropdown', { templateUrl: 'multiSelectDemo.html', controller: 'multiSelectDropdownDemoController' });
    $routeProvider.when('/sortableListBox', { templateUrl: 'sortableListBoxDemo.html', controller: 'sortableListBoxDemoController' });
    $routeProvider.when('/numericInput', { templateUrl: 'numericInput.html', controller: 'numericInputController' });
    $routeProvider.otherwise({ redirectTo: '/multiSelectDropdown' });
} ])
.controller('multiSelectDropdownDemoController', ['$scope', function ($scope) {
    $scope.options = [
                {
                    id: 1,
                    name: 'one',
                    isSelected: false
                },

                {
                    id: 2,
                    name: 'two',
                    isSelected: false
                },

                {
                    id: 3,
                    name: 'three',
                    isSelected: false
                }
            ];
    $scope.name = 'Multi Select Drop Down';
} ])
.controller('sortableListBoxDemoController', ['$scope', function ($scope) {
    $scope.items = [
                {
                    id: 1,
                    name: 'one'
                },

                {
                    id: 2,
                    name: 'two'
                },

                {
                    id: 3,
                    name: 'three'
                }
            ];

} ])
.controller('numericInputController', ['$scope', function ($scope) {
    $scope.myValue = null;
} ]);