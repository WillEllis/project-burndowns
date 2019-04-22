import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  TeamRoutingModule,
  routedComponents,
} from 'src/app/team/team-routing.module';
import { TeamListFilterComponent } from 'src/app/team/list/filter/team-list-filter.component';
import { TeamListTableComponent } from 'src/app/team/list/table/team-list-table.component';
import { TeamListToolbarComponent } from 'src/app/team/list/toolbar/team-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeamViewToolbarComponent } from 'src/app/team/view/team-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { TeamImporterService } from 'src/app/team/importer/team-importer.service';

@NgModule({
  declarations: [
    ...routedComponents,
    TeamListFilterComponent,
    TeamListTableComponent,
    TeamListToolbarComponent,
    TeamViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    TeamRoutingModule,
    LayoutModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: TeamImporterService,
    },
  ],
})
export class TeamModule {}
