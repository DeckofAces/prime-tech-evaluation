import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  IgxAvatarModule,
  IgxBadgeModule,
  IgxButtonModule,
  IgxGridComponent,
  IgxGridModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxProgressBarModule,
  IgxRippleModule,
  IgxSwitchModule
} from "igniteui-angular";
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { athletesData } from '../../data/athletesData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paging',
  imports: [
    IgxAvatarModule,
    IgxBadgeModule,
    IgxButtonModule,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxProgressBarModule,
    IgxRippleModule,
    IgxSwitchModule,
    IgxPreventDocumentScrollDirective,
    CommonModule
  ],
  templateUrl: './paging.component.html',
  styleUrl: './paging.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PagingComponent implements OnInit {
  @ViewChild('grid1', { static: true }) public grid1!: IgxGridComponent;
  public data: any[] = [];

  public ngOnInit(): void {
    this.data = athletesData;
  }
}
