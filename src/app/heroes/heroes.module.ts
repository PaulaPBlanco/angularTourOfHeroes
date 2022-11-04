import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { HeroesComponent } from './components/hero/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { HeroTypeComponent } from './components/hero-type/hero-type.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    HeroTypeComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    SharedModule,
    
    
  ]
})
export class HeroesModule { }
