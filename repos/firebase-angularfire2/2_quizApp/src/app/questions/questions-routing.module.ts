import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { QuestionsComponent } from './questions.component';

const routes: Routes = [
  {path: '', component: QuestionsComponent},
  {path: 'add', component: AddComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }
