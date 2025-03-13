import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilesManagerComponent } from './components/file-manager/file-manager.component';
import { DetailsViewService, FileManagerModule, NavigationPaneService, ToolbarService } from '@syncfusion/ej2-angular-filemanager';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FilesManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FileManagerModule,
    HttpClientModule 
  ],
  providers: [
    provideClientHydration(),
    NavigationPaneService,
    ToolbarService,
    DetailsViewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
