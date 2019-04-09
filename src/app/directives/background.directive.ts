import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appBackground]'
})

export class BackgroundDirective implements OnInit {

    @Input('appBackground') hoverColor: string = 'red'; // red is default color
    @Input() defaultColor: string = 'transparent'; // transparent is default color

    @HostBinding('style.backgroundColor') backgroud: string;

    constructor(private element: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
    //    RENDERER CREATE
    // abstract setStyle(el: any, style: string, value: any, flags?: RendererStyleFlags2): void
    //     const {nativeElement} = this.element;
    //     this.renderer.setStyle(nativeElement, 'background-color', 'blue');
    //     this.renderer.addClass(nativeElement, 'white-text');
        // console.log(this.element);
        // this.element.nativeElement.style.backgroundColor = 'red';

        this.backgroud = this.hoverColor;
    }

    // EVENTS
    @HostListener('mouseenter') mouseEnter(event: Event) {

        //    RENDERER CREATE
        // abstract setStyle(el: any, style: string, value: any, flags?: RendererStyleFlags2): void
        // const {nativeElement} = this.element;
        // this.renderer.setStyle(nativeElement, 'background-color', 'blue');
        // this.renderer.addClass(nativeElement, 'white-text');
        // console.log(this.element);
        // this.element.nativeElement.style.backgroundColor = 'red';

        // this.backgroud = 'red';

        this.backgroud = this.hoverColor;
    }

    @HostListener('mouseleave') mouseLeave(event: Event) {

        // const {nativeElement} = this.element;
        // this.renderer.setStyle(nativeElement, 'background-color', 'transparent');
        // this.renderer.removeClass(nativeElement, 'white-text');

        // this.backgroud = 'transparent';

        this.backgroud = this.defaultColor;

    }
}