(function() {
    function RoomListCtrl(Room, Message, $uibModal){
        this.rooms = Room.all;
        this.messages;
        this.room = null;
        
        this.activeRoom = function(room){
            this.room = room.name;

            this.messages = Message.getByRoomId(room.$id);
            console.log(this.messages.length);
        }
        
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
    .controller('RoomListCtrl', ['Room', 'Message', '$uibModal', RoomListCtrl]);
})();