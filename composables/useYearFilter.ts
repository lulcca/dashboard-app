import type { IOrganisation } from '~/types';

export default function (organisations: IOrganisation[]) {
  let data: number[] = [];
  let labels: string[] = [];

  if (organisations) {
    const yearCount: { [year: string]: number } = {};

    organisations.forEach(org => {
      if (org.CreatedOn) {
        const year = new Date(org.CreatedOn).getFullYear().toString();
        if (yearCount[year]) {
          yearCount[year]++;
        } else {
          yearCount[year] = 1;
        }
      }
    });

    labels = Object.keys(yearCount).sort((a, b) => parseInt(a) - parseInt(b));

    data = labels.map(year => yearCount[year]);
  }

  return { data, labels };
}
