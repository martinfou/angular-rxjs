import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { of, from, map, tap, take } from 'rxjs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App implements OnInit {
  name = 'Angular';

  ngOnInit() {
    // of(2, 4, 6, 8)
    //   .pipe(map((item) => item * 2))
    //   .subscribe((x) => console.log(x));

    // of('martin', 'david', 'francis').subscribe({
    //   next: (item) => console.log(`resulting item .. ${item}`),
    //   error: (err) => console.error(`error occured ${err}`),
    //   complete: () => console.log('complete'),
    // });

    from([20, 15, 10, 5])
      .pipe(
        tap((item) => console.log(`emitted item ..... ${item}`)),
        map((item) => item * 2),
        map((item) => item - 10),
        map((item) => {
          if (item === 0) {
            throw new Error('zero detected');
          }
          return item;
        }),
        take(2)
      )

      .subscribe({
        next: (item) => console.log(`resulting item .. ${item}`),
        error: (err) => console.error(`error occured ${err}`),
        complete: () => console.log('complete'),
      });
  }
}

bootstrapApplication(App);
