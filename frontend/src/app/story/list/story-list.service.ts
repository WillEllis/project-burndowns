import { Injectable } from '@angular/core';
import { StoryApi } from 'src/app/story/story.api';
import storyExporterFields from 'src/app/story/list/story-exporter-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { PaginationService } from 'src/app/shared/pagination/pagination.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class StoryListService extends PaginationService {
  constructor(errorService: ErrorService) {
    super(
      StoryApi.list,
      storyExporterFields,
      'story',
      false,
      errorService,
    );
  }
}
