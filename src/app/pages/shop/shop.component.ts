import { Component, Input, OnInit } from '@angular/core';
import productsdata from '../../products.json';
import { Products } from '../../Products';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  @Input() products: Products[] = productsdata;

  constructor() { }

  ngOnInit(): void {
  }

}
