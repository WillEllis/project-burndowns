import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  ComplexityChangeRoutingModule,
  routedComponents,
} from 'src/app/complexity-change/complexity-change-routing.module';
import { ComplexityChangeListFilterComponent } from 'src/app/complexity-change/list/filter/complexity-change-list-filter.component';
import { ComplexityChangeListTableComponent } from 'src/app/complexity-change/list/table/complexity-change-list-table.component';
import { ComplexityChangeListToolbarComponent } from 'src/app/complexity-change/list/toolbar/complexity-change-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComplexityChangeViewToolbarComponent } from 'src/app/complexity-change/view/complexity-change-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { ComplexityChangeImporterService } from 'src/app/complexity-change/importer/complexity-change-importer.service';

@NgModule({
  declarations: [
    ...routedComponents,
    ComplexityChangeListFilterComponent,
    ComplexityChangeListTableComponent,
    ComplexityChangeListToolbarComponent,
    ComplexityChangeViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    ComplexityChangeRoutingModule,
    LayoutModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: ComplexityChangeImporterService,
    },
  ],
})
export class ComplexityChangeModule {}
