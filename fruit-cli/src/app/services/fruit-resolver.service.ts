import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

// Specify which features of our application we will require.
import { FruitItem } from '../shared/fruit.model';
import { FruitService } from './fruit.service';

// Ensure that all providers are decorated with @Injectable, and registered in their parent ngModel's
// and any consuming component's providers collection.
@Injectable({
  providedIn: 'root'
})
// Implementing the Resolve<type> allows the class to publish the resolve method,
// which is consumed by the routing engine.
export class FruitDetailResolver implements Resolve<FruitItem> {
    // Instantiate our data service to allow the resolver to request the item
    // specified on the route parameters.
    constructor(private fruitService: FruitService) {}

    // Pass the activateed route and state into the resolve method and specify the type of object to be returned.
    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FruitItem> {
      // tslint:disable-next-line: no-string-literal
      const fruitItemID: number = Number(route.params['id']);

      if (fruitItemID && !Number.isNaN(fruitItemID)) {
        // Extract the specified id from the activated route parameters, and pass it into the service call.
        return this.fruitService.GetFruitItem(fruitItemID);
      }
    }
}
