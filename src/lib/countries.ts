export interface Country {
  code: string;
  name: string;
  nameAr: string;
  currency: string;
  locale: string;
  flag: string;
  primaryColor: string;
  secondaryColor: string;
  phoneCode: string;
  phonePlaceholder: string;
  region: 'Gulf' | 'North America' | 'Europe' | 'Asia' | 'Other';
}

export const COUNTRIES: Country[] = [
  // Gulf Countries
  {
    code: "SA",
    name: "Saudi Arabia",
    nameAr: "المملكة العربية السعودية",
    currency: "SAR",
    locale: "ar-SA",
    flag: "🇸🇦",
    primaryColor: "hsl(140 70% 45%)",
    secondaryColor: "hsl(40 90% 55%)",
    phoneCode: "+966",
    phonePlaceholder: "5X XXX XXXX",
    region: "Gulf"
  },
  {
    code: "AE",
    name: "United Arab Emirates",
    nameAr: "الإمارات العربية المتحدة",
    currency: "AED",
    locale: "ar-AE",
    flag: "🇦🇪",
    primaryColor: "hsl(0 75% 45%)",
    secondaryColor: "hsl(140 65% 40%)",
    phoneCode: "+971",
    phonePlaceholder: "50 XXX XXXX",
    region: "Gulf"
  },
  {
    code: "KW",
    name: "Kuwait",
    nameAr: "دولة الكويت",
    currency: "KWD",
    locale: "ar-KW",
    flag: "🇰🇼",
    primaryColor: "hsl(210 85% 50%)",
    secondaryColor: "hsl(0 70% 45%)",
    phoneCode: "+965",
    phonePlaceholder: "9XXXXXXX",
    region: "Gulf"
  },
  {
    code: "QA",
    name: "Qatar",
    nameAr: "دولة قطر",
    currency: "QAR",
    locale: "ar-QA",
    flag: "🇶🇦",
    primaryColor: "hsl(350 85% 40%)",
    secondaryColor: "hsl(0 0% 95%)",
    phoneCode: "+974",
    phonePlaceholder: "XXXX XXXX",
    region: "Gulf"
  },
  {
    code: "OM",
    name: "Oman",
    nameAr: "سلطنة عمان",
    currency: "OMR",
    locale: "ar-OM",
    flag: "🇴🇲",
    primaryColor: "hsl(140 65% 40%)",
    secondaryColor: "hsl(0 80% 50%)",
    phoneCode: "+968",
    phonePlaceholder: "9XXXXXXX",
    region: "Gulf"
  },
  {
    code: "BH",
    name: "Bahrain",
    nameAr: "مملكة البحرين",
    currency: "BHD",
    locale: "ar-BH",
    flag: "🇧🇭",
    primaryColor: "hsl(0 0% 95%)",
    secondaryColor: "hsl(0 85% 50%)",
    phoneCode: "+973",
    phonePlaceholder: "XXXX XXXX",
    region: "Gulf"
  },

  // United States
  {
    code: "US",
    name: "United States",
    nameAr: "الولايات المتحدة",
    currency: "USD",
    locale: "en-US",
    flag: "🇺🇸",
    primaryColor: "hsl(221 83% 53%)",
    secondaryColor: "hsl(221 83% 43%)",
    phoneCode: "+1",
    phonePlaceholder: "(XXX) XXX-XXXX",
    region: "North America"
  },
  {
    code: "CA",
    name: "Canada",
    nameAr: "كندا",
    currency: "CAD",
    locale: "en-CA",
    flag: "🇨🇦",
    primaryColor: "hsl(0 0% 100%)",
    secondaryColor: "hsl(0 85% 45%)",
    phoneCode: "+1",
    phonePlaceholder: "(XXX) XXX-XXXX",
    region: "North America"
  },

  // Europe
  {
    code: "GB",
    name: "United Kingdom",
    nameAr: "المملكة المتحدة",
    currency: "GBP",
    locale: "en-GB",
    flag: "🇬🇧",
    primaryColor: "hsl(210 100% 25%)",
    secondaryColor: "hsl(0 85% 45%)",
    phoneCode: "+44",
    phonePlaceholder: "07XXX XXXXXX",
    region: "Europe"
  },
  {
    code: "DE",
    name: "Germany",
    nameAr: "ألمانيا",
    currency: "EUR",
    locale: "de-DE",
    flag: "🇩🇪",
    primaryColor: "hsl(0 0% 0%)",
    secondaryColor: "hsl(48 100% 50%)",
    phoneCode: "+49",
    phonePlaceholder: "015X XXXXXXX",
    region: "Europe"
  },
  {
    code: "FR",
    name: "France",
    nameAr: "فرنسا",
    currency: "EUR",
    locale: "fr-FR",
    flag: "🇫🇷",
    primaryColor: "hsl(230 35% 15%)",
    secondaryColor: "hsl(210 100% 25%)",
    phoneCode: "+33",
    phonePlaceholder: "6 XX XX XX XX",
    region: "Europe"
  },
  {
    code: "IT",
    name: "Italy",
    nameAr: "إيطاليا",
    currency: "EUR",
    locale: "it-IT",
    flag: "🇮🇹",
    primaryColor: "hsl(0 73% 46%)",
    secondaryColor: "hsl(104 72% 39%)",
    phoneCode: "+39",
    phonePlaceholder: "3XX XXX XXXX",
    region: "Europe"
  },
  {
    code: "ES",
    name: "Spain",
    nameAr: "إسبانيا",
    currency: "EUR",
    locale: "es-ES",
    flag: "🇪🇸",
    primaryColor: "hsl(36 85% 45%)",
    secondaryColor: "hsl(0 73% 46%)",
    phoneCode: "+34",
    phonePlaceholder: "6XX XXX XXX",
    region: "Europe"
  },
  {
    code: "NL",
    name: "Netherlands",
    nameAr: "هولندا",
    currency: "EUR",
    locale: "nl-NL",
    flag: "🇳🇱",
    primaryColor: "hsl(30 100% 50%)",
    secondaryColor: "hsl(0 0% 0%)",
    phoneCode: "+31",
    phonePlaceholder: "6 XXXX XXXX",
    region: "Europe"
  },

  // Asia
  {
    code: "CN",
    name: "China",
    nameAr: "الصين",
    currency: "CNY",
    locale: "zh-CN",
    flag: "🇨🇳",
    primaryColor: "hsl(0 85% 45%)",
    secondaryColor: "hsl(50 100% 50%)",
    phoneCode: "+86",
    phonePlaceholder: "1XX XXXX XXXX",
    region: "Asia"
  },
  {
    code: "JP",
    name: "Japan",
    nameAr: "اليابان",
    currency: "JPY",
    locale: "ja-JP",
    flag: "🇯🇵",
    primaryColor: "hsl(0 85% 45%)",
    secondaryColor: "hsl(0 0% 0%)",
    phoneCode: "+81",
    phonePlaceholder: "90-XXXX-XXXX",
    region: "Asia"
  },
  {
    code: "IN",
    name: "India",
    nameAr: "الهند",
    currency: "INR",
    locale: "en-IN",
    flag: "🇮🇳",
    primaryColor: "hsl(33 85% 45%)",
    secondaryColor: "hsl(200 100% 25%)",
    phoneCode: "+91",
    phonePlaceholder: "XXXXX XXXXX",
    region: "Asia"
  },
  {
    code: "SG",
    name: "Singapore",
    nameAr: "سنغافورة",
    currency: "SGD",
    locale: "en-SG",
    flag: "🇸🇬",
    primaryColor: "hsl(0 85% 45%)",
    secondaryColor: "hsl(0 0% 100%)",
    phoneCode: "+65",
    phonePlaceholder: "XXXX XXXX",
    region: "Asia"
  },

  // Australia
  {
    code: "AU",
    name: "Australia",
    nameAr: "أستراليا",
    currency: "AUD",
    locale: "en-AU",
    flag: "🇦🇺",
    primaryColor: "hsl(210 100% 25%)",
    secondaryColor: "hsl(0 85% 45%)",
    phoneCode: "+61",
    phonePlaceholder: "4XX XXX XXX",
    region: "Other"
  },

  // Other
  {
    code: "BR",
    name: "Brazil",
    nameAr: "البرازيل",
    currency: "BRL",
    locale: "pt-BR",
    flag: "🇧🇷",
    primaryColor: "hsl(105 60% 45%)",
    secondaryColor: "hsl(45 100% 50%)",
    phoneCode: "+55",
    phonePlaceholder: "(XX) XXXXX-XXXX",
    region: "Other"
  },
  {
    code: "MX",
    name: "Mexico",
    nameAr: "المكسيك",
    currency: "MXN",
    locale: "es-MX",
    flag: "🇲🇽",
    primaryColor: "hsl(0 63% 49%)",
    secondaryColor: "hsl(104 64% 41%)",
    phoneCode: "+52",
    phonePlaceholder: "55 XXXX XXXX",
    region: "Other"
  },
  {
    code: "ZA",
    name: "South Africa",
    nameAr: "جنوب أفريقيا",
    currency: "ZAR",
    locale: "en-ZA",
    flag: "🇿🇦",
    primaryColor: "hsl(0 0% 0%)",
    secondaryColor: "hsl(48 100% 50%)",
    phoneCode: "+27",
    phonePlaceholder: "0XX XXX XXXX",
    region: "Other"
  },
];

