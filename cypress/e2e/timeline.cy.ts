import { differentChartWithSelect } from '../support/commands';

describe('Pages > Timeline', () => {
  beforeEach(() => cy.visit('/timeline'));

  it('renders header correctly', () => {
    cy.contains('h1', 'Organisations Timeline');
    cy.contains('p', 'Explore below the chronological evolution of registered organisations, from their establishment to the present day.');
  });

  describe('timeline chart section', () => {
    it('renders timeline chart content', () => {
      cy.get('[data-cy="timeline-chart"]').should('exist');
    });

    describe('when filtering by year', () => {
      it('update chart when `2021` is selected', () => {
        differentChartWithSelect('[data-cy="timeline-chart"]', '[data-cy="filter-selector-year"]', '2021');
      });

      it('update chart when `2022` is selected', () => {
        differentChartWithSelect('[data-cy="timeline-chart"]', '[data-cy="filter-selector-year"]', '2022');
      });

      it('update chart when `2023` is selected', () => {
        differentChartWithSelect('[data-cy="timeline-chart"]', '[data-cy="filter-selector-year"]', '2023');
      });
    });
  });
});
