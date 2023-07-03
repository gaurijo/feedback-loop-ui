/* eslint-disable no-undef */
describe('Feedback Loop login flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Should be able to visit the base page', () => {
    cy.contains('Feedback Loop')
      .get('form')
      .contains('Please Sign In');
  });
});