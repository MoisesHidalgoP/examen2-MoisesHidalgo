import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPorteroComponent } from './lista-portero.component';

describe('ListaPorteroComponent', () => {
  let component: ListaPorteroComponent;
  let fixture: ComponentFixture<ListaPorteroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPorteroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPorteroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
