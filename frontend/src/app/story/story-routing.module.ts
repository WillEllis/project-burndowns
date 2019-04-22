import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { StoryListComponent } from 'src/app/story/list/story-list.component';
import { StoryViewComponent } from 'src/app/story/view/story-view.component';
import { StoryImporterComponent } from 'src/app/story/importer/story-importer.component';
import { StoryFormComponent } from 'src/app/story/form/story-form.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: StoryFormComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.storyEdit,
        },
      },
      {
        path: 'new',
        component: StoryFormComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.storyCreate,
        },
      },
      {
        path: 'import',
        component: StoryImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.storyImport,
        },
      },
      {
        path: ':id',
        component: StoryViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.storyRead,
        },
      },
      {
        path: '',
        component: StoryListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.storyRead,
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
export class StoryRoutingModule {}

export const routedComponents = [
  StoryListComponent,
  StoryFormComponent,
  StoryViewComponent,
  StoryImporterComponent,
];
