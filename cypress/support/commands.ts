/// <reference types="cypress" />

let initialChart: Uint8ClampedArray | null = null;
let finalChart: Uint8ClampedArray | null = null;

function initializeChart(chartSelector: string) {
  cy.wait(2000).get<HTMLCanvasElement>(chartSelector).then((canvas) => {
    const c = canvas[0];
    const ctx = c.getContext('2d');
    if (ctx) initialChart = (ctx.getImageData(0, 0, c.width, c.height)).data;
    console.log(ctx);
  });
}

function concludeChart(chartSelector: string) {
  cy.wait(2000).get<HTMLCanvasElement>(chartSelector).then((canvas) => {
    const c = canvas[0];
    const ctx = c.getContext('2d');
    if (ctx) finalChart = (ctx.getImageData(0, 0, c.width, c.height)).data;
    expect(initialChart).not.to.deep.equal(finalChart);
  });
}

export function differentChartWithRadio(chartSelector: string, actionSelector: string) {
  initializeChart(chartSelector);
  cy.wait(1000).get(actionSelector).click();
  concludeChart(chartSelector);
}

export function differentChartWithSelect(chartSelector: string, actionSelector: string, targetSelected: string) {
  initializeChart(chartSelector);
  cy.wait(1000).get(actionSelector).select(targetSelected);
  concludeChart(chartSelector);
}
