import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FolderTreeComponent } from './folder-tree/folder-tree.component';
import { FolderComponent } from './folder/folder.component';
import { TreeComponent } from './tree/tree.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, FolderTreeComponent, FolderComponent, TreeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
