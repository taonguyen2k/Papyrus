import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/Products';
import productsdata from "../../products.json"

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  products : Products[] = productsdata;

  constructor() { }

  ngOnInit(): void {
  }

}
