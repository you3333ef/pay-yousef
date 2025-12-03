export interface ShippingCompany {
  id: string;
  name: string;
  nameAr: string;
  logo: string;
  colors: {
    primary: string;
    secondary: string;
    accent?: string;
  };
  typography: {
    primary: string;
    secondary: string;
  };
  countries: string[];
  officialColors: {
    primary: string;
    secondary: string;
    gradient?: string;
  };
  fontFamily: string;
  description?: string;
  isActive?: boolean;
}

export const SHIPPING_COMPANIES: Record<string, ShippingCompany> = {
  // International Companies
  dhl: {
    id: 'dhl',
    name: 'DHL Express',
    nameAr: 'دي إتش إل إكسبرس',
    logo: '/logos/dhl.svg',
    colors: {
      primary: '#FFCC00',
      secondary: '#D40511',
      accent: '#000000',
    },
    typography: {
      primary: 'DHL',
      secondary: 'Helvetica, Arial, sans-serif',
    },
    countries: ['US', 'CA', 'GB', 'DE', 'FR', 'IT', 'ES', 'NL', 'AU', 'SA', 'AE', 'KW', 'QA', 'OM', 'BH', 'CN', 'JP', 'IN', 'SG', 'BR', 'MX', 'ZA'],
    officialColors: {
      primary: '#FFCC00',
      secondary: '#D40511',
      gradient: 'linear-gradient(135deg, #FFCC00, #D40511)',
    },
    fontFamily: "'DHL', 'Helvetica', 'Arial', sans-serif",
    description: 'Worldwide express delivery',
    isActive: true,
  },
  fedex: {
    id: 'fedex',
    name: 'FedEx',
    nameAr: 'فيدإكس',
    logo: '/logos/fedex.svg',
    colors: {
      primary: '#4D148C',
      secondary: '#FF6600',
      accent: '#000000',
    },
    typography: {
      primary: 'FedEx',
      secondary: 'Inter, Helvetica, sans-serif',
    },
    countries: ['US', 'CA', 'GB', 'DE', 'FR', 'IT', 'ES', 'NL', 'AU', 'SA', 'AE', 'KW', 'QA', 'OM', 'BH', 'CN', 'JP', 'IN', 'SG', 'BR', 'MX', 'ZA'],
    officialColors: {
      primary: '#4D148C',
      secondary: '#FF6600',
      gradient: 'linear-gradient(135deg, #4D148C, #FF6600)',
    },
    fontFamily: "'FedEx', 'Inter', 'Helvetica', sans-serif",
    description: 'Fast, reliable shipping',
    isActive: true,
  },
  ups: {
    id: 'ups',
    name: 'UPS',
    nameAr: 'يو بي إس',
    logo: '/logos/ups.svg',
    colors: {
      primary: '#351C15',
      secondary: '#FFB500',
      accent: '#000000',
    },
    typography: {
      primary: 'UPS',
      secondary: 'Arial, Helvetica, sans-serif',
    },
    countries: ['US', 'CA', 'GB', 'DE', 'FR', 'IT', 'ES', 'NL', 'AU', 'SA', 'AE', 'KW', 'QA', 'OM', 'BH', 'CN', 'JP', 'IN', 'SG', 'BR', 'MX', 'ZA'],
    officialColors: {
      primary: '#351C15',
      secondary: '#FFB500',
      gradient: 'linear-gradient(135deg, #351C15, #FFB500)',
    },
    fontFamily: "'UPS', 'Arial', 'Helvetica', sans-serif",
    description: 'Shipping & logistics',
    isActive: true,
  },
  aramex: {
    id: 'aramex',
    name: 'Aramex',
    nameAr: 'أرامكس',
    logo: '/logos/aramex-logo.svg',
    colors: {
      primary: '#E31E24',
      secondary: '#FF6B35',
      accent: '#1A1A1A',
    },
    typography: {
      primary: 'Aramex',
      secondary: "'DIN Next', 'Cairo', 'Tajawal', sans-serif",
    },
    countries: ['SA', 'AE', 'KW', 'QA', 'OM', 'BH', 'US', 'GB', 'DE', 'FR', 'IN', 'SG'],
    officialColors: {
      primary: '#E31E24',
      secondary: '#FF6B35',
      gradient: 'linear-gradient(135deg, #E31E24, #FF6B35)',
    },
    fontFamily: "'DIN Next', 'Cairo', 'Tajawal', 'Arial', sans-serif",
    description: 'Leading logistics provider',
    isActive: true,
  },

  // Gulf Companies
  empost: {
    id: 'empost',
    name: 'Emirates Post',
    nameAr: 'بريد الإمارات',
    logo: '/logos/empost-logo.png',
    colors: {
      primary: '#C8102E',
      secondary: '#003087',
      accent: '#FFD700',
    },
    typography: {
      primary: 'Emirates Post',
      secondary: "'Cairo', 'Tajawal', sans-serif",
    },
    countries: ['AE', 'SA', 'KW', 'QA', 'OM', 'BH'],
    officialColors: {
      primary: '#C8102E',
      secondary: '#003087',
      gradient: 'linear-gradient(135deg, #C8102E, #003087)',
    },
    fontFamily: "'Cairo', 'Tajawal', 'Arial', sans-serif",
    description: 'Official postal service',
    isActive: true,
  },
  smsa: {
    id: 'smsa',
    name: 'SMSA Express',
    nameAr: 'شركة sms إكسبرس',
    logo: '/logos/smsa-logo.svg',
    colors: {
      primary: '#0066CC',
      secondary: '#FF6600',
      accent: '#FFFFFF',
    },
    typography: {
      primary: 'SMSA Express',
      secondary: "'Cairo', 'Tajawal', sans-serif",
    },
    countries: ['SA', 'AE', 'KW', 'QA', 'OM', 'BH'],
    officialColors: {
      primary: '#0066CC',
      secondary: '#FF6600',
      gradient: 'linear-gradient(135deg, #0066CC, #FF6600)',
    },
    fontFamily: "'Cairo', 'Tajawal', 'Arial', sans-serif",
    description: 'Express delivery in KSA',
    isActive: true,
  },
  zajil: {
    id: 'zajil',
    name: 'Zajil',
    nameAr: 'زاجل',
    logo: '/logos/zajil-logo.svg',
    colors: {
      primary: '#1C4587',
      secondary: '#FF9900',
      accent: '#FFFFFF',
    },
    typography: {
      primary: 'Zajil',
      secondary: "'Cairo', 'Tajawal', sans-serif",
    },
    countries: ['SA', 'AE', 'KW', 'QA', 'OM', 'BH'],
    officialColors: {
      primary: '#1C4587',
      secondary: '#FF9900',
      gradient: 'linear-gradient(135deg, #1C4587, #FF9900)',
    },
    fontFamily: "'Cairo', 'Tajawal', 'Arial', sans-serif",
    description: 'E-commerce logistics',
    isActive: true,
  },
  naqel: {
    id: 'naqel',
    name: 'Naqel Express',
    nameAr: 'ناقل إكسبرس',
    logo: '/logos/naqel-logo.svg',
    colors: {
      primary: '#0052A3',
      secondary: '#FF6B00',
      accent: '#FFFFFF',
    },
    typography: {
      primary: 'Naqel Express',
      secondary: "'Cairo', 'Tajawal', sans-serif",
    },
    countries: ['SA', 'AE', 'KW', 'QA', 'OM', 'BH'],
    officialColors: {
      primary: '#0052A3',
      secondary: '#FF6B00',
      gradient: 'linear-gradient(135deg, #0052A3, #FF6B00)',
    },
    fontFamily: "'Cairo', 'Tajawal', 'Arial', sans-serif",
    description: 'Complete logistics solutions',
    isActive: true,
  },
  saudipost: {
    id: 'saudipost',
    name: 'Saudi Post',
    nameAr: 'بريد السعودية',
    logo: '/logos/saudipost-logo.png',
    colors: {
      primary: '#006C35',
      secondary: '#FFB81C',
      accent: '#FFFFFF',
    },
    typography: {
      primary: 'Saudi Post',
      secondary: "'Cairo', 'Tajawal', sans-serif",
    },
    countries: ['SA'],
    officialColors: {
      primary: '#006C35',
      secondary: '#FFB81C',
      gradient: 'linear-gradient(135deg, #006C35, #FFB81C)',
    },
    fontFamily: "'Cairo', 'Tajawal', 'Arial', sans-serif",
    description: 'National postal service',
    isActive: true,
  },
  kuwaitpost: {
    id: 'kuwaitpost',
    name: 'Kuwait Post',
    nameAr: 'بريد الكويت',
    logo: '/logos/kuwaitpost-logo.svg',
    colors: {
      primary: '#007A33',
      secondary: '#DA291C',
      accent: '#FFFFFF',
    },
    typography: {
      primary: 'Kuwait Post',
      secondary: "'Cairo', 'Tajawal', sans-serif",
    },
    countries: ['KW'],
    officialColors: {
      primary: '#007A33',
      secondary: '#DA291C',
      gradient: 'linear-gradient(135deg, #007A33, #DA291C)',
    },
    fontFamily: "'Cairo', 'Tajawal', 'Arial', sans-serif",
    description: 'National postal service',
    isActive: true,
  },
  qatarpost: {
    id: 'qatarpost',
    name: 'Qatar Post',
    nameAr: 'بريد قطر',
    logo: '/logos/qatarpost-logo.svg',
    colors: {
      primary: '#8E1838',
      secondary: '#FFFFFF',
      accent: '#FFD700',
    },
    typography: {
      primary: 'Qatar Post',
      secondary: "'Cairo', 'Tajawal', sans-serif",
    },
    countries: ['QA'],
    officialColors: {
      primary: '#8E1838',
      secondary: '#FFFFFF',
      gradient: 'linear-gradient(135deg, #8E1838, #FFFFFF)',
    },
    fontFamily: "'Cairo', 'Tajawal', 'Arial', sans-serif",
    description: 'National postal service',
    isActive: true,
  },
  omanpost: {
    id: 'omanpost',
    name: 'Oman Post',
    nameAr: 'بريد عمان',
    logo: '/logos/omanpost-logo.svg',
    colors: {
      primary: '#ED1C24',
      secondary: '#009639',
      accent: '#FFFFFF',
    },
    typography: {
      primary: 'Oman Post',
      secondary: "'Cairo', 'Tajawal', sans-serif",
    },
    countries: ['OM'],
    officialColors: {
      primary: '#ED1C24',
      secondary: '#009639',
      gradient: 'linear-gradient(135deg, #ED1C24, #009639)',
    },
    fontFamily: "'Cairo', 'Tajawal', 'Arial', sans-serif",
    description: 'National postal service',
    isActive: true,
  },
  bahrainpost: {
    id: 'bahrainpost',
    name: 'Bahrain Post',
    nameAr: 'بريد البحرين',
    logo: '/logos/bahrainpost-logo.svg',
    colors: {
      primary: '#CE1126',
      secondary: '#FFFFFF',
      accent: '#FFD700',
    },
    typography: {
      primary: 'Bahrain Post',
      secondary: "'Cairo', 'Tajawal', sans-serif",
    },
    countries: ['BH'],
    officialColors: {
      primary: '#CE1126',
      secondary: '#FFFFFF',
      gradient: 'linear-gradient(135deg, #CE1126, #FFFFFF)',
    },
    fontFamily: "'Cairo', 'Tajawal', 'Arial', sans-serif",
    description: 'National postal service',
    isActive: true,
  },

  // US Companies
  usps: {
    id: 'usps',
    name: 'USPS',
    nameAr: 'خدمة البريد الأمريكية',
    logo: '/logos/usps.svg',
    colors: {
      primary: '#0050B3',
      secondary: '#E31C22',
      accent: '#FFFFFF',
    },
    typography: {
      primary: 'USPS',
      secondary: "'Source Sans Pro', 'Arial', sans-serif",
    },
    countries: ['US'],
    officialColors: {
      primary: '#0050B3',
      secondary: '#E31C22',
      gradient: 'linear-gradient(135deg, #0050B3, #E31C22)',
    },
    fontFamily: "'Source Sans Pro', 'Arial', sans-serif",
    description: 'United States Postal Service',
    isActive: true,
  },
  ontrac: {
    id: 'ontrac',
    name: 'OnTrac',
    nameAr: 'أونتراك',
    logo: '/logos/ontrac.svg',
    colors: {
      primary: '#FF6600',
      secondary: '#003087',
      accent: '#FFFFFF',
    },
    typography: {
      primary: 'OnTrac',
      secondary: "'Arial', 'Helvetica', sans-serif",
    },
    countries: ['US'],
    officialColors: {
      primary: '#FF6600',
      secondary: '#003087',
      gradient: 'linear-gradient(135deg, #FF6600, #003087)',
    },
    fontFamily: "'Arial', 'Helvetica', sans-serif",
    description: 'Western US delivery',
    isActive: true,
  },

  // European Companies
  royalmail: {
    id: 'royalmail',
    name: 'Royal Mail',
    nameAr: 'البريد الملكي',
    logo: '/logos/royalmail.svg',
    colors: {
      primary: '#E31C22',
      secondary: '#003087',
      accent: '#FFD700',
    },
    typography: {
      primary: 'Royal Mail',
      secondary: "'Source Sans Pro', 'Arial', sans-serif",
    },
    countries: ['GB'],
    officialColors: {
      primary: '#E31C22',
      secondary: '#003087',
      gradient: 'linear-gradient(135deg, #E31C22, #003087)',
    },
    fontFamily: "'Source Sans Pro', 'Arial', sans-serif",
    description: 'UK national postal service',
    isActive: true,
  },
  dpd: {
    id: 'dpd',
    name: 'DPD',
    nameAr: 'دي بي دي',
    logo: '/logos/dpd.svg',
    colors: {
      primary: '#E60019',
      secondary: '#FFD400',
      accent: '#000000',
    },
    typography: {
      primary: 'DPD',
      secondary: "'DPD', 'Arial', sans-serif",
    },
    countries: ['GB', 'DE', 'FR', 'IT', 'ES', 'NL'],
    officialColors: {
      primary: '#E60019',
      secondary: '#FFD400',
      gradient: 'linear-gradient(135deg, #E60019, #FFD400)',
    },
    fontFamily: "'DPD', 'Arial', sans-serif",
    description: 'Delivery service',
    isActive: true,
  },
  dhlpacket: {
    id: 'dhlpacket',
    name: 'DHL Paket',
    nameAr: 'دي إتش إل بكت',
    logo: '/logos/dhlpacket.svg',
    colors: {
      primary: '#FFCC00',
      secondary: '#D40511',
      accent: '#000000',
    },
    typography: {
      primary: 'DHL Paket',
      secondary: "'DHL', 'Arial', sans-serif",
    },
    countries: ['DE', 'FR', 'IT', 'ES', 'NL'],
    officialColors: {
      primary: '#FFCC00',
      secondary: '#D40511',
      gradient: 'linear-gradient(135deg, #FFCC00, #D40511)',
    },
    fontFamily: "'DHL', 'Arial', sans-serif",
    description: 'European delivery',
    isActive: true,
  },
  laposte: {
    id: 'laposte',
    name: 'La Poste',
    nameAr: 'لا بوست',
    logo: '/logos/laposte.svg',
    colors: {
      primary: '#003087',
      secondary: '#E60019',
      accent: '#FFD700',
    },
    typography: {
      primary: 'La Poste',
      secondary: "'Helvetica', 'Arial', sans-serif",
    },
    countries: ['FR'],
    officialColors: {
      primary: '#003087',
      secondary: '#E60019',
      gradient: 'linear-gradient(135deg, #003087, #E60019)',
    },
    fontFamily: "'Helvetica', 'Arial', sans-serif",
    description: 'French postal service',
    isActive: true,
  },

  // Asian Companies
  jt: {
    id: 'jt',
    name: 'J&T Express',
    nameAr: 'جي أند تي إكسبرس',
    logo: '/logos/jt.svg',
    colors: {
      primary: '#FF6600',
      secondary: '#003087',
      accent: '#FFFFFF',
    },
    typography: {
      primary: 'J&T Express',
      secondary: "'Arial', sans-serif",
    },
    countries: ['CN', 'JP', 'SG', 'IN', 'MY', 'TH', 'VN', 'PH', 'ID'],
    officialColors: {
      primary: '#FF6600',
      secondary: '#003087',
      gradient: 'linear-gradient(135deg, #FF6600, #003087)',
    },
    fontFamily: "'Arial', sans-serif",
    description: 'E-commerce logistics',
    isActive: true,
  },
  sfexpress: {
    id: 'sfexpress',
    name: 'SF Express',
    nameAr: 'إس إف إكسبرس',
    logo: '/logos/sfexpress.svg',
    colors: {
      primary: '#E60012',
      secondary: '#FFD400',
      accent: '#000000',
    },
    typography: {
      primary: 'SF Express',
      secondary: "'Microsoft YaHei', 'Arial', sans-serif",
    },
    countries: ['CN', 'HK', 'JP', 'SG', 'MY', 'TH', 'AU', 'US', 'GB'],
    officialColors: {
      primary: '#E60012',
      secondary: '#FFD400',
      gradient: 'linear-gradient(135deg, #E60012, #FFD400)',
    },
    fontFamily: "'Microsoft YaHei', 'Arial', sans-serif",
    description: 'Express delivery service',
    isActive: true,
  },
  ginakum: {
    id: 'ginakum',
    name: 'GinaKum',
    nameAr: 'جيناكوم',
    logo: '/logos/ginakum.svg',
    colors: {
      primary: '#6A5ACD',
      secondary: '#00CED1',
      accent: '#FFFFFF',
    },
    typography: {
      primary: 'GinaKum',
      secondary: "'Poppins', 'Cairo', sans-serif",
    },
    countries: ['SA', 'AE', 'KW', 'QA', 'OM', 'BH', 'US', 'GB', 'DE', 'CN', 'IN', 'SG'],
    officialColors: {
      primary: '#6A5ACD',
      secondary: '#00CED1',
      gradient: 'linear-gradient(135deg, #6A5ACD, #00CED1)',
    },
    fontFamily: "'Poppins', 'Cairo', 'Tajawal', sans-serif",
    description: 'Global logistics & courier',
    isActive: true,
  },

  // Australia
  auspost: {
    id: 'auspost',
    name: 'Australia Post',
    nameAr: 'بريد أستراليا',
    logo: '/logos/auspost.svg',
    colors: {
      primary: '#E31C22',
      secondary: '#003087',
      accent: '#FFD700',
    },
    typography: {
      primary: 'Australia Post',
      secondary: "'Source Sans Pro', 'Arial', sans-serif",
    },
    countries: ['AU'],
    officialColors: {
      primary: '#E31C22',
      secondary: '#003087',
      gradient: 'linear-gradient(135deg, #E31C22, #003087)',
    },
    fontFamily: "'Source Sans Pro', 'Arial', sans-serif",
    description: 'National postal service',
    isActive: true,
  },
};

export const getCompaniesByCountry = (countryCode: string): ShippingCompany[] => {
  return Object.values(SHIPPING_COMPANIES).filter(
    (company) => company.countries.includes(countryCode) && company.isActive
  );
};

export const getCompanyById = (id: string): ShippingCompany | undefined => {
  return SHIPPING_COMPANIES[id];
};

export const getAllActiveCompanies = (): ShippingCompany[] => {
  return Object.values(SHIPPING_COMPANIES).filter((company) => company.isActive);
};
