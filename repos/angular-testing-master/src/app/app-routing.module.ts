import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentProjectedComponent } from './components/content-projected/content-projected.component';
import { ScrollbarStylingComponent } from './components/scrollbar-styling/scrollbar-styling.component';
import { SearchingPaginationTableComponent } from './components/searching-pagination-table/searching-pagination-table.component';
import { SliderV1Component } from './components/slider-v1/slider-v1.component';
import { ContentProjectionExComponent } from './content-projection-ex/content-projection-ex.component';
import { ProgressExampleComponent } from './progress-example/progress-example.component';

const routes: Routes = [
  { path: '',   redirectTo: '/progress-examples', pathMatch: 'full' }, // redirect to `first-component`
  {path: 'progress-examples', component: ProgressExampleComponent },
  {path: 'content-projection', component: ContentProjectionExComponent },
  {path: 'scrollbarStyling', component: ScrollbarStylingComponent },
  {path: 'slider', component: SliderV1Component },
  {path: 'table', component: SearchingPaginationTableComponent },
  {path: 'content-projection-v2', component: ContentProjectedComponent },
  {path: 'crud', loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule)},
  {path: 'rest', loadChildren: () => import('./rest/rest.module').then(m => m.RestModule)},
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
