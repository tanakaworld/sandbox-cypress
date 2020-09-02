describe("describe-it-with-as", () => {
  before(() => {
    cy.request("https://reqres.in/api/users/1").then((response) => {
      cy.wrap(response).as("response");
    });
  });

  describe("describe1", () => {
    it("-it1", function () {
      console.log("describe1-it1", this.response);
      cy.visit("https://example.cypress.io/").then(function () {
        console.log("describe1-it1 after visit", this.response);
      });
    });

    it("-it2", function () {
      console.log("describe1-it2", this.response);
      cy.visit("https://example.cypress.io/").then(function () {
        console.log("describe1-it2 after visit", this.response);
      });
    });
  });

  describe("describe2", () => {
    it("-it1", function () {
      console.log("describe2-it1", this.response);
      cy.visit("https://example.cypress.io/").then(function () {
        console.log("describe2-it1 after visit", this.response);
      });
    });

    it("-it2", function () {
      console.log("describe2-it2", this.response);
      cy.visit("https://example.cypress.io/").then(function () {
        console.log("describe2-it2 after visit", this.response);
      });
    });
  });

  it("top level it1", function () {
    console.log("top level it1", this.response);
    cy.visit("https://example.cypress.io/").then(function () {
      console.log("top level it1 after visit", this.response);
    });
  });
});
