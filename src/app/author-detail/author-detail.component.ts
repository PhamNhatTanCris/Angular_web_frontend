import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from '../author.model';

@Component({
  selector: 'app-author-detail',
  template: `<div style="margin: 5px 5px">
  {{ author.firstName }} {{ author.lastName }}
  <button style="margin: 5px 5px" (click)="select.emit(author)">select</button>
  <button style="margin: 5px 5px" (click)="delete.emit(author.id)">delete</button>
</div>

`,
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit{
  @Input() author!: Author;
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();
  constructor() {

  }
  ngOnInit(): void {

  }

  handleDelete() {

  }
}
