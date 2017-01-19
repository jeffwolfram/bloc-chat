
(function() {
	function Message(User, Room, $cookies, $firebaseArray) {
		var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
		
		return {
			getByRoomId: function(roomId){ 
               var list;
			     ref.orderByChild('roomId').equalTo(roomId).on('value', function(d){
                 list = d.val();
                 });
                return list; 
			},
            send: function(newMessage, room){
                    console.log("submitted message from Message.send"); 
                    messages.$add({
                        content: "just testing",
                        roomId: roomlist.room,
                        sentAt: "today",
                        username: $cookies.get('blocChatCurrentUser')
                    });
            console.log(Room.roomId);
               
            }
          
		};
        
       
	}
    
	
	angular
		.module('blocChat')
		.factory('Message', [ 'User', 'Room', '$cookies', '$firebaseArray', Message ]);
})();