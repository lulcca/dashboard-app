import type { IAuthorisationServer } from '~/types';

export default function (servers: IAuthorisationServer[]) {
  const names: string[] = [];
  const data: number[][] = [
    [0, 0],
    [0, 0],
    [0, 0],
  ];
  const labels: string[] = ['true', 'false'];

  if (servers) {
    servers.forEach(server => {
      names.push(server.CustomerFriendlyName);

      server.SupportsCiba
        ? data[0][0]++
        : data[0][1]++;

      server.SupportsDCR
        ? data[1][0]++
        : data[1][1]++;

      server.SupportsRedirect
        ? data[2][0]++
        : data[2][1]++;
    });
  }

  return { data, labels, names };
}
