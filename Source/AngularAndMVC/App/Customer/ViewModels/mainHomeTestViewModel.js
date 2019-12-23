mainModule.controller("mainHomeTestViewModel", function (
    $scope, $http, $q, $routeParams, $window,
    $location, viewModelHelper) {

    var self = this;

    console.log("INSIDE mainHomeTestViewModel");



});















//mainModule.controller("mainHomeViewModel", function ($scope, customerService, $http, $q, $routeParams, $window, $location, viewModelHelper) {

//    $scope.viewModelHelper = viewModelHelper;
//    $scope.customerService = customerService;
//    $scope.TEST_FROM_MAIN_MODULE = "test from main module";

//    var initialize = function () {
//        $scope.refreshCustomers();
//    }

//    $scope.refreshCustomers = function () {
//        viewModelHelper.apiGet('api/customers', null,
//            function (result) {
//                $scope.customers = result.data;
//            });
//    }

//    $scope.showCustomer = function (customer) {
//        $scope.flags.shownFromList = true; // note this object is declared in the RootViewModel
//        viewModelHelper.navigateTo('customer/show/' + customer.CustomerId);
//    }

//    initialize();
//});
