import { Component } from '@angular/core';
import { NOTES } from '../notes';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent {
  notes = NOTES;

  show(title: string) {
    alert(title);
  }
}
