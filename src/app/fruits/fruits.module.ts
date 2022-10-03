import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitsRoutingModule } from './fruits-routing.module';
import { HomeComponent } from './home/home.component';
import { CreatComponent } from './creat/creat.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    HomeComponent,
    CreatComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    FruitsRoutingModule,
    FormsModule
  ]
})
export class FruitsModule { }
