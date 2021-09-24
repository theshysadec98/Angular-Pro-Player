import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FontSizeComponent } from './font-size/font-size.component';
import { PetComponent } from './pet/pet.component';
import { TestComponent } from './test/test.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormComponent } from './form/form.component';
const routes: Routes = [
  { path: "", component: HomeComponent},
 { path: "home", component: HomeComponent },
 { path: "font", component: FontSizeComponent },
 { path: "test", component: TestComponent},
 { path: "pet", component: PetComponent},
 {path: "form", component: FormComponent},
 { path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
