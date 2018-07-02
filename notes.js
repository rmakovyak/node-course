const fs = require('fs');

const fetchNotes = () => {
  try {
    const notesJSON = fs.readFileSync('notes.json');
    return JSON.parse(notesJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = notes => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  const notes = fetchNotes();

  const duplicateNotes = notes.filter(el => el.title === title);

  if (!duplicateNotes.length) {
    notes.push({
      title,
      body
    });
    saveNotes(notes);
    return notes;
  }
};

const getAll = () => {
  return fetchNotes();
};

const removeNote = title => {
  const notes = fetchNotes();
  const targetNoteIndex = notes.findIndex(el => el.title === title);
  if (targetNoteIndex > -1) {
    const removedNote = { ...notes[targetNoteIndex] };
    notes.splice(targetNoteIndex, 1);
    saveNotes(notes);
    return removedNote;
  }
};

const getNote = title => {
  const notes = fetchNotes();
  return notes.find(el => el.title === title);
};

module.exports = {
  addNote,
  getAll,
  removeNote,
  getNote
};
