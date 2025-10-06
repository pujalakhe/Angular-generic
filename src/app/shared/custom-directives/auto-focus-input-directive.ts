import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutoFocusInput]',
  standalone: true,
})
export class AutoFocusInputDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const firstControl: HTMLElement | null =
      this.el.nativeElement.querySelector('input, select, textarea');

    if (firstControl) {
      // Tiny timeout to let Angular render fully
      setTimeout(() => firstControl.focus(), 0);
    }
  }
}
