
var app = angular.module('TinyTimeApp', ['ngRoute', 'LocalStorageModule', 'angular-loading-bar', 'ngAnimate', 'ngResource', 'ui.bootstrap', 'ngTouch', 'ngSanitize']);
app.config(function ($routeProvider) {

    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "/app/views/home.html",
        auth: false
    });

    $routeProvider.when("/login", {
        controller: "loginController",
        templateUrl: "/app/views/login.html",
        auth: false
    });

    $routeProvider.when("/signup", {
        controller: "signupController",
        templateUrl: "/app/views/signup.html",
        auth: false
    });

    $routeProvider.when("/month", {
        controller: "monthController",
        templateUrl: "/app/views/month.html",
        auth: true
    });

    $routeProvider.when("/timesheet", {
        controller: "timesheetController",
        templateUrl: "/app/views/timesheet.html",
        auth: true
    });

    $routeProvider.when("/refresh", {
        controller: "refreshController",
        templateUrl: "/app/views/refresh.html",
        auth: true
    });

    $routeProvider.when("/tokens", {
        controller: "tokensManagerController",
        templateUrl: "/app/views/tokens.html",
        auth: true
    });

    $routeProvider.when("/associate", {
        controller: "associateController",
        templateUrl: "/app/views/associate.html",
        auth: true
    });

    $routeProvider.otherwise({ redirectTo: "/home" });

});

var serviceBase = 'http://localhost:26264/';

app.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'ngAuthApp'
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

app.run(['authService', '$route', '$rootScope', '$location', function (authService, $route, $rootScope, $location) {
    authService.fillAuthData();
    var authentication = authService.authentication;
    $rootScope.$on('$locationChangeStart', function (evt, next, current) {
        var nextPath = $location.path(),
          nextRoute = $route.routes[nextPath];
        if (nextRoute && nextRoute.auth && !authentication.isAuth) {
            $location.path("/home");
        }
    });
}]);