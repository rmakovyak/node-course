const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
const command = argv._[0];

console.log(`Command:${command}`);

switch (command) {
  case 'add':
    (() => {
      const response = notes.addNote(argv.title, argv.body);
      const message = response ? 'Note added' : 'Note existed';
      console.log(message);
    })();
    break;
  case 'list':
    (() => {
      const response = notes.getAll();
      const message = response.length ? response : 'No notes found';
      console.log(message);
    })();
    break;
  case 'read':
    (() => {
      const response = notes.getNote(argv.title);
      const message = response ? response : 'No note found';
      console.log(message);
    })();
    break;
  case 'remove':
    (() => {
      const response = notes.removeNote(argv.title);
      const message = response ? 'Note removed' : 'No note found';
      console.log(message);
    })();
    break;
  default:
    console.log('command not recognized');
}
