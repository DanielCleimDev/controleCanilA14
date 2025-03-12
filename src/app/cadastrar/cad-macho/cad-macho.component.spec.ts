import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadMachoComponent } from './cad-macho.component';

describe('CadMachoComponent', () => {
  let component: CadMachoComponent;
  let fixture: ComponentFixture<CadMachoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadMachoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadMachoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
