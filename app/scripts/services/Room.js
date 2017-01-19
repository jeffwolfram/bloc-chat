(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
      
    var add = function(roomName){
        console.log("room add");
        rooms.$add({
            name: roomName
        })
    };
//      $firebaseArray
  

    return {
      all: rooms,
      add: add
    };
      return room.name;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();

    

