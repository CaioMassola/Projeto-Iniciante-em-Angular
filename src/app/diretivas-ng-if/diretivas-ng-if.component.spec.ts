import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasNgIFComponent } from './diretivas-ng-if.component';

describe('DiretivasNgIFComponent', () => {
  let component: DiretivasNgIFComponent;
  let fixture: ComponentFixture<DiretivasNgIFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivasNgIFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasNgIFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
