export interface ErrorMessage {
  errorCode: string;
  msg: string;
}

export interface Whois {
  WhoisRecord?: WhoisRecord;
  ErrorMessage?: ErrorMessage;
}

export interface WhoisData {
  dataError?: string;
  createdDate: string;
  updatedDate: string;
  expiresDate: string;
  domainName: string;
  nameServers: NameServers;
  status: string;
  rawText: string;
  parseCode: number;
  header: string;
  strippedText: string;
  footer: string;
  audit: Audit;
  registrarName: string;
  registrarIANAID: string;
  createdDateNormalized: string;
  updatedDateNormalized: string;
  expiresDateNormalized: string;
}

export interface WhoisRecord extends WhoisData {
  contactEmail: string;
  domainNameExt: string;
  estimatedDomainAge: number;
  registryData: RegistryData;
  registrant: Contact;
  administrativeContact: Contact;
  technicalContact: Contact;
}
export interface Contact {
  name?: string;
  organization: string;
  city: string;
  state: string;
  country: string;
  countryCode: string;
  rawText: string;
  email?: string;
}
export interface NameServers {
  rawText: string;
  hostNames?: string[];
  ips?: string[];
}
export interface Audit {
  createdDate: string;
  updatedDate: string;
}
export interface RegistryData extends WhoisData {
  whoisServer: string;
}
