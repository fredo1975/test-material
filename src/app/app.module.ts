import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCardModule } from '@angular/material';
import { MatTreeModule } from '@angular/material/tree';
import { FormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import { OverlayModule } from '@angular/cdk/overlay';
import { TreeTooltipDirectiveDirective } from './tooltip/tree-tooltip-directive.directive';
import { AwesomeTooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeTooltipDirectiveDirective,
    AwesomeTooltipComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatTreeModule,
    MatTooltipModule,
    OverlayModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AwesomeTooltipComponent],
})
export class AppModule { }
