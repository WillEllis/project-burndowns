import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { TeamListComponent } from 'src/app/team/list/team-list.component';
import { TeamViewComponent } from 'src/app/team/view/team-view.component';
import { TeamImporterComponent } from 'src/app/team/importer/team-importer.component';
import { TeamFormComponent } from 'src/app/team/form/team-form.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: TeamFormComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.teamEdit,
        },
      },
      {
        path: 'new',
        component: TeamFormComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.teamCreate,
        },
      },
      {
        path: 'import',
        component: TeamImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.teamImport,
        },
      },
      {
        path: ':id',
        component: TeamViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.teamRead,
        },
      },
      {
        path: '',
        component: TeamListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.teamRead,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class TeamRoutingModule {}

export const routedComponents = [
  TeamListComponent,
  TeamFormComponent,
  TeamViewComponent,
  TeamImporterComponent,
];
