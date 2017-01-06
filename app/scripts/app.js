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
        
        .state('room', {
            url:'/room',
            controller: 'RoomListCtrl as roomCtrl',
            templateUrl: '/templates/room_list.html'
        })
          .state('modal', {
            url:'/add-room',
            controller: 'Modal.Ctrl',
            templateUrl: '/templates/modal.html'
        });
     
        
        
    }
    
     angular
         .module('blocChat', ['ui.router','firebase', 'ui.bootstrap'])
         .config(config);
    
    
})();