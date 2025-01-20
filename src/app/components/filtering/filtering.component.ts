import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { DATA } from './../../data/nwindData';
import { IgxGridComponent } from 'igniteui-angular';

@Component({
  selector: 'app-filtering',
  imports: [IgxGridModule, FormsModule, IgxPreventDocumentScrollDirective],
  templateUrl: './filtering.component.html',
  styleUrl: './filtering.component.scss'
})
export class FilteringComponent implements OnInit {

  @ViewChild('grid1', { read: IgxGridComponent, static: true })
  public grid1!: IgxGridComponent;

  public data: any[] = [];

  constructor() {
  }
  public ngOnInit(): void {
    this.data = DATA;
  }

  public formatCurrency(val: string) {
    return '$' + parseInt(val, 10).toFixed(2);
  }
}
