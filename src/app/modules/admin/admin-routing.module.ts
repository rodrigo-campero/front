import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ParameterAddEditComponent } from './pages/parameter-add-edit/parameter-add-edit.component';
import { ParameterListComponent } from './pages/parameter-list/parameter-list.component';
import { ProcessAddEditComponent } from './pages/process-add-edit/process-add-edit.component';
import { ProcessListComponent } from './pages/process-list/process-list.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: ProcessListComponent
      },
      {
        path: 'process',
        children: [
          {
            path: '',
            component: ProcessListComponent

          }, {
            path: 'list',
            component: ProcessListComponent
          },
          {
            path: 'modify',
            component: ProcessAddEditComponent
          },
          {
            path: 'modify/:id',
            component: ProcessAddEditComponent
          }
        ]
      },
      {
        path: 'bots',
        children: [
          {
            path: '',
            component: ProcessListComponent
          },
          {
            path: 'list',
            component: ProcessListComponent
          },
          {
            path: 'modify',
            component: ProcessAddEditComponent
          },
          {
            path: 'modify/:id',
            component: ProcessAddEditComponent
          }
        ]
      },
      {
        path: 'parameters',
        children: [
          {
            path: '',
            component: ParameterListComponent
          },
          {
            path: 'list',
            component: ParameterListComponent
          },
          {
            path: 'modify',
            component: ParameterAddEditComponent
          },
          {
            path: 'modify/:id',
            component: ParameterAddEditComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
