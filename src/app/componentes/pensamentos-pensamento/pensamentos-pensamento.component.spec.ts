import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensamentosPensamentoComponent } from './pensamentos-pensamento.component';

describe('PensamentosPensamentoComponent', () => {
  let component: PensamentosPensamentoComponent;
  let fixture: ComponentFixture<PensamentosPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PensamentosPensamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PensamentosPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
