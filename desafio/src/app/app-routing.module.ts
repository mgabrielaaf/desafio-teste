import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrennandComponent } from './components/brennand/brennand.component';
import { CulinariaComponent } from './components/culinaria/culinaria.component';
import { FormComponent } from './components/form/form.component';
import { HomemDoNordesteComponent } from './components/homem-do-nordeste/homem-do-nordeste.component';
import { LocaisComponent } from './components/locais/locais.component';
import { LocalComponent } from './components/local/local.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { StartPageComponent } from './components/start-page/start-page.component';

const routes: Routes = [

  {path:'',
  component: NavigationComponent,
  children: [
    {path:'',
    component: StartPageComponent},
    {path:'local',
    component: LocalComponent},
    {path:'locais',
    component: LocaisComponent},
    {path:'brennand',
    component: BrennandComponent},
    {path:'homem-do-nordeste',
    component: HomemDoNordesteComponent},
    {path:'contato',
    component: FormComponent}
  ]},

  {path:'culinaria',
  component:CulinariaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
