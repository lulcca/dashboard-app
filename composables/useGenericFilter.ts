import type { IOrganisation, IOrganisationFilterKeys } from '~/types';

export default function (organisations: IOrganisation[], filter: IOrganisationFilterKeys) {
  let data: number[] = [];
  let labels: string[] = [];

  if (organisations && filter) {
    const labelCounter: { [label: string]: number } = {};

    organisations.forEach(org => {
      if (org[filter]) {
        labelCounter[org[filter]]
          ? labelCounter[org[filter]]++
          : labelCounter[org[filter]] = 1;
      }
    });

    labels = Object.keys(labelCounter);

    data = labels.map(filter => labelCounter[filter]);
  }

  return { data, labels };
}
