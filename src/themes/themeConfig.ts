export interface ThemeColors {
  primary: string;
  secondary: string;
  accent?: string;
  background: string;
  surface: string;
  text: string;
  textSecondary?: string;
  border: string;
  button: string;
  buttonHover: string;
  buttonText: string;
  inputBg: string;
  inputBorder: string;
  success?: string;
  warning?: string;
  error?: string;
}

export interface ThemeFonts {
  family: string;
  sizes: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  weights: {
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
  };
}

export interface ThemeSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export interface ThemeBorderRadius {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  full: string;
}

export interface CompanyTheme {
  id: string;
  name: string;
  nameAr: string;
  country: string;
  logo: string;
  logoDark?: string;
  colors: ThemeColors;
  fonts: ThemeFonts;
  spacing: ThemeSpacing;
  borderRadius: ThemeBorderRadius;
  style: {
    buttonShape: 'rounded' | 'rect' | 'pill';
    formField: 'flat' | 'outlined' | 'filled';
    shadow: 'none' | 'light' | 'medium' | 'strong';
    hasGradient: boolean;
    gradientDirection?: 'horizontal' | 'vertical' | 'diagonal';
  };
  responsive: {
    mobileBreakpoint: string;
    tabletBreakpoint: string;
  };
  localization: {
    rtl: boolean;
    language: 'ar' | 'en' | 'both';
  };
}

