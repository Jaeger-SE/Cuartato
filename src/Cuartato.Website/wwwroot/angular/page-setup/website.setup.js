﻿(function() {
    "use strict";

    function config($httpProvider, $stateProvider, $urlRouterProvider) {
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }

        $httpProvider.defaults.headers.get["If-Modified-Since"] = "Mon, 26 Jul 1997 05:00:00 GMT";
        $httpProvider.defaults.headers.get["Cache-Control"] = "no-cache";
        $httpProvider.defaults.headers.get["Pragma"] = "no-cache";

        // Routes
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "/page/home"
            })
            .state("about", {
            
            });
    };

    config.$inject = ["$httpProvider", "$stateProvider", "$urlRouterProvider"];
    angular.module("cuartato", ["kass-ui", "ngTouch", "ui.router", "cuartato-services", "ngAnimate"]).config(config);
})();