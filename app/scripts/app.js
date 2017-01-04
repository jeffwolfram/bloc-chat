(function(){
    function config($stateProvider, $locationProvider){
        $locationProvider
            .html5Mode({
            enabled: true,
            requireBase: false
        });
        $stateProvider
        .state('home', {
            url:'/',
            controller: 'HomeCtrl as home',
            templateUrl: '/templates/home.html'
        })
         $stateProvider
        .state('room', {
            url:'/',
            controller: 'RoomListCtrl as roomCtrl',
            templateUrl: '/templates/room_list.html'
        });
        
    }
    
     angular
         .module('blocChat', ['ui.router','firebase'])
         .config(config);
    
    
})();