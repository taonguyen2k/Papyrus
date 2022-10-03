import { Component } from '@angular/core';
import productsdata from '../app/products.json';
import { Products } from './Products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  // template: `<app-shop [products] = "products"></app-shop>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mainproject';

  products: Products[] = productsdata;
}
