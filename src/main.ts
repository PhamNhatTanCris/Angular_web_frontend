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
import { HomeComponent } from './app/home/home.component';
import { MangaComponent } from './app/manga/manga.component';
import { AnimeComponent } from './app/anime/anime.component';
import { IntroductComponent } from './app/introduct/introduct.component';
import { ProductComponent } from './app/product/product.component';
import { ServiceComponent } from './app/service/service.component';
import { HeaderComponent } from './app/header/header.component';
import { enableProdMode } from '@angular/core';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
