import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() date: Date;
  @Input() title: string;
  @Input() text: string;
  @Input() id: number;

  @Output() deleteNote = new EventEmitter<number>();
  @Output() changeEditStatus = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteNote(id: number)
  {
    this.deleteNote.emit(id);
  }

  onChangeEditStatus(id: number)
  {
    this.changeEditStatus.emit(id);
  }
}
