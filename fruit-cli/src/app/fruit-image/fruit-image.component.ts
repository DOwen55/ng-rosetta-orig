import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fruit-image',
  templateUrl: './fruit-image.component.html',
  styleUrls: ['./fruit-image.component.css']
})
export class FruitImageComponent {
  @Input() targetUrl: string;
  @Input() imageUrl: string;
}
