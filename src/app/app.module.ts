import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './history/history.component';
import { FoodComponent } from './food/food.component';
import { SitesComponent } from './sites/sites.component';
import { ProjectsComponent } from './projects/projects.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ContactComponent } from './contact/contact.component';
import { SwiperCarouselComponent } from './swiper-carousel/swiper-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HistoryComponent,
    FoodComponent,
    SitesComponent,
    ProjectsComponent,
    DropdownComponent,
    ContactComponent,
    SwiperCarouselComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
