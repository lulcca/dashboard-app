import type { IOrganisation } from '~/types';

export default function (organisations: IOrganisation[], year: string) {
  let data: number[] = [];
  let labels: string[] = [];

  if (organisations && year) {
    labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    data = Array.from({ length: labels.length }, () => 0);

    if (year) {
      organisations.filter(org => {
        const createdYear = new Date(org.CreatedOn).getFullYear().toString();

        if (createdYear === year) {
          const createdMonth = new Date(org.CreatedOn).getMonth();
          data[createdMonth]++;
        }
      });
    }
  }

  return { data, labels };
}
