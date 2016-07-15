angular
    .module('noteApp')
    .service('noteService', noteService);

function noteService($q) {


this.addNote = function(note) {
    var existingEntries = JSON.parse(localStorage.getItem('notes'));
    if (!existingEntries) {
       existingEntries = [];
        console.log(existingEntries)
    }
    existingEntries.push(note);
    
    localStorage.setItem('notes', JSON.stringify(existingEntries));
};

this.getNotes = function() {
    var deferred = $q.defer();
    deferred.resolve(JSON.parse(localStorage.getItem('notes')));
    return deferred.promise;
}




}  //end of service