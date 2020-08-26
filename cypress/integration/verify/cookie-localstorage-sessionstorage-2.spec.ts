describe("cookie-localstorage-sessionstorage", () => {
  describe("", () => {
    it("", function () {
      cy.getJSON("response").then((v) => {
        console.log("1", v);
      });

      cy.visit("https://example.cypress.io/").then(function () {
        cy.getJSON("response").then((v) => {
          console.log("2", v);
        });
      });
    });
  });

  describe("", () => {
    it("", function () {
      cy.getJSON("response").then((v) => {
        console.log("3", v);
      });

      cy.visit("https://example.cypress.io/").then(function () {
        cy.getJSON("response").then((v) => {
          console.log("4", v);
        });
      });
    });
  });
});
