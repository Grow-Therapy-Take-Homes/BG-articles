/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable @typescript-eslint/no-namespace */
export {};

declare global {
  namespace Cypress {
    interface Chainable {
      awaitTopViews: (date: string) => Chainable<JQuery>;
    }
  }
}
