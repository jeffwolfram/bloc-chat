(function() {
    function RoomListCtrl(Room, Message, $uibModal){
        
        this.rooms = Room.all;
        this.messages;
        this.room = null;
        
        this.activeRoom = function(room){
            this.room = room;
            
            this.messages = Message.getByRoomId(room.$id);
            
        }
        this.send = function(newMessage) {
            Message.send(newMessage, this.room);
            console.log("this.send on rlctrl");
            this.textinput = '';
        };
        
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