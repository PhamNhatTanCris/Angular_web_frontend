import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoteListComponent } from './note-list/note-list.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { AnimeComponent } from './anime/anime.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { IntroductComponent } from './introduct/introduct.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MangaComponent } from './manga/manga.component';
import { ProductComponent } from './product/product.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ServiceComponent } from './service/service.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInRfComponent } from './sign-in-rf/sign-in-rf.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'note-list', component: NoteListComponent},
  {path: 'add-note', component: AddNoteComponent},
  {path: 'login-form', component: LoginFormComponent},
  {path: 'author-list', component: AuthorListComponent},
  {path: 'progress-bar', component: ProgressBarComponent},
  {path: 'manga', component: MangaComponent},
  {path: 'anime', component: AnimeComponent},
  {path: 'introduct', component: IntroductComponent},
  {path: 'product', component: ProductComponent},
  {path: 'service', component: ServiceComponent},
  {path:'sign-in', title:'sign-in form', component: SignInComponent},
  {path:'sign-in-rf', title:'sign-in form rf', component: SignInRfComponent},
  {path: '**', component: AuthorDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
