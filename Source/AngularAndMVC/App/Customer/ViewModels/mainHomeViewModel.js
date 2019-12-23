mainModule.controller("mainHomeViewModel", function (
    $scope, $http, $q, $routeParams, $window,
    $location, viewModelHelper) {

    var self = this;

    $scope.topic =
        "Integrating ASP.NET MVC and AngularJS";
    $scope.author = "Miguel A. Castro";


    $scope.viewModelHelper = viewModelHelper;
    //$scope.customerService = customerService;
    $scope.pageHeading = "test from main module";

    var initialize = function () {
        $scope.refreshCustomers();
    }

    $scope.refreshCustomers = function () {
        console.log("inside refresh customers");
        viewModelHelper.apiGet('api/customers', null,
            function (result) {
                $scope.customers = result.data;
                console.table($scope.customers);
            });
    }

    //$scope.showCustomer = function (customer) {
    //    $scope.flags.shownFromList = true; // note this object is declared in the RootViewModel
    //    viewModelHelper.navigateTo('customer/show/' + customer.CustomerId);
    //}

    //initialize();

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
