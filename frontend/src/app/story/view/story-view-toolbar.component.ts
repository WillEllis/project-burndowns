import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { StoryViewService } from 'src/app/story/view/story-view.service';
import { StoryService } from 'src/app/story/story.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { StoryDestroyService } from 'src/app/story/destroy/story-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-story-view-toolbar',
  templateUrl: './story-view-toolbar.component.html',
})
export class StoryViewToolbarComponent {
  constructor(
    public service: StoryViewService,
    private storyService: StoryService,
    private destroyService: StoryDestroyService,
    private auditLogService: AuditLogService,
    private confirmService: ConfirmService,
  ) {}

  async doDestroy() {
    const result = await this.confirmService.confirm();

    if (!result) {
      return;
    }

    return this.destroyService.doDestroy(this.record.id);
  }

  get destroyLoading() {
    return this.destroyService.loading;
  }

  get hasPermissionToDestroy() {
    return this.storyService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.storyService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.storyService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
