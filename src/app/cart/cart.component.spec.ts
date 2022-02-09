2.	import { async, ComponentFixture, TestBed } from '@angular/core/testing';
3.
4.	import { CartComponent } from './cart.component';
5.
6.	describe('CartComponent', () => {
7.	  let component: CartComponent;
8.	  let fixture: ComponentFixture<CartComponent>;
9.
10.	  beforeEach(async(() => {
11.	    TestBed.configureTestingModule({
12.	      declarations: [ CartComponent ]
13.	    })
14.	    .compileComponents();
15.	  }));
16.
17.	  beforeEach(() => {
18.	    fixture = TestBed.createComponent(CartComponent);
19.	    component = fixture.componentInstance;
20.	    fixture.detectChanges();
21.	  });
22.
23.	  it('should create', () => {
24.	    expect(component).toBeTruthy();
25.	  });
26.	});
