import { Component, Input, OnInit } from '@angular/core';
import productsdata from '../../products.json';
import { Products } from 'src/app/Products';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-shop',

  template: `
    <div class="col-lg-4 col-md-6 col-sm-12 pb-1" *ngFor=" let products of products | paginate: { itemsPerPage: 9, currentPage: p, totalItems: total}"> ... </div>
               
    <pagination-controls (pageChange)="p = $event"></pagination-controls>`,

  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: Products[] = productsdata;

  p: number = 1;  
  total: number = this.products.length;
  
  constructor(private productService: ProductService) { 

  }

  getProductsFromServices(){
    // this.products = this.productService.getProduct()
    this.productService.getProduct().subscribe(
      (updatedProducts) => {
        this.products = updatedProducts
      }
    )
  }

  ngOnInit(): void {
    this.getProductsFromServices()
  }

  SelectedPro : Products | undefined;

  onSelect(pro:Products): void {
    this.SelectedPro = pro;
    console.log(`SelectedPro = ${JSON.stringify(this.SelectedPro)}`)
  }
}
