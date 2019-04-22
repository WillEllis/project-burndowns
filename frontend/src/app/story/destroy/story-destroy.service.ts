import { Injectable } from '@angular/core';
import { DestroyService } from 'src/app/shared/destroy/destroy.service';
import { Router } from '@angular/router';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { StoryApi } from 'src/app/story/story.api';
import { StoryListService } from 'src/app/story/list/story-list.service';

@Injectable({
  providedIn: 'root',
})
export class StoryDestroyService extends DestroyService {
  constructor(
    errorService: ErrorService,
    snackbar: Snackbar,
    router: Router,
    storyListService: StoryListService,
  ) {
    super(
      errorService,
      router,
      snackbar,
      StoryApi.destroyAll,
      'entities.story.destroy.success',
      'entities.story.destroyAll.success',
      ['/story'],
      storyListService,
    );
  }
}
