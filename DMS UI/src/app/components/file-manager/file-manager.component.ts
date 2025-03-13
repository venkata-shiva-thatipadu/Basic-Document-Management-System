import { Component, ViewChild } from '@angular/core';
 import { DropDownButton, ItemModel } from '@syncfusion/ej2-splitbuttons';
 import { FileManagerComponent} from '@syncfusion/ej2-angular-filemanager';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrl: './file-manager.component.scss'
})
export class FilesManagerComponent {
  public ajaxSettings?: object;
  public toolbarSettings?: any;
  public contextMenuSettings?: object;
  public view?: string;
  public hostUrl?: string;
  configData: any;
  
  @ViewChild('filemanagerObj') public filemanagerObj?: FileManagerComponent;
  public items: ItemModel[] = [{ text: 'Folder' }, { text: 'Files' }];

  constructor(private config: ConfigService) {
  }
  
  async ngOnInit() {
    this.configData = await this.config.getData();
    this.hostUrl = this.configData.hostUrl;
    this.ajaxSettings = {
        url: this.hostUrl + this.configData.fileOperationsUrl,
        getImageUrl: this.hostUrl + this.configData.getImageUrl,
        uploadUrl: this.hostUrl + this.configData.uploadUrl,
        downloadUrl: this.hostUrl + this.configData.downloadUrl
    };
    this.view = "Details";

    this.toolbarSettings = {
      items: [
        'NewFolder',
        'Upload',
        'Cut',
        'Copy',
        'Paste',
        'Delete',
        'Download',
        'Rename',
        'SortBy',
        'Refresh',
        'Selection',
        'View',
        'Details',
      ],
    };
    this.contextMenuSettings = {
      file: [
        'Open',
        '|',
        'Cut',
        'Copy',
        '|',
        'Delete',
        'Download',
        'Rename',
        '|',
        'Details'
      ],
      folder: [
        'Open',
        '|',
        'Cut',
        'Copy',
        'Paste',
        '|',
        'Delete',
        'Rename',
        'Download',
        '|',
        'Details',
      ],
      layout: [
        'SortBy',
        'View',
        'Refresh',
        '|',
        'Paste',
        '|',
        'NewFolder',
        '|',
        'Details',
        '|',
        'SelectAll',
      ],
      visible: true,
    };
  };
  
  onCreated(args: any) {
    let customBtn: HTMLElement = document.getElementById('filemanager_tb_upload') as HTMLElement;
    customBtn.onclick = (e) => {
      e.stopPropagation();
    };
    let drpDownBtn: DropDownButton = new DropDownButton(
      {
        items: this.items,
        select: (args) => {
          if (args.item.text === 'Folder') {
            (this.filemanagerObj as FileManagerComponent).uploadSettings.directoryUpload = true;
          } else {
            (this.filemanagerObj as FileManagerComponent).uploadSettings.directoryUpload = false;
          }
          setTimeout(function () {
            let uploadBtn: HTMLElement = document.querySelector(
              '.e-file-select-wrap button'
            ) as HTMLElement;
            uploadBtn.click();
          }, 100);
        },
      },
      '#filemanager_tb_upload'
    );
  }
}
