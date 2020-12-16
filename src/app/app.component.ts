import { Component,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'ppisnapshots',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  snapshots:string;
  constructor(private element: ElementRef){
    this.snapshots = this.element.nativeElement.getAttribute('snapshots');
  }
  title = 'ppisnapshots';
}
