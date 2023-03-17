import { WhoisRecord, Contact } from '@/models/whois';
import { ResultsCardData } from '@/models/resultsCard';

export const Labels = {
  form: {
    formPlaceholder: "Enter Domain Name or IP Address",
  },
};


export const constants = {
  whoisApiUrl:'https://www.whoisxmlapi.com/whoisserver/WhoisService'
};

export const createContactObjArr = (label: string, obj: Contact) => {

  const dataArr: ResultsCardData[] = []
  obj.name && dataArr.push({ label: "Name", data: obj.name })
  obj.organization && dataArr.push({ label: "Organization", data: obj.organization })
  obj.city && dataArr.push({ label: "City", data: obj.city })
  obj.state && dataArr.push({ label: "State", data: obj.state })
  obj.countryCode && dataArr.push({ label: "Country", data: obj.countryCode })
  obj.email && dataArr.push({ label: "Email", data: obj.email })

  return {
    label,
    data: dataArr
  }
}

export const createDomainObjArr = (label: string, obj: WhoisRecord) => {

  if (obj.dataError) {
    return {
      label,
      data: [
        { label: "Domain", data: obj.domainName },
        { label: "Status", data: "Domain appears to not been registered yet" }
      ]
    }
  }
  
  const dataArr: ResultsCardData[] = []
  obj.domainName && dataArr.push({ label: "Domain", data: obj.domainName })
  obj.registrarName && dataArr.push({ label: "Registrar", data: obj.registrarName })
  obj.createdDate && dataArr.push({ label: "Created On", data: new Date(obj.createdDate).toDateString() })
  obj.expiresDate && dataArr.push({ label: "Expires On", data: new Date(obj.expiresDate).toDateString() })
  obj.updatedDate && dataArr.push({ label: "Updated On", data: new Date(obj.updatedDate).toDateString() })
  obj.status && dataArr.push({ label: "Status", data: obj.status?.split(" ") })
  obj.nameServers?.hostNames && dataArr.push({ label: "Server Names", data: obj.nameServers?.hostNames })

  return {
    label,
    data: dataArr
  }
}

