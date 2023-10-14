import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  productArray:any[] =[]
  isresultLoaded = false;
  categoryArray:any[]=[]

  name: string ="";
  category_Name : string = ""
  from: string ="";
  to: string ="";
  num:number = 0
  c_Qty : number = 0
  constructor(private http: HttpClient )
  {
    this.getAllProducts();
    this.getAllCategory()
  }
  getAllProducts()
  {
    this.http.get("http://localhost:8085/api/product")
    .subscribe((resultData: any)=>
    {
        this.isresultLoaded = true;
        this.productArray=resultData.data;
    });
    return this.productArray        
  }

  getAllCategory(){
    this.http.get("http://localhost:8085/api/category")
    .subscribe((resultData: any)=>
    {
        this.isresultLoaded = true;
        console.log(resultData.data);
        this.categoryArray = resultData.data;        
    });
  }

  order(){
    this.getAllProducts().forEach((x)=>{
      if(x.name === this.name){
        this.updateRecords(x)           
      }
    
    })
  }

  updateRecords(x:any){
    let currentQty = x.qty_crt - this.num

    for(let i = 1 ; i<= this.getAllProducts().length ;i++){
      
      if(x.storeId == this.to){
        console.log("yessssssssss");
        this.c_Qty = x.qty_crt 
        break;
      }
    }  
      
        let bodyData = {
          "name":this.name,
          "currentQty": currentQty,
          "cty" :( this.c_Qty) - (-this.num),
          "category_Name" :this.category_Name,
          "nums_new":this.num ,
          "qty_pcs":x.qty_pcs,
          "storeId":x.storeId
        }
        console.log(currentQty , "qty" , x.qty_crt);
        
        this.http.put("http://localhost:8085/api/orders" + "/" + x.id +"/" + this.from + "/" + this.to + "/" + this.name  , bodyData).subscribe((res:any)=>{
                  // this.getAllProducts();             
        })

        window.location.reload();
  }

}
