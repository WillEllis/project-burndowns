import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoryModel } from 'src/app/story/story-model';
import { StoryViewService } from 'src/app/story/view/story-view.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-story-view',
  templateUrl: './story-view.component.html',
})
export class StoryViewComponent implements OnInit {
  constructor(
    private service: StoryViewService,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return StoryModel.presenter(row, fieldName);
  }

  get fields() {
    return StoryModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.story.menu'), '/story'],
    [i18n('entities.story.view.title')],
  ];
}
