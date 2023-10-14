import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  filteredProducts:any[]=[]//: Product[]
  productArray:any[] =[]
  isresultLoaded = false;
  constructor(private router: Router , private http: HttpClient){
      this.getAllProducts();
  }

  navigateToBranch() {
    this.router.navigate([]);
  }

  getAllProducts()
  {
    this.http.get("http://localhost:8085/api/product")
    .subscribe((resultData: any)=>
    {
        this.isresultLoaded = true;
        console.log(resultData.data);
        this.productArray=this.filteredProducts = resultData.data;
        console.log(this.productArray);
        
    });
  }
}
