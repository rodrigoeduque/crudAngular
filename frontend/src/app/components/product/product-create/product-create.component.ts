import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProductService } from './../product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto Criado')
      this.router.navigate(['/products'])

      //teste console log inserção

            console.log('Produto Adicionado!')
            console.log('código: ' + this.product.id)
            console.log('name: ' + this.product.name)
            console.log('price: ' + this.product.price)
      
    })

  }

  cancel(): void {
    this.productService.showMessage('Cancelando')
    this.router.navigate(['/products'])
  }



}
