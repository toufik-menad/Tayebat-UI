import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SearchbarComponent } from './components/searchbar/searchbar.component';



@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  declarations: [HeaderComponent, SearchbarComponent],
  
  exports: [
    HeaderComponent,
    SearchbarComponent
  ]
})
export class SharedModule { }
