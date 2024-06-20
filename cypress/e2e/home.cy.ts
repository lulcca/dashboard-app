import { differentChartWithRadio } from '../support/commands';

describe('Pages > Home', () => {
  beforeEach(() => cy.visit('/'));

  it('renders header correctly', () => {
    cy.contains('h1', 'Organisations');
    cy.contains('p', 'Welcome to our platform designed to empower financial insights');
  });

  describe('doughnut chart section', () => {
    it('renders doughnut chart content', () => {
      cy.contains('Select a doughnut chart of interest');
      cy.get('[data-cy="generic-doughnut-chart"]').should('exist');
    });

    describe('updates when selecting a new chart', () => {
      it('update chart when country is selected', () => {
        differentChartWithRadio('[data-cy="generic-doughnut-chart"]', '#doughnut-choice-0');
      });

      it('update chart when size is selected', () => {
        differentChartWithRadio('[data-cy="generic-doughnut-chart"]', '#doughnut-choice-1');
      });

      it('update chart when status is selected', () => {
        differentChartWithRadio('[data-cy="generic-doughnut-chart"]', '#doughnut-choice-2');
      });
    });
  });

  describe('bar chart section', () => {
    it('renders bar chart content', () => {
      cy.contains('Select a bar chart of interest');
      cy.get('[data-cy="generic-bar-chart"]').should('exist');
    });

    it('updates chart when changing axis', () => {
      differentChartWithRadio('[data-cy="generic-bar-chart"]', '[data-cy="checkbox-toggler"]');
    });

    describe('updates when selecting a new chart', () => {
      it('update chart when country is selected', () => {
        differentChartWithRadio('[data-cy="generic-bar-chart"]', '#bar-choice-0');
      });

      it('update chart when size is selected', () => {
        differentChartWithRadio('[data-cy="generic-bar-chart"]', '#bar-choice-1');
      });

      it('update chart when status is selected', () => {
        differentChartWithRadio('[data-cy="generic-bar-chart"]', '#bar-choice-2');
      });
    });
  });
});
