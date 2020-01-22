import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// Specify which features of our application we will require.
import { FruitItem } from '../shared/fruit.model';

interface IfruitFormGroup {
  imageURL: FormControl;
  id: FormControl;
  commonName: FormControl;
  species: FormControl;
  region: FormControl;
};

@Component({
  selector: 'app-fruit-detail',
  templateUrl: './fruit-detail.component.html',
  styleUrls: ['./fruit-detail.component.css']
})
export class FruitDetailComponent implements OnInit {

  fruitForm = new FormGroup({
    ImageURL: new FormControl(''),
    id: new FormControl(''),
    commonName: new FormControl(''),
    species: new FormControl(''),
    region: new FormControl(''),
    URL: new FormControl(''),
  });

  // Declare the variables used by the binding engine.
  public currentFruitItem: FruitItem;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.initializeFruitItem();
  }

  // Extract the data item from the route, cast it to the expected type to ensure we got what we expected.
  // Note that the propertyName specified in data['propertyName'] was specified on the route's resolver configuration.
  initializeFruitItem() {
    // tslint:disable-next-line: no-string-literal
    this.currentFruitItem = this.route.snapshot.data['fruitItem'] as FruitItem;

    this.setFruitForm(this.currentFruitItem);
  }

  setFruitForm(fruitItem: FruitItem) {
    this.fruitForm.setValue(fruitItem);
  }

  onCancel() {
    this.router.navigate(['fruit-list']);
  }

  onResetForm() {
    // Clear and reset all formControls.
    this.fruitForm.reset();

    // Reapply the
    this.initializeFruitItem();
  }

  onSubmitFruitForm() {
    this.currentFruitItem = this.fruitForm.value;
  }
}
