import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SprintModel } from 'src/app/sprint/sprint-model';
import { SprintViewService } from 'src/app/sprint/view/sprint-view.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-sprint-view',
  templateUrl: './sprint-view.component.html',
})
export class SprintViewComponent implements OnInit {
  constructor(
    private service: SprintViewService,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return SprintModel.presenter(row, fieldName);
  }

  get fields() {
    return SprintModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.sprint.menu'), '/sprint'],
    [i18n('entities.sprint.view.title')],
  ];
}
