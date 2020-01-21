import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';

// Specify which features of our application we will require.
// import { FruitItem } from '../shared/fruit.model';
import { FruitService } from '../services/fruit-service';
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

  public loadDetail(e: wjcCore.EventArgs): void { }

}
