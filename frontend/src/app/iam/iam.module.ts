import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  IamRoutingModule,
  routedComponents,
} from 'src/app/iam/iam-routing.module';
import { IamListFilterComponent } from 'src/app/iam/list/filter/iam-list-filter.component';
import { IamListTableComponent } from 'src/app/iam/list/table/iam-list-table.component';
import { IamListToolbarComponent } from 'src/app/iam/list/toolbar/iam-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IamViewToolbarComponent } from 'src/app/iam/view/iam-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { IamImporterService } from 'src/app/iam/importer/iam-importer.service';

@NgModule({
  declarations: [
    ...routedComponents,
    IamListFilterComponent,
    IamListTableComponent,
    IamListToolbarComponent,
    IamViewToolbarComponent,
  ],
  imports: [SharedModule, IamRoutingModule, LayoutModule],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: IamImporterService,
    },
  ],
})
export class IamModule {}
