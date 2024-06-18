export interface IAuthorisationServer {
  CustomerFriendlyName: string;
  SupportsCiba: boolean;
  SupportsDCR: boolean;
  SupportsRedirect: boolean;
}

export interface IOrganisation {
  AuthorisationServers: IAuthorisationServer[],
  CompanyRegister: string;
  CountryOfRegistration: string;
  CreatedOn: string;
  City: string;
  Country: string;
  OrganisationId: string;
  OrganisationName: string;
  ParentOrganisationReference: string;
  Status: 'Active'|'Pending'|'Withdrawn';
  Size: string;
}

export type IOrganisationFilterKeys = keyof Omit<IOrganisation, 'AuthorisationServers'>
