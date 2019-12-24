const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const titleOptions = 
{
	describe:'Title of the note',
	demand: true,
	alias:'t'
};
const bodyOptions = 
{
	describe:'Body of the note',
	demand:true,
	alias:'b'
}
const argv = yargs
	.command('add','Add a new note',{
		title :titleOptions,
		body: bodyOptions
	})
	.command('list','List all notes')
	.command('read','Read a note',{
		title :titleOptions
	})
	.command('remove','Remove a note',{
		title :titleOptions
	})
	.help()
	.argv;
var command = argv._[0];


if( command ==  'add') {
	let note = notes.addNote(argv.title,argv.body);
	if(note){
		console.log('Note Created');
		notes.logNotes(note);
	}
	else{
		console.log('Book with the given title already exists!');
	}
} else if (command == 'list') {
	var allNotes = notes.getAll();
	allNotes.forEach((note) => notes.logNotes(note));
} else if (command == 'read') {
	let note = notes.getNote(argv.title);
	if(note){
		notes.logNotes(note);
	}
	else {
		console.log(`Note with title ${argv.title} not found!`);
	}
} else if (command == 'remove') {
	let note = notes.removeNote(argv.title);
	let message = note ? `Note with title ${argv.title} has been removed !` : `Note with title ${argv.title} not found!`;
	console.log(message);
} else {
	console.log('Command not recognized!!')
}
