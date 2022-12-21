import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePorteroComponent } from './detalle-portero.component';

describe('DetallePorteroComponent', () => {
  let component: DetallePorteroComponent;
  let fixture: ComponentFixture<DetallePorteroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePorteroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallePorteroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
