import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, interval, mergeMap, scan } from 'rxjs';

@Component({
  selector: 'app-cdk-coercion',
  templateUrl: './cdk-coercion.component.html',
  styleUrls: ['./cdk-coercion.component.css']
})
export class CdkCoercionComponent implements OnInit {
  // grandTotal$ = new Subject<number>();
  // constructor() { }

  // ngOnInit(): void {
  //   this.grandTotal$.subscribe({
  //     next: (grandTotal: any) => {
  //       console.log(grandTotal);
  //     }
  //   });
  // }

  // calculate(): void {
  //   this.grandTotal$.next(Math.random() * 1000);
  // }
  grandTotal$ = new Subject<number>();
  constructor() { }

  ngOnInit(): void {
    this.grandTotal$.pipe(
      mergeMap((total: any) => interval(1000).pipe(
        scan((acc, value) => acc + value, total),
      )),
    ).subscribe({
      next: grandTotal => {
        console.log(grandTotal);
      }
    });
  }

}
