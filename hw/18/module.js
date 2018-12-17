
function Note(datetime, desc) {
    this.datetime = datetime;
    this.desc = desc;
}

function noteModule() {
    const localStorage = window.localStorage;
    const localStorageKey = 'notes';

    function addNote(n) {
        const notes = getNotes();
        notes.push(n);
        localStorage.setItem(localStorageKey, JSON.stringify(notes));
    }

    function deleteNote(nIndex) {
        const notes = getNotes();
        notes.splice(nIndex, 1);
        localStorage.setItem(localStorageKey, JSON.stringify(notes));
    }

    function getNotes() {
        return JSON.parse(localStorage.getItem(localStorageKey) || '[]');
    }

    return {
        addNote: addNote,
        deleteNote: deleteNote,
        getNotes: getNotes
    }
}

const note1 = new Note(new Date(2018, 08, 28), 'asdasdasd');
const note2 = new Note(new Date(2018, 08, 28), 'asdasdasd');
const note3 = new Note(new Date(2018, 08, 28), 'asdasdasd');

const myModule = noteModule();
myModule.addNote(note1);
myModule.addNote(note2);
myModule.addNote(note3);
console.log(myModule.getNotes())
