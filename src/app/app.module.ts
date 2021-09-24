import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PetComponent } from './pet/pet.component';
import { TestComponent } from './test/test.component';
import { FontSizeComponent } from './font-size/font-size.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BoldDirective } from './Directives/bold.directive';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PetComponent,
    TestComponent,
    FontSizeComponent,
    NotFoundComponent,
    BoldDirective,
    FormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
