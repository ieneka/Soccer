import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillFilterComponent } from './skill-filter.component';

describe('SkillFilterComponent', () => {
  let component: SkillFilterComponent;
  let fixture: ComponentFixture<SkillFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
