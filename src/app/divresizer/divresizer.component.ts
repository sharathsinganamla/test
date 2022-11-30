import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-divresizer',
  templateUrl: './divresizer.component.html',
  styleUrls: ['./divresizer.component.scss']
})
export class DivresizerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @ViewChild('divider', { static: false }) handler: any;
  @ViewChild('box', { static: false }) boxA: any;
  @ViewChild('wrapper', { static: false }) wrapper: any;
  isHandlerDragging = false;

  

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    const hand = this.handler?.nativeElement;
       if (event.target === hand) {
      this.isHandlerDragging = true;
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isHandlerDragging) {
      return false;
    }
    var containerOffsetLeft = this.wrapper.nativeElement.offsetLeft;
    var pointerRelativeXpos = event.clientX - containerOffsetLeft;
    var boxAminWidth = 160;
    this.boxA.nativeElement.style.width =
      Math.max(boxAminWidth, pointerRelativeXpos - 8) + 'px';
    this.boxA.nativeElement.style.flexGrow = 0;
    return ''
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.isHandlerDragging = false;
  }

}
