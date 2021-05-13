import { NumberFormatStyle } from "@angular/common";

export interface Note
{
  id?: number;
  date: Date;
  name: string;
  text: string;
  editStatus: boolean;
}

export let NotesDatabase: Note[] = [];

NotesDatabase.push({id: 1, date: new Date, name: 'Note', text: 'Note Note Note', editStatus: false})
NotesDatabase.push({id: 2, date: new Date, name: 'Note1', text: 'Note1 Note1 Note1', editStatus: false})
console.log(NotesDatabase);