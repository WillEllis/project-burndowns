import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  ProjectRoutingModule,
  routedComponents,
} from 'src/app/project/project-routing.module';
import { ProjectListFilterComponent } from 'src/app/project/list/filter/project-list-filter.component';
import { ProjectListTableComponent } from 'src/app/project/list/table/project-list-table.component';
import { ProjectListToolbarComponent } from 'src/app/project/list/toolbar/project-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectViewToolbarComponent } from 'src/app/project/view/project-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@NgModule({
  declarations: [
    ...routedComponents,
    ProjectListFilterComponent,
    ProjectListTableComponent,
    ProjectListToolbarComponent,
    ProjectViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    ProjectRoutingModule,
    LayoutModule,
  ],
  exports: []
})
export class ProjectModule {}
