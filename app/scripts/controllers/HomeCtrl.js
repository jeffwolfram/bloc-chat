(function() {
    function HomeCtrl(){
        this.heroTitle = "Bloc Chat App"
    };
    
    angular
    .module('blocChat')
    .controller('HomeCtrl', HomeCtrl);
})();