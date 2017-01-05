(function() {
  var list = $firebaseArray(ref);
list.$add({ foo: "bar" }).then(function(ref) {
  var id = ref.key;
  console.log("added record with id " + id);
  list.$indexFor(id); // returns location in the array
});
  angular
    .module('blocChat')
    .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', '$scope', ModalInstanceCtrl]);
})();