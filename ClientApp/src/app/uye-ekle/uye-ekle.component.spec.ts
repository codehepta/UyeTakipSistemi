import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UyeEkleComponent } from './uye-ekle.component';

describe('UyeEkleComponent', () => {
  let component: UyeEkleComponent;
  let fixture: ComponentFixture<UyeEkleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UyeEkleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UyeEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
