
(function(){
    function config($stateProvider, $locationProvider){
        $locationProvider
            .html5Mode({
            enabled:true,
            requireBase:false
        });
        $stateProvider
        .state('home', {
            url:'/',
            controller: 'HomeCtrl as home',
            templateUrl: '/templates/home.html'
        })
        
    };
    
    var app = angular.module('bloc-chat',
                        ['firebase',
                         'ui.router']);
    
    
    
})();








