import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'a[appMailTo]',
})
export class MailToDirective implements OnInit {
  @Input({ alias: 'appMailTo' }) email: string;

  constructor(private elementRef: ElementRef<HTMLAnchorElement>) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.href = `mailto:${this.email}`;
  }
}
