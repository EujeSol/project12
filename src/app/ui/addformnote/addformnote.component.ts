import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note, NotesDatabase } from 'src/app/shared/note.model';

@Component({
  selector: 'app-addformnote',
  templateUrl: './addformnote.component.html',
  styleUrls: ['./addformnote.component.css']
})
export class AddformnoteComponent implements OnInit {
 
  title: string;
  text: string;

  @Output() addNote = new EventEmitter<Note>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddNote ()
  {
    let note: Note = 
    {id: NotesDatabase.length + 1, date: new Date, name: this.title, text: this.text, editStatus: false}
    this.addNote.emit(note);
    this.title = "";
    this.text = '';

  }
}
