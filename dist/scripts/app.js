(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA43vCSBA4_79187AbPH9NnxHmH9O8Ir0Y",
    authDomain: "bloc-chat-51e80.firebaseapp.com",
    databaseURL: "https://bloc-chat-51e80.firebaseio.com",
    storageBucket: "bloc-chat-51e80.appspot.com",
    messagingSenderId: "1018101314147"
  };
  firebase.initializeApp(config);

})();






var app = angular.module('bloc-chat',
                        ['firebase',
                         'ui.router']);

.config(function($stateProvider){
    
    $stateProvider
    .state('home', {
        url:'/',
        templateUrl:'home/home.html'
    })
})
