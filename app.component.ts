import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular29-lab1';
  @ViewChild('productList')
  productList:ProductListComponent;

  ngOnInit(): void {
    this.productList.products = [
      {
        name:'NEW_iphone',
        price:5000
      }
    ]
    }
}
