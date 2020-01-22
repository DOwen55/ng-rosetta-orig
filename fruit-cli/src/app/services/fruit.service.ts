import { Injectable } from '@angular/core';
import { FruitItem } from '../shared/fruit.model';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  public CurrentFruitItem: Subject<FruitItem> = new BehaviorSubject<FruitItem>(null);

  constructor() { }

  // The get detail method consumes an ID value and returns an Observable of the specified data object.
  public GetFruitItem(fruitItemId: number): Observable<FruitItem> {

    // Create an Observable of the payload by calling the RXJS of() method.
    return of(this._ExtractFruitItemFromList(fruitItemId));
  }

  public GetFruitListSync(): Array<any> {
    return [
      {
        id: 1,
        commonName: 'Strawberry Tree',
        species: 'Arbutus unedo',
        region: 'Mediteranian',
        // tslint:disable-next-line: max-line-length
        URL: 'https://en.wikipedia.org/wiki/Arbutus_unedo',
        // tslint:disable-next-line: max-line-length
        ImageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bowl_of_Strawberry_Tree_berries.jpg/220px-Bowl_of_Strawberry_Tree_berries.jpg'
      },
      {
        id: 2,
        commonName: 'Starfruit',
        species: 'Averrhoa carambola',
        region: 'Eastern Asia',
        // tslint:disable-next-line: max-line-length
        URL: 'https://en.wikipedia.org/wiki/Carambola',
        // tslint:disable-next-line: max-line-length
        ImageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Carambolas765pt.jpg/220px-Carambolas765pt.jpg'
      },
      {
        id: 3,
        commonName: 'Finger Lime',
        species: 'Citrus australasica',
        region: 'Australia',
        // tslint:disable-next-line: max-line-length
        URL: 'https://en.wikipedia.org/wiki/Citrus_australasica',
        // tslint:disable-next-line: max-line-length
        ImageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Citrus_australasica_brown_fruit1.JPG/220px-Citrus_australasica_brown_fruit1.JPG'
      },
      {
        id: 4,
        commonName: 'Buddha\'s Hand',
        species: 'Citrus medica var. sarcodactylis',
        region: 'China',
        // tslint:disable-next-line: max-line-length
        URL: 'https://en.wikipedia.org/wiki/Buddha%27s_hand',
        // tslint:disable-next-line: max-line-length
        ImageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Buddhas_hand_1.jpg/220px-Buddhas_hand_1.jpg'
      },
      {
        id: 5,
        commonName: 'Crowberry',
        species: 'Empetrum',
        region: 'South America',
        // tslint:disable-next-line: max-line-length
        URL: 'https://en.wikipedia.org/wiki/Empetrum',
        // tslint:disable-next-line: max-line-length
        ImageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Crowberries.jpg/220px-Crowberries.jpg'
      },
      {
        id: 6,
        commonName: 'Jackfruit',
        species: 'Artocarpus heterophyllus',
        region: 'South America',
        // tslint:disable-next-line: max-line-length
        URL: 'https://en.wikipedia.org/wiki/Jackfruit',
        // tslint:disable-next-line: max-line-length
        ImageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Jackfruit_hanging.JPG/220px-Jackfruit_hanging.JPG'
      },
      {
        id: 6,
        commonName: 'Monster Fruit',
        species: 'Monstera deliciosa',
        region: 'Southern Mexico',
        // tslint:disable-next-line: max-line-length
        URL: 'https://en.wikipedia.org/wiki/Monstera_deliciosa',
        // tslint:disable-next-line: max-line-length
        ImageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Monstera_deliciosa_ripen_fruit_01.JPG/90px-Monstera_deliciosa_ripen_fruit_01.JPG'
      },
      {
        id: 7,
        commonName: 'Honeyfruit',
        species: 'Melicoccus bijugatus',
        region: 'South & Central America',
        // tslint:disable-next-line: max-line-length
        URL: 'https://en.wikipedia.org/wiki/Melicoccus_bijugatus',
        // tslint:disable-next-line: max-line-length
        ImageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Melicoccus_bijugatus.jpg/220px-Melicoccus_bijugatus.jpg'
      },
      {
        id: 8,
        commonName: 'Strawberry Guava',
        species: 'Psidium littorale',
        region: 'Hawaii',
        // tslint:disable-next-line: max-line-length
        URL: 'https://en.wikipedia.org/wiki/Psidium_cattleyanum',
        // tslint:disable-next-line: max-line-length
        ImageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Psidium_cattleianum_fruit.jpg/220px-Psidium_cattleianum_fruit.jpg'
      },
      {
        id: 9,
        commonName: 'Sugar Plum',
        species: 'Borassus flabellifer',
        region: 'India',
        // tslint:disable-next-line: max-line-length
        URL: 'https://en.wikipedia.org/wiki/Borassus_flabellifer',
        // tslint:disable-next-line: max-line-length
        ImageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Fruits_of_Borassus_flabellifer.jpg/180px-Fruits_of_Borassus_flabellifer.jpg'
      },
      {
        id: 10,
        commonName: 'Dragon Fruit',
        species: 'Pitaya',
        region: 'Americas',
        // tslint:disable-next-line: max-line-length
        URL: 'https://en.wikipedia.org/wiki/Pitaya',
        // tslint:disable-next-line: max-line-length
        ImageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Pitaya_cross_section_ed2.jpg/220px-Pitaya_cross_section_ed2.jpg'
      }
    ];
  }

  public LoadFruitItem(fruitItemId: number): void {

    // Push the incoming Engagement object into the public BehaviorSubject.
    this.CurrentFruitItem.next(this._ExtractFruitItemFromList(fruitItemId));

  }

  private _ExtractFruitItemFromList(fruitItemId: number): FruitItem {
    const fruitList: Array<FruitItem> = this.GetFruitListSync();
    let fruitItem: FruitItem;

    // Then, iterate through each item, looking for the specified ID.
    fruitList.forEach((element: FruitItem) => {
      if (element.id && element.id === fruitItemId) {
        // When we find the correct item, cast it as the correct container type and return it.
        fruitItem = element as FruitItem;
      }
    });

    return fruitItem;
  }
}
