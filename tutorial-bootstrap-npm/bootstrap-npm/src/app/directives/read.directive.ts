import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRead]',
})
export class ReadDirective {
  constructor(private _read: ElementRef) {}

  @HostListener('mouseenter') entradaMouse() {
    speechSynthesis.speak(
      new SpeechSynthesisUtterance(this._read.nativeElement.textContent)
    );
  }

  @HostListener('mouseleave') salidaMouse() {
    speechSynthesis.cancel();
  }
}
