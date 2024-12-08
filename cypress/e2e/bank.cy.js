const { it } = require("mocha");

describe('Sample Test', () => {
  beforeEach(() => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm",{ timeout: 10000 });
  });


  it("Login to the bank", () => {
    cy.log("Login page");
    cy.get('[name="username"]').type("rosan");
    cy.get('[name="password"]').type("rosan");
    cy.get('input.button').invoke('val').as('login')
    cy.get('@login').then(thisatext=> {
      expect(thisatext).to.contains('Log In');
    });
    cy.get("input.button").click();
  });
it("Verify the error message for login",()=>{
  cy.contains('p.error', 'An internal error has occurred and has been logged.')
  .should('exist');
})
});

