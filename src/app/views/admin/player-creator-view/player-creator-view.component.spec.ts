import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCreatorViewComponent } from './player-creator-view.component';

describe('PlayerCreatorViewComponent', () => {
  let component: PlayerCreatorViewComponent;
  let fixture: ComponentFixture<PlayerCreatorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerCreatorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCreatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
