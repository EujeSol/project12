import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/shared/note.model';

@Component({
  selector: 'app-editformnote',
  templateUrl: './editformnote.component.html',
  styleUrls: ['./editformnote.component.css']
})
export class EditformnoteComponent implements OnInit {

  constructor() { }

  @Output() editNote = new EventEmitter<Note>();

  @Input() edNote: Note;

  title: string;
  text: string;

  ngOnInit(): void {
  }

  onEditNote ()
  {
    let note: Note = 
    {id: this.edNote.id, date: new Date, name: this.edNote.name, text: this.edNote.text, editStatus: false}
    this.editNote.emit(note);
  }

}
