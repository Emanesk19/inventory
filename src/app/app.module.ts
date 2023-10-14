import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShegoleAComponent } from './shegole-a/shegole-a.component';
import { ShegoleBComponent } from './shegole-b/shegole-b.component';
import { PiassaComponent } from './piassa/piassa.component';
import { CondominumComponent } from './condominum/condominum.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShegoleAComponent,
    ShegoleBComponent,
    PiassaComponent,
    CondominumComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
