
describe('Home Page', () => {
  it('successfully loads', () => {
    cy.visit("/");
  });
});

it('loads the app', () => {
  cy.visit('/')
  cy.get('#app').should('be.visible')
});
