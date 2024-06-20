describe('Components > Menu', () => {
  beforeEach(() => cy.visit('/'));

  it('renders menu correctly', () => {
    cy.get('[data-cy="menu-logo"]').should('exist');
    cy.get('[data-cy="menu-toggler"]').should('exist');
  });

  describe('when toggler is clicked', () => {
    beforeEach(() => cy.wait(1000).get('[data-cy="menu-toggler"]').click());

    it('renders menu items', () => {
      cy.get('[data-cy="menu-item-home"]').should('exist');
      cy.get('[data-cy="menu-item-timeline"]').should('exist');
      cy.get('[data-cy="menu-item-custom"]').should('exist');
    });

    describe('menu item works correctly', () => {
      it('`home`', () => {
        cy.get('[data-cy="menu-item-home"]').click({ force: true, multiple: true });
        cy.url().should('include', '/');
      });

      it('`timeline`', () => {
        cy.get('[data-cy="menu-item-timeline"]').click({ force: true, multiple: true });
        cy.url().should('include', '/timeline');
      });

      it('`custom`', () => {
        cy.get('[data-cy="menu-item-custom"]').click({ force: true, multiple: true });
        cy.url().should('include', '/authorisation-server');
      });
    });
  });
});
