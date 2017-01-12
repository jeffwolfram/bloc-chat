(function(){
    function config($stateProvider, $locationProvider){
        $locationProvider
            .html5Mode({
            enabled: true,
            requireBase: false
        });
        $stateProvider
        .state('room', {
            url:'/',
            controller: 'RoomListCtrl as roomCtrl',
            templateUrl: '/templates/room_list.html'
        })
          .state('modal', {
            url:'/add-room',
            controller: 'Modal.Ctrl',
            templateUrl: '/templates/modal.html'
        })
        .state('cookies', {
            url:'/username',
            controller: 'CookieCtrl',
            templateUrl: '/templates/username-modal.html'
        });
     
        
        
    }
    
     angular
         .module('blocChat', ['ui.router','firebase', 'ngCookies', 'ui.bootstrap'])
         .config(config);
    
    
})();