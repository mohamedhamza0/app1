import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CategoriesComponent } from './categories/categories.component';
import { SignupComponent } from './signup/signup.component';
import { FeaturesComponent } from './features/features.component';
import { IcecoffeComponent } from './icecoffe/icecoffe.component';

const routes: Routes = [
  {path:'',redirectTo:'signup',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'categories',component:CategoriesComponent ,children:[
    {path:'icecoffe',component:IcecoffeComponent}
  ]},
  {path:'signup',component:SignupComponent},
  {path:'features',component:FeaturesComponent},
  {path:'**',component:NotfoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
