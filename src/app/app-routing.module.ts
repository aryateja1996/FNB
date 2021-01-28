import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'services',component:ServicesComponent},
  {
    path:'contact us',component:ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
