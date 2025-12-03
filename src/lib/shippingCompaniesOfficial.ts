export interface ShippingCompany {
  id: string;
  name: string;
  nameAr: string;
  logo: string;
  colors: {
    primary: string;
    secondary: string;
    accent?: string;
    background?: string;
    cardBg?: string;
    textPrimary?: string;
    textSecondary?: string;
    border?: string;
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
    background?: string;
  };
  fontFamily: string;
  description?: string;
  isActive?: boolean;
  // Additional styling properties for pixel-perfect design
  styling?: {
    buttonStyle?: {
      padding?: string;
      borderRadius?: string;
      fontWeight?: string;
      textTransform?: string;
    };
    headerStyle?: {
      height?: string;
      padding?: string;
      boxShadow?: string;
    };
    cardStyle?: {
      padding?: string;
      borderRadius?: string;
      border?: string;
    };
  };
  // Official brand assets
  assets?: {
    heroImage?: string;
    pattern?: string;
    icon?: string;
  };
}

export const SHIPPING_COMPANIES_OFFICIAL: Record<string, ShippingCompany> = {
  // ========================================
  // INTERNATIONAL COMPANIES
  // ========================================

  dhl: {
    id: 'dhl',
    name: 'DHL Express',
    nameAr: 'دي إتش إل إكسبرس',
    logo: '/logos/dhl.svg',
    colors: {
      primary: '#FFCC00',
      secondary: '#D40511',
      accent: '#000000',
      background: 'linear-gradient(180deg, #FFFEF7 0%, #FFF9E6 100%)',
      cardBg: '#FFFFFF',
      textPrimary: '#1A1A1A',
      textSecondary: '#6B6B6B',
      border: '#E5E5E5',
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
      background: 'linear-gradient(180deg, #FFFEF7 0%, #FFF9E6 100%)',
    },
    fontFamily: "'DHL', 'Helvetica', 'Arial', sans-serif",
    description: 'Worldwide express delivery',
    isActive: true,
    styling: {
      buttonStyle: {
        padding: '14px 28px',
        borderRadius: '8px',
        fontWeight: '700',
        textTransform: 'uppercase',
      },
      headerStyle: {
        height: '80px',
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(212, 5, 17, 0.08)',
      },
      cardStyle: {
        padding: '32px',
        borderRadius: '12px',
        border: '1px solid #E5E5E5',
      },
    },
    assets: {
      heroImage: '/assets/hero-dhl.jpg',
      pattern: '/assets/patterns/dhl-pattern.svg',
    },
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
      background: 'linear-gradient(180deg, #FFF 0%, #F5F0FF 100%)',
      cardBg: '#FFFFFF',
      textPrimary: '#1A1A1A',
      textSecondary: '#6B6B6B',
      border: '#E5E5E5',
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
      background: 'linear-gradient(180deg, #FFF 0%, #F5F0FF 100%)',
    },
    fontFamily: "'FedEx', 'Inter', 'Helvetica', sans-serif",
    description: 'Fast, reliable shipping',
    isActive: true,
    styling: {
      buttonStyle: {
        padding: '14px 28px',
        borderRadius: '6px',
        fontWeight: '600',
        textTransform: 'none',
      },
      headerStyle: {
        height: '80px',
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(77, 20, 140, 0.08)',
      },
      cardStyle: {
        padding: '32px',
        borderRadius: '8px',
        border: '1px solid #E5E5E5',
      },
    },
    assets: {
      heroImage: '/assets/hero-fedex.jpg',
      pattern: '/assets/patterns/fedex-pattern.svg',
    },
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
      background: 'linear-gradient(180deg, #FFF 0%, #F5F3F2 100%)',
      cardBg: '#FFFFFF',
      textPrimary: '#1A1A1A',
      textSecondary: '#6B6B6B',
      border: '#E5E5E5',
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
      background: 'linear-gradient(180deg, #FFF 0%, #F5F3F2 100%)',
    },
    fontFamily: "'UPS', 'Arial', 'Helvetica', sans-serif",
    description: 'Shipping & logistics',
    isActive: true,
    styling: {
      buttonStyle: {
        padding: '14px 28px',
        borderRadius: '0px',
        fontWeight: '700',
        textTransform: 'uppercase',
      },
      headerStyle: {
        height: '80px',
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(53, 28, 21, 0.08)',
      },
      cardStyle: {
        padding: '32px',
        borderRadius: '0px',
        border: '2px solid #351C15',
      },
    },
    assets: {
      heroImage: '/assets/hero-ups.jpg',
      pattern: '/assets/patterns/ups-pattern.svg',
    },
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
      background: 'linear-gradient(180deg, #FFF 0%, #FFF5F5 100%)',
      cardBg: '#FFFFFF',
      textPrimary: '#1A1A1A',
      textSecondary: '#6B6B6B',
      border: '#E0E0E0',
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
      background: 'linear-gradient(180deg, #FFF 0%, #FFF5F5 100%)',
    },
    fontFamily: "'DIN Next', 'Cairo', 'Tajawal', 'Arial', sans-serif",
    description: 'Leading logistics provider',
    isActive: true,
    styling: {
      buttonStyle: {
        padding: '16px 32px',
        borderRadius: '8px',
        fontWeight: '600',
        textTransform: 'none',
      },
      headerStyle: {
        height: '80px',
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(227, 30, 36, 0.08)',
      },
      cardStyle: {
        padding: '32px',
        borderRadius: '12px',
        border: '1px solid #E0E0E0',
      },
    },
    assets: {
      heroImage: '/assets/hero-aramex.jpg',
      pattern: '/assets/patterns/aramex-pattern.svg',
    },
  },

  // ========================================
  // GULF COMPANIES
  // ========================================

  empost: {
    id: 'empost',
    name: 'Emirates Post',
    nameAr: 'بريد الإمارات',
    logo: '/logos/empost-logo.png',
    colors: {
      primary: '#C8102E',
      secondary: '#003087',
      accent: '#FFD700',
      background: 'linear-gradient(180deg, #FFF 0%, #FFF0F2 100%)',
      cardBg: '#FFFFFF',
      textPrimary: '#1A1A1A',
      textSecondary: '#6B6B6B',
      border: '#E0E0E0',
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
      background: 'linear-gradient(180deg, #FFF 0%, #FFF0F2 100%)',
    },
    fontFamily: "'Cairo', 'Tajawal', 'Arial', sans-serif",
    description: 'Official postal service',
    isActive: true,
    styling: {
      buttonStyle: {
        padding: '16px 32px',
        borderRadius: '8px',
        fontWeight: '600',
        textTransform: 'none',
      },
      headerStyle: {
        height: '80px',
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(200, 16, 46, 0.08)',
      },
      cardStyle: {
        padding: '32px',
        borderRadius: '12px',
        border: '1px solid #E0E0E0',
      },
    },
    assets: {
      heroImage: '/assets/hero-empost.jpg',
      pattern: '/assets/patterns/empost-pattern.svg',
    },
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
      background: 'linear-gradient(180deg, #FFF 0%, #F0F7FF 100%)',
      cardBg: '#FFFFFF',
      textPrimary: '#1A1A1A',
      textSecondary: '#6B6B6B',
      border: '#E0E0E0',
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
      background: 'linear-gradient(180deg, #FFF 0%, #F0F7FF 100%)',
    },
    fontFamily: "'Cairo', 'Tajawal', 'Arial', sans-serif",
    description: 'Express delivery in KSA',
    isActive: true,
    styling: {
      buttonStyle: {
        padding: '16px 32px',
        borderRadius: '8px',
        fontWeight: '600',
        textTransform: 'none',
      },
      headerStyle: {
        height: '80px',
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(0, 102, 204, 0.08)',
      },
      cardStyle: {
        padding: '32px',
        borderRadius: '12px',
        border: '1px solid #E0E0E0',
      },
    },
    assets: {
      heroImage: '/assets/hero-smsa.jpg',
      pattern: '/assets/patterns/smsa-pattern.svg',
    },
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
      background: 'linear-gradient(180deg, #FFF 0%, #F0F5FF 100%)',
      cardBg: '#FFFFFF',
      textPrimary: '#1A1A1A',
      textSecondary: '#6B6B6B',
      border: '#E0E0E0',
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
      background: 'linear-gradient(180deg, #FFF 0%, #F0F5FF 100%)',
    },
    fontFamily: "'Cairo', 'Tajawal', 'Arial', sans-serif",
    description: 'E-commerce logistics',
    isActive: true,
    styling: {
      buttonStyle: {
        padding: '16px 32px',
        borderRadius: '8px',
        fontWeight: '600',
        textTransform: 'none',
      },
      headerStyle: {
        height: '80px',
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(28, 69, 135, 0.08)',
      },
      cardStyle: {
        padding: '32px',
        borderRadius: '12px',
        border: '1px solid #E0E0E0',
      },
    },
    assets: {
      heroImage: '/assets/hero-zajil.jpg',
      pattern: '/assets/patterns/zajil-pattern.svg',
    },
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
      background: 'linear-gradient(180deg, #FFF 0%, #F0F5FF 100%)',
      cardBg: '#FFFFFF',
      textPrimary: '#1A1A1A',
      textSecondary: '#6B6B6B',
      border: '#E0E0E0',
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
      background: 'linear-gradient(180deg, #FFF 0%, #F0F5FF 100%)',
    },
    fontFamily: "'Cairo', 'Tajawal', 'Arial', sans-serif",
    description: 'Complete logistics solutions',
    isActive: true,
    styling: {
      buttonStyle: {
        padding: '16px 32px',
        borderRadius: '8px',
        fontWeight: '600',
        textTransform: 'none',
      },
      headerStyle: {
        height: '80px',
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(0, 82, 163, 0.08)',
      },
      cardStyle: {
        padding: '32px',
        borderRadius: '12px',
        border: '1px solid #E0E0E0',
      },
    },
    assets: {
      heroImage: '/assets/hero-naqel.jpg',
      pattern: '/assets/patterns/naqel-pattern.svg',
    },
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
      background: 'linear-gradient(180deg, #FFF 0%, #F0FFF4 100%)',
      cardBg: '#FFFFFF',
      textPrimary: '#1A1A1A',
      textSecondary: '#6B6B6B',
      border: '#E0E0E0',
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
      background: 'linear-gradient(180deg, #FFF 0%, #F0FFF4 100%)',
    },
    fontFamily: "'Cairo', 'Tajawal', 'Arial', sans-serif",
    description: 'National postal service',
    isActive: true,
    styling: {
      buttonStyle: {
        padding: '16px 32px',
        borderRadius: '8px',
        fontWeight: '600',
        textTransform: 'none',
      },
      headerStyle: {
        height: '80px',
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(0, 108, 53, 0.08)',
      },
      cardStyle: {
        padding: '32px',
        borderRadius: '12px',
        border: '1px solid #E0E0E0',
      },
    },
    assets: {
      heroImage: '/assets/hero-saudipost.jpg',
      pattern: '/assets/patterns/saudipost-pattern.svg',
    },
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
      background: 'linear-gradient(180deg, #FFF 0%, #F0FFF4 100%)',
      cardBg: '#FFFFFF',
      textPrimary: '#1A1A1A',
      textSecondary: '#6B6B6B',
      border: '#E0E0E0',
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
      background: 'linear-gradient(180deg, #FFF 0%, #F0FFF4 100%)',
    },
    fontFamily: "'Cairo', 'Tajawal', 'Arial', sans-serif",
    description: 'National postal service',
    isActive: true,
    styling: {
      buttonStyle: {
        padding: '16px 32px',
        borderRadius: '8px',
        fontWeight: '600',
        textTransform: 'none',
      },
      headerStyle: {
        height: '80px',
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(0, 122, 51, 0.08)',
      },
      cardStyle: {
        padding: '32px',
        borderRadius: '12px',
        border: '1px solid #E0E0E0',
      },
    },
    assets: {
      heroImage: '/assets/hero-kuwaitpost.jpg',
      pattern: '/assets/patterns/kuwaitpost-pattern.svg',
    },
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
      background: 'linear-gradient(180deg, #FFF 0%, #FFF0F2 100%)',
      cardBg: '#FFFFFF',
      textPrimary: '#1A1A1A',
      textSecondary: '#6B6B6B',
      border: '#E0E0E0',
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
      background: 'linear-gradient(180deg, #FFF 0%, #FFF0F2 100%)',
    },
    fontFamily: "'Cairo', 'Tajawal', 'Arial', sans-serif",
    description: 'National postal service',
    isActive: true,
    styling: {
      buttonStyle: {
        padding: '16px 32px',
        borderRadius: '8px',
        fontWeight: '600',
        textTransform: 'none',
      },
      headerStyle: {
        height: '80px',
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(142, 24, 56, 0.08)',
      },
      cardStyle: {
        padding: '32px',
        borderRadius: '12px',
        border: '1px solid #E0E0E0',
      },
    },
    assets: {
      heroImage: '/assets/hero-qatarpost.jpg',
      pattern: '/assets/patterns/qatarpost-pattern.svg',
    },
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
      background: 'linear-gradient(180deg, #FFF 0%, #FFF0F0 100%)',
      cardBg: '#FFFFFF',
      textPrimary: '#1A1A1A',
      textSecondary: '#6B6B6B',
      border: '#E0E0E0',
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
      background: 'linear-gradient(180deg, #FFF 0%, #FFF0F0 100%)',
    },
    fontFamily: "'Cairo', 'Tajawal', 'Arial', sans-serif",
    description: 'National postal service',
    isActive: true,
    styling: {
      buttonStyle: {
        padding: '16px 32px',
        borderRadius: '8px',
        fontWeight: '600',
        textTransform: 'none',
      },
      headerStyle: {
        height: '80px',
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(237, 28, 36, 0.08)',
      },
      cardStyle: {
        padding: '32px',
        borderRadius: '12px',
        border: '1px solid #E0E0E0',
      },
    },
    assets: {
      heroImage: '/assets/hero-omanpost.jpg',
      pattern: '/assets/patterns/omanpost-pattern.svg',
    },
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
      background: 'linear-gradient(180deg, #FFF 0%, #FFF0F0 100%)',
      cardBg: '#FFFFFF',
      textPrimary: '#1A1A1A',
      textSecondary: '#6B6B6B',
      border: '#E0E0E0',
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
      background: 'linear-gradient(180deg, #FFF 0%, #FFF0F0 100%)',
    },
    fontFamily: "'Cairo', 'Tajawal', 'Arial', sans-serif",
    description: 'National postal service',
    isActive: true,
    styling: {
      buttonStyle: {
        padding: '16px 32px',
        borderRadius: '8px',
        fontWeight: '600',
        textTransform: 'none',
      },
      headerStyle: {
        height: '80px',
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(206, 17, 38, 0.08)',
      },
      cardStyle: {
        padding: '32px',
        borderRadius: '12px',
        border: '1px solid #E0E0E0',
      },
    },
    assets: {
      heroImage: '/assets/hero-bahrainpost.jpg',
      pattern: '/assets/patterns/bahrainpost-pattern.svg',
    },
  },

  // ========================================
  // US COMPANIES
  // ========================================

  usps: {
    id: 'usps',
    name: 'USPS',
    nameAr: 'خدمة البريد الأمريكية',
    logo: '/logos/usps.svg',
    colors: {
      primary: '#0050B3',
      secondary: '#E31C22',
      accent: '#FFFFFF',
      background: 'linear-gradient(180deg, #FFF 0%, #F0F5FF 100%)',
      cardBg: '#FFFFFF',
      textPrimary: '#1A1A1A',
      textSecondary: '#6B6B6B',
      border: '#E0E0E0',
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
      background: 'linear-gradient(180deg, #FFF 0%, #F0F5FF 100%)',
    },
    fontFamily: "'Source Sans Pro', 'Arial', sans-serif",
    description: 'United States Postal Service',
    isActive: true,
    styling: {
      buttonStyle: {
        padding: '14px 28px',
        borderRadius: '6px',
        fontWeight: '600',
        textTransform: 'none',
      },
      headerStyle: {
        height: '80px',
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(0, 80, 179, 0.08)',
      },
      cardStyle: {
        padding: '32px',
        borderRadius: '8px',
        border: '1px solid #E0E0E0',
      },
    },
    assets: {
      heroImage: '/assets/hero-usps.jpg',
      pattern: '/assets/patterns/usps-pattern.svg',
    },
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
      background: 'linear-gradient(180deg, #FFF 0%, #FFF5F0 100%)',
      cardBg: '#FFFFFF',
      textPrimary: '#1A1A1A',
      textSecondary: '#6B6B6B',
      border: '#E0E0E0',
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
      background: 'linear-gradient(180deg, #FFF 0%, #FFF5F0 100%)',
    },
    fontFamily: "'Arial', 'Helvetica', sans-serif",
    description: 'Western US delivery',
    isActive: true,
    styling: {
      buttonStyle: {
        padding: '14px 28px',
        borderRadius: '6px',
        fontWeight: '600',
        textTransform: 'none',
      },
      headerStyle: {
        height: '80px',
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(255, 102, 0, 0.08)',
      },
      cardStyle: {
        padding: '32px',
        borderRadius: '8px',
        border: '1px solid #E0E0E0',
      },
    },
    assets: {
      heroImage: '/assets/hero-ontrac.jpg',
      pattern: '/assets/patterns/ontrac-pattern.svg',
    },
  },

  // ========================================
  // EUROPEAN COMPANIES
  // ========================================

  royalmail: {
    id: 'royalmail',
    name: 'Royal Mail',
    nameAr: 'البريد الملكي',
    logo: '/logos/royalmail.svg',
    colors: {
      primary: '#E31C22',
      secondary: '#003087',
      accent: '#FFD700',
      background: 'linear-gradient(180deg, #FFF 0%, #FFF0F0 100%)',
      cardBg: '#FFFFFF',
      textPrimary: '#1A1A1A',
      textSecondary: '#6B6B6B',
      border: '#E0E0E0',
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
      background: 'linear-gradient(180deg, #FFF 0%, #FFF0F0 100%)',
    },
    fontFamily: "'Source Sans Pro', 'Arial', sans-serif",
    description: 'UK national postal service',
    isActive: true,
    styling: {
      buttonStyle: {
        padding: '14px 28px',
        borderRadius: '6px',
        fontWeight: '600',
        textTransform: 'none',
      },
      headerStyle: {
        height: '80px',
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(227, 28, 34, 0.08)',
      },
      cardStyle: {
        padding: '32px',
        borderRadius: '8px',
        border: '1px solid #E0E0E0',
      },
    },
    assets: {
      heroImage: '/assets/hero-royalmail.jpg',
      pattern: '/assets/patterns/royalmail-pattern.svg',
    },
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
      background: 'linear-gradient(180deg, #FFF 0%, #FFFEF0 100%)',
      cardBg: '#FFFFFF',
      textPrimary: '#1A1A1A',
      textSecondary: '#6B6B6B',
      border: '#E0E0E0',
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
      background: 'linear-gradient(180deg, #FFF 0%, #FFFEF0 100%)',
    },
    fontFamily: "'DPD', 'Arial', sans-serif",
    description: 'Delivery service',
    isActive: true,
    styling: {
      buttonStyle: {
        padding: '14px 28px',
        borderRadius: '6px',
        fontWeight: '700',
        textTransform: 'uppercase',
      },
      headerStyle: {
        height: '80px',
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(230, 0, 25, 0.08)',
      },
      cardStyle: {
        padding: '32px',
        borderRadius: '8px',
        border: '1px solid #E0E0E0',
      },
    },
    assets: {
      heroImage: '/assets/hero-dpd.jpg',
      pattern: '/assets/patterns/dpd-pattern.svg',
    },
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
      background: 'linear-gradient(180deg, #FFFEF7 0%, #FFF9E6 100%)',
      cardBg: '#FFFFFF',
      textPrimary: '#1A1A1A',
      textSecondary: '#6B6B6B',
      border: '#E5E5E5',
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
      background: 'linear-gradient(180deg, #FFFEF7 0%, #FFF9E6 100%)',
    },
    fontFamily: "'DHL', 'Arial', sans-serif",
    description: 'European delivery',
    isActive: true,
    styling: {
      buttonStyle: {
        padding: '14px 28px',
        borderRadius: '8px',
        fontWeight: '700',
        textTransform: 'uppercase',
      },
      headerStyle: {
        height: '80px',
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(212, 5, 17, 0.08)',
      },
      cardStyle: {
        padding: '32px',
        borderRadius: '12px',
        border: '1px solid #E5E5E5',
      },
    },
    assets: {
      heroImage: '/assets/hero-dhlpacket.jpg',
      pattern: '/assets/patterns/dhlpacket-pattern.svg',
    },
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
      background: 'linear-gradient(180deg, #FFF 0%, #F0F5FF 100%)',
      cardBg: '#FFFFFF',
      textPrimary: '#1A1A1A',
      textSecondary: '#6B6B6B',
      border: '#E0E0E0',
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
      background: 'linear-gradient(180deg, #FFF 0%, #F0F5FF 100%)',
    },
    fontFamily: "'Helvetica', 'Arial', sans-serif",
    description: 'French postal service',
    isActive: true,
    styling: {
      buttonStyle: {
        padding: '14px 28px',
        borderRadius: '6px',
        fontWeight: '600',
        textTransform: 'none',
      },
      headerStyle: {
        height: '80px',
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(0, 48, 135, 0.08)',
      },
      cardStyle: {
        padding: '32px',
        borderRadius: '8px',
        border: '1px solid #E0E0E0',
      },
    },
    assets: {
      heroImage: '/assets/hero-laposte.jpg',
      pattern: '/assets/patterns/laposte-pattern.svg',
    },
  },

  // ========================================
  // ASIAN COMPANIES
  // ========================================

  jt: {
    id: 'jt',
    name: 'J&T Express',
    nameAr: 'جي أند تي إكسبرس',
    logo: '/logos/jt.svg',
    colors: {
      primary: '#FF6600',
      secondary: '#003087',
      accent: '#FFFFFF',
      background: 'linear-gradient(180deg, #FFF 0%, #FFF5F0 100%)',
      cardBg: '#FFFFFF',
      textPrimary: '#1A1A1A',
      textSecondary: '#6B6B6B',
      border: '#E0E0E0',
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
      background: 'linear-gradient(180deg, #FFF 0%, #FFF5F0 100%)',
    },
    fontFamily: "'Arial', sans-serif",
    description: 'E-commerce logistics',
    isActive: true,
    styling: {
      buttonStyle: {
        padding: '14px 28px',
        borderRadius: '6px',
        fontWeight: '600',
        textTransform: 'none',
      },
      headerStyle: {
        height: '80px',
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(255, 102, 0, 0.08)',
      },
      cardStyle: {
        padding: '32px',
        borderRadius: '8px',
        border: '1px solid #E0E0E0',
      },
    },
    assets: {
      heroImage: '/assets/hero-jt.jpg',
      pattern: '/assets/patterns/jt-pattern.svg',
    },
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
      background: 'linear-gradient(180deg, #FFF 0%, #FFF0F0 100%)',
      cardBg: '#FFFFFF',
      textPrimary: '#1A1A1A',
      textSecondary: '#6B6B6B',
      border: '#E0E0E0',
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
      background: 'linear-gradient(180deg, #FFF 0%, #FFF0F0 100%)',
    },
    fontFamily: "'Microsoft YaHei', 'Arial', sans-serif",
    description: 'Express delivery service',
    isActive: true,
    styling: {
      buttonStyle: {
        padding: '14px 28px',
        borderRadius: '6px',
        fontWeight: '600',
        textTransform: 'none',
      },
      headerStyle: {
        height: '80px',
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(230, 0, 18, 0.08)',
      },
      cardStyle: {
        padding: '32px',
        borderRadius: '8px',
        border: '1px solid #E0E0E0',
      },
    },
    assets: {
      heroImage: '/assets/hero-sfexpress.jpg',
      pattern: '/assets/patterns/sfexpress-pattern.svg',
    },
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
      background: 'linear-gradient(180deg, #FFF 0%, #F5F5FF 100%)',
      cardBg: '#FFFFFF',
      textPrimary: '#1A1A1A',
      textSecondary: '#6B6B6B',
      border: '#E0E0E0',
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
      background: 'linear-gradient(180deg, #FFF 0%, #F5F5FF 100%)',
    },
    fontFamily: "'Poppins', 'Cairo', 'Tajawal', sans-serif",
    description: 'Global logistics & courier',
    isActive: true,
    styling: {
      buttonStyle: {
        padding: '16px 32px',
        borderRadius: '12px',
        fontWeight: '600',
        textTransform: 'none',
      },
      headerStyle: {
        height: '80px',
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(106, 90, 205, 0.08)',
      },
      cardStyle: {
        padding: '32px',
        borderRadius: '16px',
        border: '1px solid #E0E0E0',
      },
    },
    assets: {
      heroImage: '/assets/hero-ginakum.jpg',
      pattern: '/assets/patterns/ginakum-pattern.svg',
    },
  },

  // ========================================
  // AUSTRALIA
  // ========================================

  auspost: {
    id: 'auspost',
    name: 'Australia Post',
    nameAr: 'بريد أستراليا',
    logo: '/logos/auspost.svg',
    colors: {
      primary: '#E31C22',
      secondary: '#003087',
      accent: '#FFD700',
      background: 'linear-gradient(180deg, #FFF 0%, #FFF0F0 100%)',
      cardBg: '#FFFFFF',
      textPrimary: '#1A1A1A',
      textSecondary: '#6B6B6B',
      border: '#E0E0E0',
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
      background: 'linear-gradient(180deg, #FFF 0%, #FFF0F0 100%)',
    },
    fontFamily: "'Source Sans Pro', 'Arial', sans-serif",
    description: 'National postal service',
    isActive: true,
    styling: {
      buttonStyle: {
        padding: '14px 28px',
        borderRadius: '6px',
        fontWeight: '600',
        textTransform: 'none',
      },
      headerStyle: {
        height: '80px',
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(227, 28, 34, 0.08)',
      },
      cardStyle: {
        padding: '32px',
        borderRadius: '8px',
        border: '1px solid #E0E0E0',
      },
    },
    assets: {
      heroImage: '/assets/hero-auspost.jpg',
      pattern: '/assets/patterns/auspost-pattern.svg',
    },
  },
};

