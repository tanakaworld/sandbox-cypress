describe("describe-it-with-as", () => {
  before(() => {
    cy.request("https://reqres.in/api/users/1").then((response: any) => {
      cy.wrap(response).as("response");

      cy.saveJSONAs("response", response);
    });
  });

  describe("describe1", () => {
    it("-it1", function () {
      cy.getJSON("response").then((json) => {
        console.log("describe1-it1", json);
      });

      cy.visit("https://example.cypress.io/").then(function () {
        cy.getJSON("response").then((json) => {
          console.log("describe1-it1 after visit", json);
        });
      });
    });

    it("-it2", function () {
      cy.getJSON("response").then((json) => {
        console.log("describe1-it2", json);
      });

      cy.visit("https://example.cypress.io/").then(function () {
        cy.getJSON("response").then((json) => {
          console.log("describe1-it2 after visit", json);
        });
      });
    });
  });

  describe("describe2", () => {
    it("-it1", function () {
      cy.getJSON("response").then((json) => {
        console.log("describe2-it1", json);
      });

      cy.visit("https://example.cypress.io/").then(function () {
        cy.getJSON("response").then((json) => {
          console.log("describe2-it1 after visit", json);
        });
      });
    });

    it("-it2", function () {
      cy.getJSON("response").then((json) => {
        console.log("describe2-it2", json);
      });

      cy.visit("https://example.cypress.io/").then(function () {
        cy.getJSON("response").then((json) => {
          console.log("describe2-it2 after visit", json);
        });
      });
    });
  });

  it("top level it1", function () {
    cy.getJSON("response").then((json) => {
      console.log("top level it", json);
    });

    cy.visit("https://example.cypress.io/").then(function () {
      cy.getJSON("response").then((json) => {
        console.log("top level it after visit", json);
      });
    });
  });
});
