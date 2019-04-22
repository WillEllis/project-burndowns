import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  HomeRoutingModule,
  routedComponents,
} from 'src/app/home/home-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { HomeChartComponent } from 'src/app/home/charts/home-chart.component';

@NgModule({
  imports: [SharedModule, LayoutModule, HomeRoutingModule],
  declarations: [HomeChartComponent, ...routedComponents],
  providers: [],
})
export class HomeModule {}
