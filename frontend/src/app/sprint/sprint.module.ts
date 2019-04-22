import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  SprintRoutingModule,
  routedComponents,
} from 'src/app/sprint/sprint-routing.module';
import { SprintListFilterComponent } from 'src/app/sprint/list/filter/sprint-list-filter.component';
import { SprintListTableComponent } from 'src/app/sprint/list/table/sprint-list-table.component';
import { SprintListToolbarComponent } from 'src/app/sprint/list/toolbar/sprint-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SprintViewToolbarComponent } from 'src/app/sprint/view/sprint-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { SprintImporterService } from 'src/app/sprint/importer/sprint-importer.service';

@NgModule({
  declarations: [
    ...routedComponents,
    SprintListFilterComponent,
    SprintListTableComponent,
    SprintListToolbarComponent,
    SprintViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    SprintRoutingModule,
    LayoutModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: SprintImporterService,
    },
  ],
})
export class SprintModule {}
