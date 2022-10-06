
import { Component, Input, OnInit } from '@angular/core';
import productsdata from '../../products.json';
import { Products } from 'src/app/Products';
import { ProductService } from 'src/app/product.service';


@Component({
  selector: 'app-shop',
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