export const getCountryByCode = (code: string): Country | undefined => {
  return COUNTRIES.find((c) => c.code === code);
};

export const getCountriesByRegion = (region: Country['region']): Country[] => {
  return COUNTRIES.filter((c) => c.region === region);
};

export const formatCurrency = (amount: number, currency: string, locale: string = 'en'): string => {
  const currencySymbols: Record<string, string> = {
    SAR: "ر.س",
    AED: "د.إ",
    KWD: "د.ك",
    QAR: "ر.ق",
    OMR: "ر.ع",
    BHD: "د.ب",
    USD: "$",
    CAD: "CA$",
    GBP: "£",
    EUR: "€",
    CNY: "¥",
    JPY: "¥",
    INR: "₹",
    SGD: "S$",
    AUD: "A$",
    BRL: "R$",
    MXN: "$",
    ZAR: "R",
  };

  const localeMap: Record<string, string> = {
    'ar': 'ar',
    'en-US': 'en-US',
    'en-GB': 'en-GB',
    'en-CA': 'en-CA',
    'de': 'de-DE',
    'fr': 'fr-FR',
    'it': 'it-IT',
    'es': 'es-ES',
    'nl': 'nl-NL',
    'zh': 'zh-CN',
    'ja': 'ja-JP',
    'pt': 'pt-BR',
  };

  const formatter = localeMap[locale] || 'en-US';

  return `${amount.toLocaleString(formatter)} ${currencySymbols[currency] || currency}`;
};
