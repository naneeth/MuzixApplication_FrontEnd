import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ServiceService } from './service.service';
import{HttpClientModule} from '@angular/common/http'
import { AddService } from './add.service';
import { AddComponent } from './add/add.component';
import { GetAllComponent } from './get-all/get-all.component';
import { UpdateCommentsComponent } from './update-comments/update-comments.component';
import { ResultsComponent } from './results/results.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,AddComponent, GetAllComponent, UpdateCommentsComponent, ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServiceService,AddService],
  bootstrap: [AppComponent]
})
export class AppModule { }
