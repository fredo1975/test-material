import { Directive, HostListener, Input, OnInit, ComponentRef, ElementRef } from '@angular/core';
import { OverlayRef, Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { AwesomeTooltipComponent } from './tooltip.component';

@Directive({
  selector: '[appTreeTooltipDirective]'
})
export class TreeTooltipDirectiveDirective implements OnInit {
  @Input('appTreeTooltipDirective') text = '';
  private overlayRef: OverlayRef;
  constructor(private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef,
    private overlay: Overlay) { }

  ngOnInit() {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([{
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom',
      }]);
    // Connect position strategy
    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  @HostListener('mouseenter')
  show() {
    // console.log('show !!!'+this.text);
    // Create tooltip portal
    const tooltipPortal = new ComponentPortal(AwesomeTooltipComponent);

    // Attach tooltip portal to overlay
    const tooltipRef: ComponentRef<AwesomeTooltipComponent> = this.overlayRef.attach(tooltipPortal);
    // Pass content to tooltip component instance
    tooltipRef.instance.text = this.text;
  }

  @HostListener('mouseout')
  hide() {
    // console.log('hide !!!');
    this.overlayRef.detach();
  }

}
