(function() {
    function RoomListCtrl(Room, $uibModal){
        this.rooms = Room.all;

        
        this.openModal = function(){
            $uibModal.open({
                controller: 'ModalCtrl',
                controllerAs: '$ctrl',
                templateUrl: '/templates/modal.html',
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                size: 'sm',
                appendTo: undefined,
                animation: true
            })
        };
    }
    
    angular
    .module('blocChat')
    .controller('RoomListCtrl', ['Room', '$uibModal', RoomListCtrl]);
})();