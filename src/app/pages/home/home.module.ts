import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModuleModule } from 'src/app/shared/modules/shared-module/shared-module.module';
import { FilterPeoplePipe } from './filter-people.pipe';


@NgModule({
  declarations: [HomeComponent, FilterPeoplePipe],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModuleModule
  ]
})
export class HomeModule { }
