import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';

// Specify which features of our application we will require.
// import { FruitItem } from '../shared/fruit.model';
import { FruitService } from '../services/fruit.service';
import { FruitItem } from '../shared/fruit.model';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css']
})
export class FruitListComponent implements OnInit {
  public fruitList: wjcCore.CollectionView;
  public loading: boolean;
  public detailRouteOption = 'route_resolver';
  public toolbarConfigurationData: any[];
  public gridcols: wjcGrid.Column[];

  private initialFruitItemID: -1;

  constructor(private router: Router, private fruitService: FruitService) {
    const routerService = this.router;
  }

  ngOnInit() {
    this.getFruitList();
  }

  // Execute a data service call. Persist the resulting data in class level variable to allow the binding engine to access it.
  private getFruitList(): void {
    // Enable the loading flag.
    this.loading = true;

    // Convert the resulting array into a wijmo CollectionView.
    this.fruitList = new wjcCore.CollectionView(this.fruitService.GetFruitListSync());

    // Unselect all items to ensure that the onCurrentChanged event fires for all rows, including row 1.
    this.fruitList.currentPosition = -1;

    // Attach the loadDetail method to the grid's onCurrentChanged event.
    this.fruitList.onCurrentChanged = (e: wjcCore.EventArgs ) => this.loadDetail(e);

    // Disable the loading flag.
    this.loading = false;
  }

  // Consume the grid's row selection event arguments and navigate to the detail route.
  public loadDetail(e: wjcCore.EventArgs): void {
    // Extract the ID of the data item represented by the selected row.
    const fruitItemID: number = (this.fruitList.currentItem as FruitItem).id as number;

    // Navigate to the detail route, passing the data item ID as a route parameter via the syntax: ['route name', 'parameter1 value'].
    // Note that the detail route declaration maps the incoming value via the 'fruit-detail/:id' route definition.
    if ( this.detailRouteOption === 'route_resolver') {

      // Note that using the Route Resolver option, any value being passed into the parameter1 value will be
      // accessable in the Route Resolver via ActivatedRoute.params['id'].
      this.router.navigate(['fruit-detail', fruitItemID]);

    } else {

      // Note that using the Complex Route option, any value being passed into the parameter1 value will be
      // accessable in the recieving Component via ActivatedRoute.params['id'].
      // this.router.navigate(['fruit-detail-complex', fruitItemID]);
    }
  }

}
