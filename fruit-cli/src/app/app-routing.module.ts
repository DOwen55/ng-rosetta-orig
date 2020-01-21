import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'fruit-list', component: FruitListComponent },

  // Default to the Home component if the specified path is not recognized.
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
