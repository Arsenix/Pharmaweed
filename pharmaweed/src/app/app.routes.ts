import { RouterModule, Routes } from '@angular/router';
import {
  AboutComponent,
  PharmaweedComponent,
  ItemComponent
} from "./components/index.paginas"

const app_routes: Routes = [
  { path: '', component: PharmaweedComponent },
  {path: 'about', component: AboutComponent},
  {path: 'item', component:ItemComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes,{useHash: true});
