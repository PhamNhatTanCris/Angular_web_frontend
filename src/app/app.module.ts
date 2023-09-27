import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { HeaderComponent } from './header/header.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MangaComponent } from './manga/manga.component';
import { AnimeComponent } from './anime/anime.component';
import { IntroductComponent } from './introduct/introduct.component';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './sign-in/sign-in.component';


import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { SignInRfComponent } from './sign-in-rf/sign-in-rf.component';
import { RegisterComponent } from './register/register.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { CdkCoercionComponent } from './cdk-coercion/cdk-coercion.component';



//import {FormComponentComponent} from './form-component/form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ProgressBarComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    NoteListComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    MangaComponent,
    AnimeComponent,
    IntroductComponent,
    ProductComponent,
    ServiceComponent,
    SignInComponent,
    SignInRfComponent,
    RegisterComponent,
    HomePagesComponent,
    CdkCoercionComponent,
    // HeaderComponent,
    //HeaderComponent,
    //AddNoteComponent,
    //LoginFormComponent,

    //FormComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginFormComponent,
    AddNoteComponent,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule
    // HeaderComponent,
    //AppComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
