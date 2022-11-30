import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivresizerComponent } from './divresizer/divresizer.component';
import { SliderComponent } from './slider/slider.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', component: DivresizerComponent },
  { path: 'divresizer', component: DivresizerComponent },
  { path: 'test', component: TestComponent },
  { path: 'slider', component: SliderComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
