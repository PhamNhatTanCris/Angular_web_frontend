import { Component, OnInit } from '@angular/core';
import { Author, authors } from '../author.model';
@Component({
  selector: 'app-author-list',
  template: `
    <app-author-detail *ngFor="let author of authors" [author]="author"
    (select)="onSelect($event)"
    (delete)="onDelete($event)"
    >
    </app-author-detail>
  <br>
  <div>author current selected: {{curentAuthor.firstName}} {{curentAuthor.lastName}}</div>

  `,
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit{
  authors = authors;
  curentAuthor = authors[0];

  onSelect(selectAuthor: Author){
    this.curentAuthor = selectAuthor;
  }
  onDelete(deleteAuthor: number){
    this.authors = this.authors.filter(author => {
        return author.id !== deleteAuthor;
      }
    );
    if(this.curentAuthor.id === deleteAuthor){
      this.curentAuthor = this.authors[0];
    }
  }


  constructor () {}
  ngOnInit(): void {

  }
}

