import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConnectComponent}from'./View/connect/connect.component';
import {PanierComponent}from'./View/panier/panier.component';
import {PaiementComponent}from'./View/paiement/paiement.component';
import {AdministrateurComponent}from'./View/administrateur/administrateur.component';
import {MainComponent} from "./View/main/main.component";

const routes: Routes=[
  {path:'main', component: MainComponent},
  {path:'connect', component: ConnectComponent},
  {path:'panier', component: PanierComponent},
  {path:'paiement', component: PaiementComponent},
  {path:'administrateur', component: AdministrateurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
export const routingComponents = [MainComponent,ConnectComponent,PanierComponent,PaiementComponent,AdministrateurComponent];
