import destinationList from './data/destinationList.json';

export const newsletterDataSchema = {
  salutationOption: '',
  firstName: '',
  lastName: '',
  emailAdress: '',
  preferredDestinations: [] as string[],
  preferredLeisureType: [] as string[],
  newsletterAgreement: [] as string[],
  contactID: '',
};

export const destinationsOptions = destinationList
  .map((item) => ({
    name: item.Country,
    isSecondary: false,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

export const preferredLeisureTypeList = [
  'Rundreisen',
  'Aktivreisen',
  'Safaris',
  'Strand & Entspannung',
  'Städtereisen',
  'Mietwagen-Rundreisen',
  'Camper',
  'Mietwagenreisen',
  'Kreuzfahrten',
  'Familienreisen',
  'Sonstiges',
];

export const salutationOptions = [
  {
    id: 'Herr',
    name: 'Herr',
  },
  {
    id: 'Frau',
    name: 'Frau',
  },
  {
    id: 'Anderes',
    name: 'Anderes',
  },
];

export const newsletterAgreement = [
  {
    id: 'Ja',
    name: 'Ja, ich möchte einen individuellen und auf meine Bedürfnisse zugeschnittenen Newsletter erhalten. Dafür erlaube ich der EST Digital GmbH, mein E-Mail-Öffnungs- und Klickverhalten zu analysieren und ein personenbezogenes Nutzungsprofil zu erstellen.',
  },
];
