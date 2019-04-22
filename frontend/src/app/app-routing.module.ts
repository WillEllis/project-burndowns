import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from 'src/app/layout/errors/error-404.component';
import { Error403Component } from 'src/app/layout/errors/error-403.component';
import { Error500Component } from 'src/app/layout/errors/error-500.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
  },
  {
    path: 'iam',
    loadChildren: './iam/iam.module#IamModule',
  },
  {
    path: 'settings',
    loadChildren:
      './settings/settings.module#SettingsModule',
  },
  {
    path: 'audit-log',
    loadChildren:
      './audit-log/audit-log.module#AuditLogModule',
  },
  {
    path: 'team',
    loadChildren: './team/team.module#TeamModule',
  },
  {
    path: 'project',
    loadChildren: './project/project.module#ProjectModule',
  },
  {
    path: 'sprint',
    loadChildren: './sprint/sprint.module#SprintModule',
  },
  {
    path: 'complexity-change',
    loadChildren: './complexity-change/complexity-change.module#ComplexityChangeModule',
  },
  {
    path: 'phase',
    loadChildren: './phase/phase.module#PhaseModule',
  },
  {
    path: 'story',
    loadChildren: './story/story.module#StoryModule',
  },
  { path: '403', component: Error403Component },
  { path: '500', component: Error500Component },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routedComponents = [
  Error404Component,
  Error403Component,
  Error500Component,
];
