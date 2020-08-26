declare namespace Cypress {
  interface Chainable {
    saveJSONAs(key: string, json: JSON): Chainable<void>;
    getJSON(key: string): Chainable<JSON>;
  }
}
