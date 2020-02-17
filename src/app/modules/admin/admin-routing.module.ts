import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessListComponent } from './pages/process-list/process-list.component';
import { ProcessAddEditComponent } from './pages/process-add-edit/process-add-edit.component';
import { ParameterListComponent } from './pages/parameter-list/parameter-list.component';
import { ParameterAddEditComponent } from './pages/parameter-add-edit/parameter-add-edit.component';


const routes: Routes = [
  {
    path: 'admin',
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
