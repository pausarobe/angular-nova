import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroComponent } from './pages/hero/hero.component';
import { CityComponent } from './pages/home/components/city.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'hero', component: HeroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
