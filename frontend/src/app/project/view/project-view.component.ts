import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectModel } from 'src/app/project/project-model';
import { ProjectViewService } from 'src/app/project/view/project-view.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
})
export class ProjectViewComponent implements OnInit {
  constructor(
    private service: ProjectViewService,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return ProjectModel.presenter(row, fieldName);
  }

  get fields() {
    return ProjectModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.project.menu'), '/project'],
    [i18n('entities.project.view.title')],
  ];
}
