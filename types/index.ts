export interface IOrganisation {
  CompanyRegister: string;
  CountryOfRegistration: string;
  CreatedOn: string;
  City: string;
  Country: string;
  OrganisationId: string;
  ParentOrganisationReference: string;
  Status: 'Active'|'Pending'|'Withdrawn';
  Size: string;
}
