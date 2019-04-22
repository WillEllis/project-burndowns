import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { StoryListService } from 'src/app/story/list/story-list.service';
import { StoryService } from 'src/app/story/story.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { StoryDestroyService } from 'src/app/story/destroy/story-destroy.service';

@Component({
  selector: 'app-story-list-toolbar',
  templateUrl: './story-list-toolbar.component.html',
})
export class StoryListToolbarComponent {
  constructor(
    public service: StoryListService,
    private storyService: StoryService,
    private destroyService: StoryDestroyService,
    private auditLogService: AuditLogService,
    private confirmService: ConfirmService,
  ) {}

  get destroyButtonDisabled() {
    return (
      this.service.selectedKeys.isEmpty() ||
      this.service.loading ||
      this.destroyService.loading
    );
  }

  get destroyButtonTooltip() {
    if (
      this.service.selectedKeys.isEmpty() ||
      this.service.loading
    ) {
      return i18n('common.mustSelectARow');
    }
  }

  async doDestroyAllSelected() {
    const result = await this.confirmService.confirm();

    if (!result) {
      return;
    }

    return this.destroyService.doDestroyAll(
      this.service.selectedKeys.selected,
    );
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get hasPermissionToCreate() {
    return this.storyService.hasPermissionToCreate;
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

  doExport() {
    return this.service.doExport();
  }

  get exportButtonDisabled() {
    return (
      !this.service.hasRows ||
      this.service.loading ||
      this.service.exportLoading
    );
  }

  get exportButtonTooltip() {
    if (!this.service.hasRows || this.service.loading) {
      return i18n('common.noDataToExport');
    }
  }
}
