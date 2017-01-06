(function() {
    function ModalCtrl($uibModalInstance, Room){
        this.cancel = function() {
            $uibModalInstance.close();
        };

        
    this.addRoom = function(newroomname) {//add room
        Room.add(newroomname);
        $uibModalInstance.close();
   
    };
    
    }
    
    angular
         .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();