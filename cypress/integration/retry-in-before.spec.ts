describe("Retry in before", () => {
  // cy.request() was invoked with { failOnStatusCode: false, retryOnStatusCodeFailure: true }.
  //
  // These options are incompatible with each other.
  //
  // - To retry on non-2xx status codes, pass { failOnStatusCode: true, retryOnStatusCodeFailure: true }.
  // - To not retry on non-2xx status codes, pass { failOnStatusCode: true, retryOnStatusCodeFailure: true }.
  // - To fail on non-2xx status codes without retrying (the default behavior), pass { failOnStatusCode: true, retryOnStatusCodeFailure: false }

  describe("retry on 404", () => {
    before(() => {
      cy.request({
        url: "http://localhost:4444/test/404?from=before",
        // Whether Cypress should automatically retry transient network errors under the hood. Cypress will retry a request up to 4 times if this is set to true.
        failOnStatusCode: true,

        // Whether Cypress should automatically retry status code errors under the hood. Cypress will retry a request up to 4 times if this is set to true.
        retryOnStatusCodeFailure: true,

        // 	Whether Cypress should automatically retry transient network errors under the hood. Cypress will retry a request up to 4 times if this is set to true
        // retryOnNetworkFailure: true,
      });
    });

    it("cy.go() - go back or forward in the browser's history", () => {
      cy.request({
        url: "http://localhost:4444/test/404?from=it",
        // Whether Cypress should automatically retry transient network errors under the hood. Cypress will retry a request up to 4 times if this is set to true.
        failOnStatusCode: true,

        // Whether Cypress should automatically retry status code errors under the hood. Cypress will retry a request up to 4 times if this is set to true.
        retryOnStatusCodeFailure: true,

        // 	Whether Cypress should automatically retry transient network errors under the hood. Cypress will retry a request up to 4 times if this is set to true
        // retryOnNetworkFailure: true,
      });
      cy.visit("https://example.cypress.io");
    });
  });

  describe("retry on 500", () => {
    before(() => {
      cy.request({
        url: "http://localhost:4444/test/500?from=before",
        // Whether Cypress should automatically retry transient network errors under the hood. Cypress will retry a request up to 4 times if this is set to true.
        failOnStatusCode: true,

        // Whether Cypress should automatically retry status code errors under the hood. Cypress will retry a request up to 4 times if this is set to true.
        retryOnStatusCodeFailure: true,

        // 	Whether Cypress should automatically retry transient network errors under the hood. Cypress will retry a request up to 4 times if this is set to true
        // retryOnNetworkFailure: true,
      });
    });

    it("cy.go() - go back or forward in the browser's history", () => {
      cy.request({
        url: "http://localhost:4444/test/500?from=it",
        // Whether Cypress should automatically retry transient network errors under the hood. Cypress will retry a request up to 4 times if this is set to true.
        failOnStatusCode: true,

        // Whether Cypress should automatically retry status code errors under the hood. Cypress will retry a request up to 4 times if this is set to true.
        retryOnStatusCodeFailure: true,

        // 	Whether Cypress should automatically retry transient network errors under the hood. Cypress will retry a request up to 4 times if this is set to true
        // retryOnNetworkFailure: true,
      });
      cy.visit("https://example.cypress.io");
    });
  });
});
