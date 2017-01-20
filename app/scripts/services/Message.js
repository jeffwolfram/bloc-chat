
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
                    messages.$add({
                        content: newMessage,
                        roomId: room.$id,
                        sentAt:"9:22am",
                        username: $cookies.get('blocChatCurrentUser')
                    });
                    
               
            }
          
		};
        
       
	}
    
	
	angular
		.module('blocChat')
		.factory('Message', [ 'User', 'Room', '$cookies', '$firebaseArray', Message ]);
})();