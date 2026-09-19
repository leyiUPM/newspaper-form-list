import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class HighlightDirective {
  constructor(private element: ElementRef) {}

  @HostListener('focus')
  onFocus(): void {
    this.element.nativeElement.classList.add('focused');
  }

  @HostListener('blur')
  onBlur(): void {
    this.element.nativeElement.classList.remove('focused');
  }
}
