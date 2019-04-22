import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamModel } from 'src/app/team/team-model';
import { TeamViewService } from 'src/app/team/view/team-view.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
})
export class TeamViewComponent implements OnInit {
  constructor(
    private service: TeamViewService,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return TeamModel.presenter(row, fieldName);
  }

  get fields() {
    return TeamModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.team.menu'), '/team'],
    [i18n('entities.team.view.title')],
  ];
}