export const SHIPPING_COMPANY_THEMES: Record<string, CompanyTheme> = {
  // ===== الإمارات العربية المتحدة =====
  aramex: {
    id: 'aramex',
    name: 'Aramex',
    nameAr: 'أرامكس',
    country: 'UAE',
    logo: '/logos/aramex-logo.svg',
    logoDark: '/logos/aramex-dark.svg',
    colors: {
      primary: '#dc291e',
      secondary: '#FF6B35',
      accent: '#FFFFFF',
      background: '#F5F5F5',
      surface: '#FFFFFF',
      text: '#1A1A1A',
      textSecondary: '#6B6B6B',
      border: '#E0E0E0',
      button: '#dc291e',
      buttonHover: '#b02118',
      buttonText: '#FFFFFF',
      inputBg: '#FFFFFF',
      inputBorder: '#CCCCCC',
      success: '#00A651',
      warning: '#FFB81C',
      error: '#E31837',
      gradientFrom: '#E31E24',
      gradientTo: '#FF6B35'
    },
    fonts: {
      family: "'DIN Next', 'Cairo', 'Tajawal', 'Arial', sans-serif",
      sizes: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '24px',
        xxl: '32px',
        xxxl: '40px'
      },
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      }
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      xxl: '48px'
    },
    borderRadius: {
      none: '0px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      xl: '12px',
      xxl: '16px',
      full: '50%'
    },
    style: {
      buttonShape: 'rounded',
      formField: 'outlined',
      shadow: 'light',
      hasGradient: true,
      gradientDirection: 'horizontal',
      cardShadow: '0 4px 12px rgba(227, 30, 36, 0.08)',
      headerHeight: '80px',
      cardMaxWidth: '560px'
    },
    responsive: {
      mobileBreakpoint: '768px',
      tabletBreakpoint: '1024px'
    },
    localization: {
      rtl: true,
      language: 'both'
    }
  },

  aramex_gulf: {
    id: 'aramex_gulf',
    name: 'Aramex Gulf',
    nameAr: 'أرامكس الخليج',
    country: 'GULF',
    logo: '/logos/aramex-gulf-logo.svg',
    logoDark: '/logos/aramex-gulf-dark.svg',
    colors: {
      primary: '#EB5B00',
      secondary: '#FF6B35',
      accent: '#FFFFFF',
      background: '#F8F9FA',
      surface: '#FFFFFF',
      text: '#212529',
      textSecondary: '#6C757D',
      border: '#DEE2E6',
      button: '#EB5B00',
      buttonHover: '#D04E00',
      buttonText: '#FFFFFF',
      inputBg: '#FFFFFF',
      inputBorder: '#CED4DA',
      success: '#28A745',
      warning: '#FFC107',
      error: '#DC3545'
    },
    fonts: {
      family: "'DIN Next', 'Cairo', 'Tajawal', Arial, sans-serif",
      sizes: {
        xs: '11px',
        sm: '13px',
        base: '16px',
        lg: '18px',
        xl: '24px',
        xxl: '32px'
      },
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      }
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      xxl: '48px'
    },
    borderRadius: {
      none: '0px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      xl: '12px',
      full: '50%'
    },
    style: {
      buttonShape: 'rounded',
      formField: 'outlined',
      shadow: 'light',
      hasGradient: true,
      gradientDirection: 'horizontal'
    },
    responsive: {
      mobileBreakpoint: '768px',
      tabletBreakpoint: '1024px'
    },
    localization: {
      rtl: true,
      language: 'both'
    }
  },

  dhl: {
    id: 'dhl',
    name: 'DHL',
    nameAr: 'دي إتش إل',
    country: 'UAE',
    logo: '/logos/dhl-logo.svg',
    logoDark: '/logos/dhl-dark.svg',
    colors: {
      primary: '#FFCC00',
      secondary: '#D40511',
      accent: '#FFCC00',
      background: '#FAFAFA',
      surface: '#FFFFFF',
      text: '#000000',
      textSecondary: '#4A4A4A',
      border: '#E5E5E5',
      button: '#D40511',
      buttonHover: '#BB0410',
      buttonText: '#FFFFFF',
      inputBg: '#FFFFFF',
      inputBorder: '#CCCCCC',
      success: '#00752E',
      warning: '#FFA500',
      error: '#E60012',
      gradientFrom: '#FFCC00',
      gradientTo: '#D40511'
    },
    fonts: {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      sizes: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '24px',
        xxl: '30px',
        xxxl: '36px'
      },
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      }
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      xxl: '48px'
    },
    borderRadius: {
      none: '0px',
      sm: '0px',
      md: '2px',
      lg: '4px',
      xl: '6px',
      xxl: '8px',
      full: '50%'
    },
    style: {
      buttonShape: 'rect',
      formField: 'outlined',
      shadow: 'light',
      hasGradient: true,
      gradientDirection: 'horizontal',
      cardShadow: '0 2px 8px rgba(0,0,0,0.1)',
      headerHeight: '80px',
      cardMaxWidth: '560px'
    },
    responsive: {
      mobileBreakpoint: '768px',
      tabletBreakpoint: '1024px'
    },
    localization: {
      rtl: true,
      language: 'both'
    }
  },

  fedex: {
    id: 'fedex',
    name: 'FedEx',
    nameAr: 'فيديكس',
    country: 'UAE',
    logo: '/logos/fedex-logo.svg',
    logoDark: '/logos/fedex-dark.svg',
    colors: {
      primary: '#4d148c',
      secondary: '#ff6200',
      accent: '#FFFFFF',
      background: '#FAFAFA',
      surface: '#FFFFFF',
      text: '#2C2C2C',
      textSecondary: '#707070',
      border: '#E0E0E0',
      button: '#4D148C',
      buttonHover: '#3E0F6B',
      buttonText: '#FFFFFF',
      inputBg: '#FFFFFF',
      inputBorder: '#CCCCCC',
      success: '#00A651',
      warning: '#FFB81C',
      error: '#E4002B'
    },
    fonts: {
      family: "'FedEx', 'Inter', sans-serif",
      sizes: {
        xs: '11px',
        sm: '13px',
        base: '15px',
        lg: '18px',
        xl: '24px',
        xxl: '30px'
      },
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      }
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '36px',
      xxl: '48px'
    },
    borderRadius: {
      none: '0px',
      sm: '2px',
      md: '4px',
      lg: '6px',
      xl: '8px',
      full: '50px'
    },
    style: {
      buttonShape: 'rounded',
      formField: 'outlined',
      shadow: 'light',
      hasGradient: false
    },
    responsive: {
      mobileBreakpoint: '768px',
      tabletBreakpoint: '1024px'
    },
    localization: {
      rtl: true,
      language: 'both'
    }
  },

  ups: {
    id: 'ups',
    name: 'UPS',
    nameAr: 'يو بي إس',
    country: 'UAE',
    logo: '/logos/ups-logo.svg',
    logoDark: '/logos/ups-dark.svg',
    colors: {
      primary: '#301504',
      secondary: '#FCB900',
      accent: '#FFFFFF',
      background: '#FFFFFF',
      surface: '#F8F8F8',
      text: '#1A1A1A',
      textSecondary: '#666666',
      border: '#DDDDDD',
      button: '#351C15',
      buttonHover: '#2A1510',
      buttonText: '#FFFFFF',
      inputBg: '#FFFFFF',
      inputBorder: '#CCCCCC',
      success: '#00A350',
      warning: '#FFB500',
      error: '#E31837'
    },
    fonts: {
      family: "'Yanone Kaffeesatz', 'Arial', 'Helvetica', sans-serif",
      sizes: {
        xs: '11px',
        sm: '13px',
        base: '15px',
        lg: '18px',
        xl: '24px',
        xxl: '30px'
      },
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      }
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '36px',
      xxl: '48px'
    },
    borderRadius: {
      none: '0px',
      sm: '0px',
      md: '0px',
      lg: '0px',
      xl: '4px',
      full: '4px'
    },
    style: {
      buttonShape: 'rect',
      formField: 'outlined',
      shadow: 'light',
      hasGradient: false
    },
    responsive: {
      mobileBreakpoint: '768px',
      tabletBreakpoint: '1024px'
    },
    localization: {
      rtl: true,
      language: 'both'
    }
  },

  empost: {
    id: 'empost',
    name: 'Emirates Post',
    nameAr: 'بريد الإمارات',
    country: 'UAE',
    logo: '/logos/empost-logo.svg',
    logoDark: '/logos/empost-dark.svg',
    colors: {
      primary: '#D2122E', // Emirates Red
      secondary: '#000000', // Black
      accent: '#FFFFFF',
      background: '#F5F7FA',
      surface: '#FFFFFF',
      text: '#1A1A1A',
      textSecondary: '#5A5A5A',
      border: '#E0E0E0',
      button: '#D2122E',
      buttonHover: '#A80D26',
      buttonText: '#FFFFFF',
      inputBg: '#FFFFFF',
      inputBorder: '#CCCCCC',
      success: '#00A651',
      warning: '#FFB500',
      error: '#DC3545'
    },
    fonts: {
      family: "'Cairo', 'Arial', sans-serif",
      sizes: {
        xs: '11px',
        sm: '13px',
        base: '15px',
        lg: '18px',
        xl: '24px',
        xxl: '30px'
      },
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      }
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '36px',
      xxl: '48px'
    },
    borderRadius: {
      none: '0px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      xl: '12px',
      full: '50%'
    },
    style: {
      buttonShape: 'rounded',
      formField: 'outlined',
      shadow: 'light',
      hasGradient: true,
      gradientDirection: 'horizontal'
    },
    responsive: {
      mobileBreakpoint: '768px',
      tabletBreakpoint: '1024px'
    },
    localization: {
      rtl: true,
      language: 'both'
    }
  },

  // ===== المملكة العربية السعودية =====
  smsa: {
    id: 'smsa',
    name: 'SMSA Express',
    nameAr: 'شركة سمسا اكسبريس',
    country: 'SA',
    logo: '/logos/smsa-logo.svg',
    logoDark: '/logos/smsa-dark.svg',
    colors: {
      primary: '#FF6600', // SMSA Orange
      secondary: '#00529B', // SMSA Blue
      accent: '#FFFFFF',
      background: '#F8F9FA',
      surface: '#FFFFFF',
      text: '#1A1A1A',
      textSecondary: '#5A5A5A',
      border: '#E0E0E0',
      button: '#FF6600',
      buttonHover: '#E65C00',
      buttonText: '#FFFFFF',
      inputBg: '#FFFFFF',
      inputBorder: '#CCCCCC',
      success: '#28A745',
      warning: '#FFC107',
      error: '#DC3545'
    },
    fonts: {
      family: "'Cairo', 'Arial', sans-serif",
      sizes: {
        xs: '11px',
        sm: '13px',
        base: '15px',
        lg: '18px',
        xl: '24px',
        xxl: '30px'
      },
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      }
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '36px',
      xxl: '48px'
    },
    borderRadius: {
      none: '0px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      xl: '12px',
      full: '50%'
    },
    style: {
      buttonShape: 'rounded',
      formField: 'outlined',
      shadow: 'light',
      hasGradient: false
    },
    responsive: {
      mobileBreakpoint: '768px',
      tabletBreakpoint: '1024px'
    },
    localization: {
      rtl: true,
      language: 'both'
    }
  },

  zajil: {
    id: 'zajil',
    name: 'Zajil',
    nameAr: 'زاجل',
    country: 'SA',
    logo: '/logos/zajil-logo.svg',
    logoDark: '/logos/zajil-dark.svg',
    colors: {
      primary: '#00AEEF', // Zajil Blue
      secondary: '#FFFFFF',
      accent: '#FFFFFF',
      background: '#F8F9FA',
      surface: '#FFFFFF',
      text: '#1A1A1A',
      textSecondary: '#5A5A5A',
      border: '#E0E0E0',
      button: '#00AEEF',
      buttonHover: '#009CDD',
      buttonText: '#FFFFFF',
      inputBg: '#FFFFFF',
      inputBorder: '#CCCCCC',
      success: '#00A651',
      warning: '#FFB500',
      error: '#E4002B'
    },
    fonts: {
      family: "'Cairo', 'Arial', sans-serif",
      sizes: {
        xs: '11px',
        sm: '13px',
        base: '15px',
        lg: '18px',
        xl: '24px',
        xxl: '30px'
      },
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      }
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '36px',
      xxl: '48px'
    },
    borderRadius: {
      none: '0px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      xl: '12px',
      full: '50%'
    },
    style: {
      buttonShape: 'rounded',
      formField: 'outlined',
      shadow: 'light',
      hasGradient: false
    },
    responsive: {
      mobileBreakpoint: '768px',
      tabletBreakpoint: '1024px'
    },
    localization: {
      rtl: true,
      language: 'both'
    }
  },

  naqel: {
    id: 'naqel',
    name: 'Naqel Express',
    nameAr: 'شركة ناقل إكسبرس',
    country: 'SA',
    logo: '/logos/naqel-logo.svg',
    logoDark: '/logos/naqel-dark.svg',
    colors: {
      primary: '#D9232D', // Naqel Red
      secondary: '#000000', // Black
      accent: '#FFFFFF',
      background: '#F8F9FA',
      surface: '#FFFFFF',
      text: '#1A1A1A',
      textSecondary: '#5A5A5A',
      border: '#E0E0E0',
      button: '#D9232D',
      buttonHover: '#B61C25',
      buttonText: '#FFFFFF',
      inputBg: '#FFFFFF',
      inputBorder: '#CCCCCC',
      success: '#28A745',
      warning: '#FFC107',
      error: '#DC3545'
    },
    fonts: {
      family: "'Cairo', 'Arial', sans-serif",
      sizes: {
        xs: '11px',
        sm: '13px',
        base: '15px',
        lg: '18px',
        xl: '24px',
        xxl: '30px'
      },
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      }
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '36px',
      xxl: '48px'
    },
    borderRadius: {
      none: '0px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      xl: '12px',
      full: '50%'
    },
    style: {
      buttonShape: 'rounded',
      formField: 'outlined',
      shadow: 'light',
      hasGradient: false
    },
    responsive: {
      mobileBreakpoint: '768px',
      tabletBreakpoint: '1024px'
    },
    localization: {
      rtl: true,
      language: 'both'
    }
  },

  saudipost: {
    id: 'saudipost',
    name: 'Saudi Post',
    nameAr: 'بريد السعودية',
    country: 'SA',
    logo: '/logos/saudipost-logo.svg',
    logoDark: '/logos/saudipost-dark.svg',
    colors: {
      primary: '#00A651', // Saudi Post Green
      secondary: '#FFFFFF',
      accent: '#FFFFFF',
      background: '#F8F9FA',
      surface: '#FFFFFF',
      text: '#1A1A1A',
      textSecondary: '#5A5A5A',
      border: '#E0E0E0',
      button: '#00A651',
      buttonHover: '#008743',
      buttonText: '#FFFFFF',
      inputBg: '#FFFFFF',
      inputBorder: '#CCCCCC',
      success: '#00A651',
      warning: '#FFB500',
      error: '#DC3545'
    },
    fonts: {
      family: "'Cairo', 'Arial', sans-serif",
      sizes: {
        xs: '11px',
        sm: '13px',
        base: '15px',
        lg: '18px',
        xl: '24px',
        xxl: '30px'
      },
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      }
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '36px',
      xxl: '48px'
    },
    borderRadius: {
      none: '0px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      xl: '12px',
      full: '50%'
    },
    style: {
      buttonShape: 'rounded',
      formField: 'outlined',
      shadow: 'light',
      hasGradient: false
    },
    responsive: {
      mobileBreakpoint: '768px',
      tabletBreakpoint: '1024px'
    },
    localization: {
      rtl: true,
      language: 'both'
    }
  },

  // ===== الكويت =====
  kwpost: {
    id: 'kwpost',
    name: 'Kuwait Post',
    nameAr: 'بريد الكويت',
    country: 'KW',
    logo: '/logos/kuwaitpost-logo.svg',
    logoDark: '/logos/kwpost-dark.svg',
    colors: {
      primary: '#007A3D', // Kuwait Green
      secondary: '#CE1126', // Kuwait Red
      accent: '#FFFFFF',
      background: '#F8F9FA',
      surface: '#FFFFFF',
      text: '#1A1A1A',
      textSecondary: '#5A5A5A',
      border: '#E0E0E0',
      button: '#007A3D',
      buttonHover: '#005D26',
      buttonText: '#FFFFFF',
      inputBg: '#FFFFFF',
      inputBorder: '#CCCCCC',
      success: '#28A745',
      warning: '#FFC107',
      error: '#DC3545'
    },
    fonts: {
      family: "'Cairo', 'Arial', sans-serif",
      sizes: {
        xs: '11px',
        sm: '13px',
        base: '15px',
        lg: '18px',
        xl: '24px',
        xxl: '30px'
      },
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      }
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '36px',
      xxl: '48px'
    },
    borderRadius: {
      none: '0px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      xl: '12px',
      full: '50%'
    },
    style: {
      buttonShape: 'rounded',
      formField: 'outlined',
      shadow: 'light',
      hasGradient: false
    },
    responsive: {
      mobileBreakpoint: '768px',
      tabletBreakpoint: '1024px'
    },
    localization: {
      rtl: true,
      language: 'both'
    }
  },

  // ===== قطر =====
  qpost: {
    id: 'qpost',
    name: 'Qatar Post',
    nameAr: 'بريد قطر',
    country: 'QA',
    logo: '/logos/qatarpost-logo.svg',
    logoDark: '/logos/qpost-dark.svg',
    colors: {
      primary: '#8D1B3D', // Qatar Maroon
      secondary: '#FFFFFF',
      accent: '#8D1B3D',
      background: '#F8F9FA',
      surface: '#FFFFFF',
      text: '#1A1A1A',
      textSecondary: '#5A5A5A',
      border: '#E0E0E0',
      button: '#8D1B3D',
      buttonHover: '#6E132B',
      buttonText: '#FFFFFF',
      inputBg: '#FFFFFF',
      inputBorder: '#CCCCCC',
      success: '#28A745',
      warning: '#FFC107',
      error: '#DC3545'
    },
    fonts: {
      family: "'Cairo', 'Arial', sans-serif",
      sizes: {
        xs: '11px',
        sm: '13px',
        base: '15px',
        lg: '18px',
        xl: '24px',
        xxl: '30px'
      },
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      }
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '36px',
      xxl: '48px'
    },
    borderRadius: {
      none: '0px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      xl: '12px',
      full: '50%'
    },
    style: {
      buttonShape: 'rounded',
      formField: 'outlined',
      shadow: 'light',
      hasGradient: false
    },
    responsive: {
      mobileBreakpoint: '768px',
      tabletBreakpoint: '1024px'
    },
    localization: {
      rtl: true,
      language: 'both'
    }
  },

  // ===== عمان =====
  omanpost: {
    id: 'omanpost',
    name: 'Oman Post',
    nameAr: 'بريد عمان',
    country: 'OM',
    logo: '/logos/omanpost-logo.svg',
    logoDark: '/logos/omanpost-dark.svg',
    colors: {
      primary: '#D7282F', // Oman Red
      secondary: '#008B45', // Oman Green
      accent: '#FFFFFF',
      background: '#F8F9FA',
      surface: '#FFFFFF',
      text: '#1A1A1A',
      textSecondary: '#5A5A5A',
      border: '#E0E0E0',
      button: '#D7282F',
      buttonHover: '#B02026',
      buttonText: '#FFFFFF',
      inputBg: '#FFFFFF',
      inputBorder: '#CCCCCC',
      success: '#28A745',
      warning: '#FFC107',
      error: '#DC3545'
    },
    fonts: {
      family: "'Cairo', 'Arial', sans-serif",
      sizes: {
        xs: '11px',
        sm: '13px',
        base: '15px',
        lg: '18px',
        xl: '24px',
        xxl: '30px'
      },
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      }
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '36px',
      xxl: '48px'
    },
    borderRadius: {
      none: '0px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      xl: '12px',
      full: '50%'
    },
    style: {
      buttonShape: 'rounded',
      formField: 'outlined',
      shadow: 'light',
      hasGradient: false
    },
    responsive: {
      mobileBreakpoint: '768px',
      tabletBreakpoint: '1024px'
    },
    localization: {
      rtl: true,
      language: 'both'
    }
  },

  // ===== البحرين =====
  bahpost: {
    id: 'bahpost',
    name: 'Bahrain Post',
    nameAr: 'بريد البحرين',
    country: 'BH',
    logo: '/logos/bahpost-logo.svg',
    logoDark: '/logos/bahpost-dark.svg',
    colors: {
      primary: '#DA291C', // Bahrain Red
      secondary: '#FFFFFF',
      accent: '#DA291C',
      background: '#F8F9FA',
      surface: '#FFFFFF',
      text: '#1A1A1A',
      textSecondary: '#5A5A5A',
      border: '#E0E0E0',
      button: '#DA291C',
      buttonHover: '#A80E1D',
      buttonText: '#FFFFFF',
      inputBg: '#FFFFFF',
      inputBorder: '#CCCCCC',
      success: '#28A745',
      warning: '#FFC107',
      error: '#DC3545'
    },
    fonts: {
      family: "'Cairo', 'Arial', sans-serif",
      sizes: {
        xs: '11px',
        sm: '13px',
        base: '15px',
        lg: '18px',
        xl: '24px',
        xxl: '30px'
      },
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      }
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '36px',
      xxl: '48px'
    },
    borderRadius: {
      none: '0px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      xl: '12px',
      full: '50%'
    },
    style: {
      buttonShape: 'rounded',
      formField: 'outlined',
      shadow: 'light',
      hasGradient: false
    },
    responsive: {
      mobileBreakpoint: '768px',
      tabletBreakpoint: '1024px'
    },
    localization: {
      rtl: true,
      language: 'both'
    }
  }
};

export const getThemeById = (companyId: string): CompanyTheme | undefined => {
  return SHIPPING_COMPANY_THEMES[companyId.toLowerCase()];
};

export const getThemesByCountry = (countryCode: string): CompanyTheme[] => {
  return Object.values(SHIPPING_COMPANY_THEMES).filter(
    (theme) => theme.country === countryCode.toUpperCase()
  );
};

export const getAllThemes = (): CompanyTheme[] => {
  return Object.values(SHIPPING_COMPANY_THEMES);
};

export const getAllThemeIds = (): string[] => {
  return Object.keys(SHIPPING_COMPANY_THEMES);
};

export type ThemeId = keyof typeof SHIPPING_COMPANY_THEMES;
export type Theme = CompanyTheme;
