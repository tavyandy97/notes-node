// var obj = {
// 	name : 'Taveesh'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof(stringObj));
// console.log(stringObj);

// var personString = '{"name": "Andrew" , "age" : 26}';
// var person = JSON.parse(personString);
// console.log(typeof(person));
// console.log(person);

const fs = require('fs');

var originalNote = {
	title :'Sample title',
	body : 'Sample body'
}

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json' , originalNoteString);

var noteString = fs.readFileSync('notes.json');

let note = JSON.parse(noteString);

console.log(typeof(note));
console.log(note.title);