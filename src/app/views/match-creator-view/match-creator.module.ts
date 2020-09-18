import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatchCreatorRoutingModule } from './match-creator-routing.module';
import { MatchCreatorViewComponent } from './match-creator-view.component';

@NgModule({
  declarations: [MatchCreatorViewComponent],
  imports: [CommonModule, MatchCreatorRoutingModule, NgbModule],
})
export class MatchCreatorModule {}
