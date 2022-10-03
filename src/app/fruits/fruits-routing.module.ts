import { EditComponent } from './edit/edit.component';
import { CreatComponent } from './creat/creat.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'fruits/home',
  component:HomeComponent,
},{
  path:'fruits/creat',
  component:CreatComponent,
},{
  path:'fruits/edit/:id',
  component: EditComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FruitsRoutingModule { }
