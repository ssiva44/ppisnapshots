import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorsnapshotsComponent } from './sectorsnapshots.component';

describe('SectorsnapshotsComponent', () => {
  let component: SectorsnapshotsComponent;
  let fixture: ComponentFixture<SectorsnapshotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorsnapshotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorsnapshotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
