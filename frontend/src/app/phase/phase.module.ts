import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  PhaseRoutingModule,
  routedComponents,
} from 'src/app/phase/phase-routing.module';
import { PhaseListFilterComponent } from 'src/app/phase/list/filter/phase-list-filter.component';
import { PhaseListTableComponent } from 'src/app/phase/list/table/phase-list-table.component';
import { PhaseListToolbarComponent } from 'src/app/phase/list/toolbar/phase-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PhaseViewToolbarComponent } from 'src/app/phase/view/phase-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { PhaseImporterService } from 'src/app/phase/importer/phase-importer.service';

@NgModule({
  declarations: [
    ...routedComponents,
    PhaseListFilterComponent,
    PhaseListTableComponent,
    PhaseListToolbarComponent,
    PhaseViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    PhaseRoutingModule,
    LayoutModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: PhaseImporterService,
    },
  ],
})
export class PhaseModule {}
