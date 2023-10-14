import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shegole-b',
  templateUrl: './shegole-b.component.html',
  styleUrls: ['./shegole-b.component.css']
})
export class ShegoleBComponent {
  filteredProducts:any[]=[]//: Product[]
  productArray:any[] =[]
  categoryArray:any[]=[]
  isresultLoaded = false;
  isUpdated =false;
  showForm = false
  btnName = "Add"

  name: string ="";
  categoryId :string ="";
  storeID :string ="";
  qty_pcs : string ="";
  qty_crt :string =""
  proID ="";

  constructor(private http: HttpClient )
  {
    this.getAllCategory()
    this.getAllProducts();
  }

  ngOnInit(): void {
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
  Add(){
    this.showForm = !this.showForm
    if(this.showForm){
      this.btnName = "Close Form"
    }
    else{
      this.btnName = "Add "
  
    }
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
  register()
  {
   // this.isLogin = false;
   // alert("hi");
    let bodyData = {
      "name" : this.name,
      "categoryId" : this.categoryId,
      "storeID" : this.storeID,
      "qty_pcs":this.qty_pcs,
      "qty_crt":this.qty_crt

    };
 
    this.http.post("http://localhost:8085/api/product/add",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Product Registered Successfully")
        this.getAllProducts();
    });
  }
 
  setUpdate(data: any)
  {
    this.showForm = !this.showForm

   this.name = data.name;
   this.categoryId = data.categoryName;
   this.storeID = data.storeID;
   this.qty_pcs = data.qty_pcs;
   this.qty_crt = data.qty_crt;

 
   this.proID = data.id;
  }

  UpdateRecords()
  {
    let bodyData = {
      "name" : this.name,
      "categoryId" : this.categoryId,
      "storeID" : this.storeID,
      "qty_pcs":this.qty_pcs,
      "qty_crt":this.qty_crt,

    };
    
    this.http.put("http://localhost:8085/api/product"+ "/"+ this.proID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Product Registered Updateddd")
        this.getAllProducts();
      
    });
  }
  save()
  {
    if(this.proID == '')
    {
        this.register();
        console.log("registered");
        
    }
      else
      {
       this.UpdateRecords();
      }      
 
  }
 
  setDelete(data: any)
  {
    this.http.delete("http://localhost:8085/api/product/delete"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Product Deletedddd")
        this.getAllProducts();
    });
  }

  filterProduct(query:string)
    {
      this.filteredProducts=(query) ? this.productArray.filter(p=>p.name?.toLowerCase().includes(query.toLowerCase()))
      : this.productArray
    }
}
