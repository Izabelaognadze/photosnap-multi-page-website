import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoriesComponent } from './components/stories/stories.component';
import { HomeComponent } from './components/home/home.component';
import { FeaturesComponent } from './components/features/features.component';
import { PricingComponent } from './components/pricing/pricing.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent 
  },
  {
    path: "stories", component:StoriesComponent
  },
  {
    path: "features", component:FeaturesComponent
  },
  {
    path: "pricing", component:PricingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
