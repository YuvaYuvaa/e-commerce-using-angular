import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './component/cart/cart/cart.component';
import { HeaderComponent } from './component/header/header/header.component';
import { ProductsComponent } from './component/products/products/products.component';
import { PipePipe } from './pipe/pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeaderComponent,
    ProductsComponent,
    PipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([ // Define some routes
      { path: 'cart', component: CartComponent },
      { path: 'products', component: ProductsComponent },
      { path: '', redirectTo: '/products', pathMatch: 'full' }, // Default route
    ]),
    HttpClientModule, // Should be in imports, not declarations
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
