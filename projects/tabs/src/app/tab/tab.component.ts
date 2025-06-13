import { Component, OnInit, Input, Host } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

 
  @Input() details;
  constructor(@Host() private tabsCtrl: TabsComponent) { }

  ngOnInit() {
    this.tabsCtrl.addPane(this.details);
  }
}
