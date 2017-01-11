
(function() {
	function Message($firebaseArray) {
		var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
		
		return {
			getByRoomId: function(roomId) {
                var list;
			     ref.orderByChild('roomId').equalTo(roomId).on('value', function(d){
                     list = d.val();
                 });
                return list;
			}
		};
	}
	
	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message ]);
})();