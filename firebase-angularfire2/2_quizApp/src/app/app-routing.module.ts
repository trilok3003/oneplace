import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { AuthGuard } from './auth/auth.guard';
const routes:Routes=[
  {path:'register',component:RegisterComponent},
  {path:'quiz',component:QuizComponent,canActivate:[AuthGuard]},
  {path:'result',component:ResultComponent,canActivate:[AuthGuard]},
  {path: 'questions', 
  loadChildren: './questions/questions.module#QuestionsModule', canActivate:[AuthGuard]},
  {path:'',redirectTo:'/quiz',pathMatch:'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
