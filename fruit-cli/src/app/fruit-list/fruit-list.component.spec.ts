import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';

import { FruitListComponent } from './fruit-list.component';

describe('Fruit-List Component', () => {
    let comp: FruitListComponent;
    let fixture: ComponentFixture<FruitListComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    // Use the Angular TestBed to create an instance of an Angular module with the necessary dependencies
    // and the target component.
    beforeEach(async(() => {

        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                HttpClientModule,
                RouterTestingModule,
                NgbModule,
                WjGridModule,
                WjInputModule
            ],
            declarations: [FruitListComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        // Use the configured TestBed to create an instance of the target component.
        fixture = TestBed.createComponent(FruitListComponent);

        // Extract a handle to the component instance.
        comp = fixture.componentInstance;

        // Inspect the component's template, looking for an element with the css class: big-heading
        // and convert the result to a native Html element.
        de = fixture.debugElement.query(By.css('.big-heading'));
        el = de.nativeElement;

    });

    it('should display original title', () => {
        fixture.detectChanges();
        expect(el.textContent).toContain('List');
    });

    it('should contain 12 fruit items.', () => {
      fixture.detectChanges();
      expect(comp.fruitList.itemCount).toEqual(11);
    });

});
