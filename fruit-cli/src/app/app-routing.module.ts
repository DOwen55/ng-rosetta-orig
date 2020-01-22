import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';
import { FruitDetailResolver } from './services/fruit-resolver.service';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'fruit-list', component: FruitListComponent },

  // Note that this route expects an id value after the detail route,
  // it also specifies that a resolver be used during route activation.
  // Note that the property name given to the resolve object becomes the
  // property name on the ActivatedRoute's snapshot.data property in the consuming Component.
  {
    path: 'fruit-detail/:id',
    component: FruitDetailComponent,
    resolve: { fruitItem: FruitDetailResolver }
  },

  // Default to the Home component if the specified path is not recognized.
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
