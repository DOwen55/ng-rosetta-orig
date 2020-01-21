import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
    let comp: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    // Use the Angular TestBed to create an instance of an Angular module with the necessary dependencies
    // and the target component.
    beforeEach(async(() => {

        TestBed.configureTestingModule({
            imports: [
              FormsModule,
              RouterTestingModule
            ],
            declarations: [HomeComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        // Use the configured TestBed to create an instance of the target component.
        fixture = TestBed.createComponent(HomeComponent);

        // Extract a handle to the component instance.
        comp = fixture.componentInstance;

        // Inspect the component's template, looking for an element with the css class: big-heading
        // and convert the result to a native Html element.
        de = fixture.debugElement.query(By.css('.big-heading'));
        el = de.nativeElement;

    });

    it('should display original title', () => {
        fixture.detectChanges();
        expect(el.textContent).toContain('Home Component');
    });

});
