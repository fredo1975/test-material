import { Directive, HostListener, HostBinding, Input, OnInit, ComponentRef, ElementRef } from '@angular/core';
import { OverlayRef, Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { AwesomeTooltipComponent } from './tooltip.component';
import { FoodNode } from '../food-node';
@Directive({
  selector: '[appTreeTooltipDirective]'
})
export class TreeTooltipDirectiveDirective implements OnInit {
  @Input('appTreeTooltipDirective') text = '';
  @Input() node: FoodNode;
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
      }, {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
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
    tooltipRef.instance.text = this.formatToolTip();
  }

  @HostListener('mouseout')
  hide() {
    // console.log('hide !!!');
    this.overlayRef.detach();
  }

  formatToolTip() {
    let toolTip = '<table style=\'font-size: 15px;border: 1px solid white;\'>';
    toolTip = toolTip + '<th align=\'center\'>' + 'name ' + '</th>'
      + '<th align=\'center\'>' + 'payoff ' + '</th>' + '<th align=\'center\'>' + 'contrat ' + '</th>';
    toolTip = toolTip + '<tr><td align=\'center\'>' + this.node.name + '</td>';
    toolTip = toolTip + '<td align=\'center\'>' + this.node.payoff + '</td>';
    toolTip = toolTip + '<td align=\'center\'>' + this.node.contrat + '</td></tr>';
    toolTip = toolTip + '</table>';
    toolTip = toolTip + '<table style=\'font-size: 15px;border: 1px solid white;\'>';
    toolTip = toolTip + '<tr><th>book</th><th>position</th></tr>';
    this.node.position.forEach((key) => {
      toolTip = toolTip + '<tr><td align=\'center\'>' + key['book'] + '</td><td align=\'center\'>' + key['val'] + '</td></tr>';
    });
    toolTip = toolTip + '</table>';
    return toolTip;
  }
}
