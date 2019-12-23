import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AngularMaterialModule} from'../angular-material/angular-material.module';
import { from } from 'rxjs';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class SharedModule { }
