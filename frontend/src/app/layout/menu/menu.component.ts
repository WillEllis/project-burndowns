import { Component, OnInit } from '@angular/core';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { SettingsService } from 'src/app/settings/settings.service';
import { IamService } from 'src/app/iam/iam.service';
import { TeamService } from 'src/app/team/team.service';
import { ProjectService } from 'src/app/project/project.service';
import { SprintService } from 'src/app/sprint/sprint.service';
import { ComplexityChangeService } from 'src/app/complexity-change/complexity-change.service';
import { PhaseService } from 'src/app/phase/phase.service';
import { StoryService } from 'src/app/story/story.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  constructor(
    public auditLogService: AuditLogService,
    public settingsService: SettingsService,
    public iamService: IamService,
    public teamService: TeamService,
    public projectService: ProjectService,
    public sprintService: SprintService,
    public complexityChangeService: ComplexityChangeService,
    public phaseService: PhaseService,
    public storyService: StoryService,
  ) {}

  ngOnInit(): void {}
}
