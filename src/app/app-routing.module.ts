import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../app/pages/contact/contact.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ShopComponent } from './pages/shop/shop.component';
import { MainComponent } from './components/main/main.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CumstomerserviceComponent } from './pages/cumstomerservice/cumstomerservice.component';
import { PopupdetailsComponent } from './pages/popupdetails/popupdetails.component';

const routes: Routes = [
  { path: 'Contact', component: ContactComponent },
  { path: 'Cart', component: CartComponent },
  { path: 'Checkout', component: CheckoutComponent },
  { path: 'Detail/:id', component: DetailComponent },
  { path: 'Shop', component: ShopComponent },
  { path: 'Main', component: MainComponent },
  { path: 'Aboutus', component: AboutusComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Signup', component: SignupComponent },
  { path: 'Blog', component: BlogComponent },
  { path: 'Customerservice', component: CumstomerserviceComponent },
  { path: 'Popup', component: PopupdetailsComponent },
  { path: '', redirectTo: '/Main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
