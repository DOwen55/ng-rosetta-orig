import { FruitItem } from './fruit.model';

describe('Fruit.Model', () => {
  it('should create an instance', () => {
    expect(new FruitItem(
        6,
        'Monster Fruit',
        'Monstera deliciosa',
        'Southern Mexico',
        // tslint:disable-next-line: max-line-length
        'https://en.wikipedia.org/wiki/Monstera_deliciosa',
        // tslint:disable-next-line: max-line-length
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Monstera_deliciosa_ripen_fruit_01.JPG/90px-Monstera_deliciosa_ripen_fruit_01.JPG'
    )).toBeTruthy();
  });
});
