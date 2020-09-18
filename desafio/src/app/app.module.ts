import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartPageComponent } from './components/start-page/start-page.component';
import { GridComponent } from './components/grid/grid.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MarcoZeroComponent } from './components/marco-zero/marco-zero.component';
import { HomemDoNordesteComponent } from './components/homem-do-nordeste/homem-do-nordeste.component';
import { BrennandComponent } from './components/brennand/brennand.component';
import { LocaisComponent } from './components/locais/locais.component';
import { LocalComponent } from './components/local/local.component';
import { FormComponent } from './components/form/form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { CulinariaComponent } from './components/culinaria/culinaria.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    GridComponent,
    NavigationComponent,
    MarcoZeroComponent,
    HomemDoNordesteComponent,
    BrennandComponent,
    LocaisComponent,
    LocalComponent,
    FormComponent,
    CulinariaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
