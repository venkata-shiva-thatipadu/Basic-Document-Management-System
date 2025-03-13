import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilesManagerComponent } from './components/file-manager/file-manager.component';

const routes: Routes = [
  { path:'', redirectTo:'/filemanager', pathMatch: 'full' },
  { path:'filemanager', component:FilesManagerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
