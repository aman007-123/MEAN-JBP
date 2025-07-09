import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './history/history.component';
import { FoodComponent } from './food/food.component';
import { SitesComponent } from './sites/sites.component';
import { ProjectsComponent } from './projects/projects.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'food', component: FoodComponent },
  { path: 'sites', component: SitesComponent },
  { path: 'project', component: ProjectsComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
