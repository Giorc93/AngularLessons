import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appRepeat]',
})
export class RepeatDirective {
  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef
  ) {}

  @Input() set appRepeat(number: number) {
    for (var i = 0; i < number; i++)
      this._viewContainer.createEmbeddedView(this._templateRef);
  }
}
