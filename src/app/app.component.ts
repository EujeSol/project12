import { Component } from '@angular/core';
import { Note, NotesDatabase} from './shared/note.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LR11';
  notes: Note[] = NotesDatabase;

  onDeleteNote(id: number) 
  {
   let index = this.notes.findIndex( (note) => note.id === id);
   if(index !== -1)
   this.notes.splice(index, 1);
  }

  onChangeEditStatus(id: number)
  {
    let index = this.notes.findIndex( (note) => note.id === id);
    console.log(this.notes[index])
   this.notes[index].editStatus = true; 
  }

  onAddNote(note: Note)
  {
    this.notes.push(note);
  }

  onEditNote(note: Note)
  {
    console.log("ворк");
    let index = this.notes.findIndex( (newNote) => newNote.id === note.id);
    this.notes[index] = note;
  }
}


