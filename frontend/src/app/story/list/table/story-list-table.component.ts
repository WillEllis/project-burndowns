import { Component } from '@angular/core';
import { StoryListService } from 'src/app/story/list/story-list.service';
import { StoryService } from 'src/app/story/story.service';
import { StoryModel } from 'src/app/story/story-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { StoryDestroyService } from 'src/app/story/destroy/story-destroy.service';

@Component({
  selector: 'app-story-list-table',
  templateUrl: './story-list-table.component.html',
})
export class StoryListTableComponent {
  constructor(
    public service: StoryListService,
    public destroyService: StoryDestroyService,
    public storyService: StoryService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return StoryModel.presenter(row, fieldName);
  }

  async doDestroy(id) {
    const response = await this.confirmService.confirm();

    if (!response) {
      return;
    }

    return this.destroyService.doDestroy(id);
  }

  get hasPermissionToEdit() {
    return this.storyService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.storyService.hasPermissionToDestroy;
  }

  get fields() {
    return StoryModel.fields;
  }

  get columns() {
    return [
      '_select',
      this.fields.id.name,
      this.fields.backlogPriority.name,
      this.fields.name.name,
      this.fields.effort.name,
      this.fields.phase.name,
      this.fields.dateAdded.name,
      this.fields.status.name,
      this.fields.dateFinished.name,
      this.fields.createdAt.name,
      '_actions',
    ];
  }
}
