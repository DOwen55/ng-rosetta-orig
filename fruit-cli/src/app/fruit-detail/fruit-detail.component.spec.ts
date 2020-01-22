import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

import { FruitDetailComponent } from './fruit-detail.component';
import { FruitImageComponent } from '../fruit-image/fruit-image.component';

describe('FruitDetailComponent', () => {
    let comp: FruitDetailComponent;
    let fixture: ComponentFixture<FruitDetailComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    // Create a faux payload to simulate the fruit-resolver service providing a fruit item
    // in the activatedRoute.data property.
    // We will import this route stub as a provider in the TestBed below, and then test that the
    // payload is properly loaded into the component.
    const activatedRouteRouteStub = {
        snapshot: {
            data: {
                fruitItem: {
                    id: 1,
                    commonName: 'Strawberry Tree',
                    species: 'Arbutus unedo',
                    region: 'Mediteranian',
                    URL: 'https://en.wikipedia.org/wiki/Arbutus_unedo',
                    // Note that the following comment line disables tslint warning caused by the length of the url.
                    // tslint:disable-next-line: max-line-length
                    ImageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bowl_of_Strawberry_Tree_berries.jpg/220px-Bowl_of_Strawberry_Tree_berries.jpg'
                }
            }
        }

    };

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                RouterTestingModule
            ],
            declarations: [
                FruitDetailComponent,
                FruitImageComponent
            ],
            providers: [ {
              provide: ActivatedRoute,
              useValue: activatedRouteRouteStub
            }]
        })
        .compileComponents();
    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(FruitDetailComponent);

        comp = fixture.componentInstance;

        de = fixture.debugElement.query(By.css('.big-heading'));
        el = de.nativeElement;

    });

    it('should display original title', () => {
        fixture.detectChanges();
        expect(el.textContent).toContain('Fruit Detail');
    });

    it('should load the Strawberry Tree', () => {
      fixture.detectChanges();
      expect(comp.currentFruitItem.commonName).toBe('Strawberry Tree');
    });

});
