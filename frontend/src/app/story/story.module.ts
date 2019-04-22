import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  StoryRoutingModule,
  routedComponents,
} from 'src/app/story/story-routing.module';
import { StoryListFilterComponent } from 'src/app/story/list/filter/story-list-filter.component';
import { StoryListTableComponent } from 'src/app/story/list/table/story-list-table.component';
import { StoryListToolbarComponent } from 'src/app/story/list/toolbar/story-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoryViewToolbarComponent } from 'src/app/story/view/story-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { StoryImporterService } from 'src/app/story/importer/story-importer.service';

@NgModule({
  declarations: [
    ...routedComponents,
    StoryListFilterComponent,
    StoryListTableComponent,
    StoryListToolbarComponent,
    StoryViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    StoryRoutingModule,
    LayoutModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: StoryImporterService,
    },
  ],
})
export class StoryModule {}
