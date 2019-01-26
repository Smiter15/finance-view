# Bud

Angular was chosen as I find its quick to spin up a project bootstrapped with a testing environment and provide the necessary state management to update the view. Its service injection is also helpful when communicating with an API. Including bootstrap 4 allowed me create a crude full width responsive design.

Given more time I would have improved:
- Responsive design, specifically for mobile window size
- Built the transaction date headers as expansion panels so the user could close the the view of the transactions for that date
- Add more tests!
- Improve lighthouse score to 100 across the board

Accessibility can be improved:
- The item description font color on white and light orange background fails color contrast test. I suggest a darker grey #515560

I would consider rebuilding the app in VueJS as the bundle size would be smaller.

Hosted on Netlify [here](https://hardcore-beaver-e91fbd.netlify.com/).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
