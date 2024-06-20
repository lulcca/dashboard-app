describe('Pages > Authorisation Server', () => {
  beforeEach(() => cy.visit('/authorisation-server'));

  it('renders header correctly', () => {
    cy.contains('h1', 'Authorization Server Details');
    cy.contains('p', 'This tool enables you to explore specific data about listed financial organisations, facilitating detailed analysis and informed decision-making.');
  });

  describe('servers chart section', () => {
    it('renders an organisation selector', () => {
      cy.get('[data-cy="filter-selector-organisation"]').should('exist');
    });

    describe('before selecting an organisation, does not display charts and messages', () => {
      it('renders filling text', () => {
        cy.contains('Search for a valid organisation name to explore detailed information about its authorisation servers.');
      });

      it('does not render server charts', () => {
        cy.get('[data-cy="ciba-chart"]').should('not.exist');
        cy.get('[data-cy="dcr-chart"]').should('not.exist');
        cy.get('[data-cy="redirect-chart"]').should('not.exist');
      });
    });

    describe('after selecting an organisation, display it server infos', () => {
      beforeEach(() => cy.wait(1000).get('[data-cy="filter-selector-organisation"]').select('SANTANDER CCVM S.A.'));

      it('renders message and server names', () => {
        cy.contains('2 servers found, showing data for: SANTANDER CCVM S.A.');
        cy.contains('Santander Corretora Pessoa Física');
        cy.contains('Santander Corretora Pessoa Jurídica');
      });

      it('renders server charts', () => {
        cy.get('[data-cy="ciba-chart"]').should('exist');
        cy.get('[data-cy="dcr-chart"]').should('exist');
        cy.get('[data-cy="redirect-chart"]').should('exist');
      });
    });
  });
});