// Helper functions
export const getCompaniesByCountry = (countryCode: string): ShippingCompany[] => {
  return Object.values(SHIPPING_COMPANIES_OFFICIAL).filter(
    (company) => company.countries.includes(countryCode) && company.isActive
  );
};

export const getCompanyById = (id: string): ShippingCompany | undefined => {
  return SHIPPING_COMPANIES_OFFICIAL[id];
};

export const getAllActiveCompanies = (): ShippingCompany[] => {
  return Object.values(SHIPPING_COMPANIES_OFFICIAL).filter((company) => company.isActive);
};

export const getCompanyStyles = (companyId: string) => {
  const company = getCompanyById(companyId);
  if (!company) {
    return {
      gradient: 'linear-gradient(135deg, #E31E24, #FF6B35)',
      background: 'linear-gradient(180deg, #FFF 0%, #FFF5F5 100%)',
      cardBg: '#FFFFFF',
      primaryText: '#1A1A1A',
      secondaryText: '#6B6B6B',
      logo: '/logos/aramex-logo.svg',
      fontFamily: "'Cairo', 'Tajawal', sans-serif",
      headerBg: '#FFFFFF',
      borderColor: '#E0E0E0',
      buttonShadow: '0 4px 12px rgba(227, 30, 36, 0.25)',
      inputFocus: '#E31E24',
    };
  }

  return {
    gradient: company.officialColors.gradient || company.officialColors.background || 'linear-gradient(135deg, #E31E24, #FF6B35)',
    background: company.colors.background || 'linear-gradient(180deg, #FFF 0%, #F5F5F5 100%)',
    cardBg: company.colors.cardBg || '#FFFFFF',
    primaryText: company.colors.textPrimary || '#1A1A1A',
    secondaryText: company.colors.textSecondary || '#6B6B6B',
    logo: company.logo,
    fontFamily: company.fontFamily,
    headerBg: '#FFFFFF',
    borderColor: company.colors.border || '#E0E0E0',
    buttonShadow: `0 4px 12px ${company.colors.primary}40`,
    inputFocus: company.colors.primary,
    // Additional styling properties
    buttonStyle: company.styling?.buttonStyle,
    headerStyle: company.styling?.headerStyle,
    cardStyle: company.styling?.cardStyle,
    assets: company.assets,
  };
};
