import { Injectable } from '@angular/core';
import { StoryApi } from 'src/app/story/story.api';
import storyImporterFields from 'src/app/story/importer/story-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class StoryImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      StoryApi.import,
      storyImporterFields,
      i18n('entities.story.importer.fileName'),
      i18n('entities.story.importer.hint'),
    );
  }
}
