import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import 'zone.js/dist/zone';

import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';

import { NoteListComponent } from './app/note-list/note-list.component';
import { AddNoteComponent } from './app/add-note/add-note.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { LoginFormComponent } from './app/login-form/login-form.component';
import { AuthorListComponent } from './app/author-list/author-list.component';
import { AuthorDetailComponent } from './app/author-detail/author-detail.component';
import { ProgressBarComponent } from './app/progress-bar/progress-bar.component';

const routes: Routes = [
  {path: '', component: LoginFormComponent},
  {path: 'note-list', component: NoteListComponent},
  {path: 'add-note', component: AddNoteComponent},
  {path: 'login-form', component: LoginFormComponent},
  {path: 'author-list', component: AuthorListComponent},
  {path: 'progress-bar', component: ProgressBarComponent},
  {path: '**', component: AuthorDetailComponent},

];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
})

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
