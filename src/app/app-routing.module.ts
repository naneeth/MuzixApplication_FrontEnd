import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { GetAllComponent } from './get-all/get-all.component';
import { UpdateCommentsComponent } from './update-comments/update-comments.component';

const routes: Routes = [
  {path:'search',component:SearchComponent,
  children:[]},
            // {path:'results',component:UpdateCommentsComponent}]
  // },
  {path:'update',component:UpdateCommentsComponent},
  {path:'',component:SearchComponent
  },
  {path:'AllTracks',component:GetAllComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
