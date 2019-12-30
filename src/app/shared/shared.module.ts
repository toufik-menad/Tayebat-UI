import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AngularMaterialModule} from'../angular-material/angular-material.module';
import { from } from 'rxjs';
import { SearchbarComponent } from './components/searchbar/searchbar.component';



@NgModule({
  declarations: [HeaderComponent, SearchbarComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    HeaderComponent,
    SearchbarComponent
  ]
})
export class SharedModule { }
