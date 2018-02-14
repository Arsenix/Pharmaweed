import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from "@angular/http";

//Routes

import { app_routing } from "./app.routes";

//Services

import{ InformacionService } from "./services/informacion.service";

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PharmaweedComponent } from './components/pharmaweed/pharmaweed.component';
import { AboutComponent } from './components/about/about.component';
import { ItemComponent } from './components/item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PharmaweedComponent,
    AboutComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing
  ],
  providers: [InformacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
