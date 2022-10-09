import { Component, OnInit } from '@angular/core';
import productsdata from '../../products.json';
import { Products } from 'src/app/Products';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  products: Products[] = productsdata;

  constructor(private productService: ProductService) { }

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

}
