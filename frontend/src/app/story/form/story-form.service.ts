import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StoryApi } from 'src/app/story/story.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { FormService } from 'src/app/shared/form/form.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class StoryFormService extends FormService {
  constructor(
    errorService: ErrorService,
    snackbar: Snackbar,
    router: Router,
  ) {
    super(
      errorService,
      router,
      snackbar,
      StoryApi.find,
      StoryApi.create,
      StoryApi.update,
      ['/story'],
      'entities.story.create.success',
      'entities.story.update.success',
    );
  }
}
