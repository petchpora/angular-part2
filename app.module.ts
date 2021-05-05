import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { Home2Component } from './home2/home2.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { PanelComponent } from './panel/panel.component';
import { ToDoListComponent } from './todolist/ToDoList.component';
import { TaskComponent } from './task/task.component';
import { SettingComponent } from './setting-homework/setting-homework.component';


@NgModule({
  declarations: [
    AppComponent,
    Home2Component,
    HomeComponent,
    ProductListComponent,
    ProductItemComponent,
    PanelComponent,
    ToDoListComponent,
    TaskComponent,
    SettingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
