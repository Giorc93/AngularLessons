import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHiglight]',
})
export class HiglightDirective {
  constructor(private _highlight: ElementRef) {
    _highlight.nativeElement.style.background = 'yellow';
  }
}
