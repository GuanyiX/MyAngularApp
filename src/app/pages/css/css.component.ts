import { Component, OnInit } from '@angular/core';
import { ComponentPortal, TemplatePortal, DomPortal } from '@angular/cdk/portal';
import { FlexboxComponent } from 'src/app/components/flexbox/flexbox.component';
import { ScrollbarComponent } from 'src/app/components/scrollbar/scrollbar.component';
import { WebkitComponent } from 'src/app/components/webkit/webkit.component';
import { GridComponent } from 'src/app/components/grid/grid.component';

interface ISection {
  title: string;
  template: ComponentPortal<any> | TemplatePortal<any> | DomPortal<any>;
}

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.scss', '../../styles/private-page.scss']
})
export class CssComponent implements OnInit {
  sections: ISection[] = [];

  constructor() { }

  ngOnInit(): void {
    this.sections = [
      { title: 'Flexbox', template: new ComponentPortal(FlexboxComponent) },
      { title: 'Grid', template: new ComponentPortal(GridComponent) },
      { title: 'Scrollbar', template: new ComponentPortal(ScrollbarComponent) },
      { title: 'Webkit CSS Extensions', template: new ComponentPortal(WebkitComponent) }
    ];
  }

}
