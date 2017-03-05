import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'img[exist]',
  host: {
    '(error)':'updateUrl()',
    '[src]':'src',
    '[class]': 'class'
   }
})
export class ImgInputDirective {

  constructor() { }
  @Input() src:string;
  @Input() class:string;
  @Input() default:string;

  updateUrl() {
    this.src = this.default;
    this.class = 'toHide';
  }
}
