/* eslint-disable no-undef */
describe('Dashboard after Login Flow', () => {
  beforeEach(() => {
    cy.login();
  })

  it('should render the title', () => {
    cy.contains('Feedback Loop');
  });

  it('should display teammates names', () => {
    cy.contains('Scott Ertmer')
    cy.contains('Travis Rollins');
  });

  it('should display the teammates feedback', () => {
    cy.contains("Your feedback game is TOO strong.")
    cy.contains("I appreciate your positive energy");
  });
});