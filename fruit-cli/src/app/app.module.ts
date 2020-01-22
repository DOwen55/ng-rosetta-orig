import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';

import { FruitService } from './services/fruit.service';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';
import { FruitImageComponent } from './fruit-image/fruit-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FruitListComponent,
    FruitDetailComponent,
    FruitImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    WjGridModule,
    WjInputModule
  ],
  providers: [FruitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
