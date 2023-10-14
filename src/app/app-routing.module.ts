import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShegoleAComponent } from './shegole-a/shegole-a.component';
import { ShegoleBComponent } from './shegole-b/shegole-b.component';
import { PiassaComponent } from './piassa/piassa.component';
import { CondominumComponent } from './condominum/condominum.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ShegoleA', component: ShegoleAComponent },
  { path: 'ShegoleB', component: ShegoleBComponent },
  { path: 'piassa', component: PiassaComponent },
  { path: 'condomin', component: CondominumComponent },
  // { path: 'new', component: AddProductComponent },
  { path: 'order', component: OrderComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
