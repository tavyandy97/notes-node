const fs = require('fs');

var fetchNotes = () => {
	try{
		return JSON.parse(fs.readFileSync('notes-data.json'));
	}catch (e){
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json' , JSON.stringify(notes));
};

var addNote = (title , body) => {
	let notes = fetchNotes();
	let note = {
		title,
		body
	};

	let duplicateNotes = notes.filter((note) => note.title===title);
	if (duplicateNotes.length ===0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};

var getAll = () => {
	return fetchNotes();
};

var getNote = (title) => {
	let notes = fetchNotes();
	let filteredNote = notes.filter((note) => note.title === title);
	return filteredNote[0];
};

var removeNote = (title) => {
	let notes = fetchNotes();
	let filteredNotes = notes.filter((note) => note.title !== title);
	saveNotes(filteredNotes);
	return (notes.length !==filteredNotes.length );
};

var logNotes = (note) => {
	debugger;
	console.log(`Title : ${note.title}`);
	console.log('-----------------');
	console.log(note.body);
};

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
	logNotes
};