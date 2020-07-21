import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowComponent } from './person/show/show.component';
import { AddComponent } from './person/add/add.component';
import { EditComponent } from './person/edit/edit.component';


const routes: Routes = [
  {path:'show',component:ShowComponent },
  {path:'add',component:AddComponent },
  {path:'edit',component:EditComponent},
  {path:'edit',component:EditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
