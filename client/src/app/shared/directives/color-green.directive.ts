import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appColorGreen]'
})
export class ColorGreenDirective implements OnInit {

  constructor( private el : ElementRef ) { }

  ngOnInit(): void {
    this.el.nativeElement.style.color = 'green';
  }

}
