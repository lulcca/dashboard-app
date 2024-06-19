export default function (name: string) {
  const { organisations } = useStore();

  const organisation = organisations.find(org => org.OrganisationName === name);

  return organisation ? organisation.AuthorisationServers : [];
}
