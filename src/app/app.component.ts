import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { version as systemVersion } from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'workflow-for-angular';
  constructor(
    el: ElementRef,
    renderer: Renderer2,
  ) {
    renderer.setAttribute(el.nativeElement, 'system-version', systemVersion);
  }
}
