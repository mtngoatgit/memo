angular
    .module('noteApp')
    .controller("MainCtrl", MainCtrl);

function MainCtrl ($scope, noteService) {

$scope.saveNote = function(newNote){
    $scope.note = {};
    noteService.addNote(newNote);
   
}

 getNotes();

function getNotes() {
    noteService.getNotes().then(function(response){
        $scope.notes = response;
    });  
}

getNotes();


} //end of controller


    
     