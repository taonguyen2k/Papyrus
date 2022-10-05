import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/Products';

import { ShopComponent } from '../shop/shop.component';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  template : `<app-detail [products]="SelectedPro"></app-detail>`,
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() products: Products | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
