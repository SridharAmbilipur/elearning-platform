import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddQuestionComponent } from './components/admin/add-question.component';
import { NavMenuComponent } from './components/layout/nav-menu.component';
import { MathjaxComponent } from './components/math-jax/math-jax.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    AddQuestionComponent,
    MathjaxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
