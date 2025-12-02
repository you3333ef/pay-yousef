export interface ServiceLogo {
  logo: string;
  darkLogo?: string;
  packageIcon: string;
  lockIcon: string;
  clockIcon: string;
  cardIcon: string;
  shieldIcon: string;
  colors: {
    primary: string;
    secondary: string;
  };
}

export const serviceLogos: Record<string, ServiceLogo> = {
  aramex: {
    logo: '/logos/aramex.svg',
    darkLogo: '/logos/aramex-dark.svg',
    packageIcon: '/icons/package.svg',
    lockIcon: '/icons/lock.svg',
    clockIcon: '/icons/clock.svg',
    cardIcon: '/icons/card.svg',
    shieldIcon: '/icons/shield.svg',
    colors: {
      primary: '#EB5B00',
      secondary: '#FF6B35'
    }
  },
  aramex_gulf: {
    logo: '/logos/aramex-gulf.svg',
    darkLogo: '/logos/aramex-gulf-dark.svg',
    packageIcon: '/icons/package.svg',
    lockIcon: '/icons/lock.svg',
    clockIcon: '/icons/clock.svg',
    cardIcon: '/icons/card.svg',
    shieldIcon: '/icons/shield.svg',
    colors: {
      primary: '#EB5B00',
      secondary: '#FF6B35'
    }
  },
  dhl: {
    logo: '/logos/dhl.svg',
    darkLogo: '/logos/dhl-dark.svg',
    packageIcon: '/icons/package-dhl.svg',
    lockIcon: '/icons/lock-dhl.svg',
    clockIcon: '/icons/clock-dhl.svg',
    cardIcon: '/icons/card.svg',
    shieldIcon: '/icons/shield.svg',
    colors: {
      primary: '#FFCC00',
      secondary: '#D40511'
    }
  },
  fedex: {
    logo: '/logos/fedex.svg',
    darkLogo: '/logos/fedex-dark.svg',
    packageIcon: '/icons/package.svg',
    lockIcon: '/icons/lock.svg',
    clockIcon: '/icons/clock.svg',
    cardIcon: '/icons/card.svg',
    shieldIcon: '/icons/shield.svg',
    colors: {
      primary: '#4D148C',
      secondary: '#FF6600'
    }
  },
  ups: {
    logo: '/logos/ups.svg',
    darkLogo: '/logos/ups-dark.svg',
    packageIcon: '/icons/package.svg',
    lockIcon: '/icons/lock.svg',
    clockIcon: '/icons/clock.svg',
    cardIcon: '/icons/card.svg',
    shieldIcon: '/icons/shield.svg',
    colors: {
      primary: '#351C15',
      secondary: '#FFB500'
    }
  },
  empost: {
    logo: '/logos/empost.svg',
    darkLogo: '/logos/empost-dark.svg',
    packageIcon: '/icons/package.svg',
    lockIcon: '/icons/lock.svg',
    clockIcon: '/icons/clock.svg',
    cardIcon: '/icons/card.svg',
    shieldIcon: '/icons/shield.svg',
    colors: {
      primary: '#C8102E',
      secondary: '#003087'
    }
  },
  smsa: {
    logo: '/logos/smsa.svg',
    darkLogo: '/logos/smsa-dark.svg',
    packageIcon: '/icons/package.svg',
    lockIcon: '/icons/lock.svg',
    clockIcon: '/icons/clock.svg',
    cardIcon: '/icons/card.svg',
    shieldIcon: '/icons/shield.svg',
    colors: {
      primary: '#0066CC',
      secondary: '#FF6600'
    }
  },
  zajil: {
    logo: '/logos/zajil.svg',
    darkLogo: '/logos/zajil-dark.svg',
    packageIcon: '/icons/package.svg',
    lockIcon: '/icons/lock.svg',
    clockIcon: '/icons/clock.svg',
    cardIcon: '/icons/card.svg',
    shieldIcon: '/icons/shield.svg',
    colors: {
      primary: '#1C4587',
      secondary: '#FF9900'
    }
  },
  naqel: {
    logo: '/logos/naqel.svg',
    darkLogo: '/logos/naqel-dark.svg',
    packageIcon: '/icons/package.svg',
    lockIcon: '/icons/lock.svg',
    clockIcon: '/icons/clock.svg',
    cardIcon: '/icons/card.svg',
    shieldIcon: '/icons/shield.svg',
    colors: {
      primary: '#0052A3',
      secondary: '#FF6B00'
    }
  },
  saudipost: {
    logo: '/logos/saudipost.svg',
    darkLogo: '/logos/saudipost-dark.svg',
    packageIcon: '/icons/package.svg',
    lockIcon: '/icons/lock.svg',
    clockIcon: '/icons/clock.svg',
    cardIcon: '/icons/card.svg',
    shieldIcon: '/icons/shield.svg',
    colors: {
      primary: '#006C35',
      secondary: '#FFB81C'
    }
  },
  kwpost: {
    logo: '/logos/kwpost.svg',
    darkLogo: '/logos/kwpost-dark.svg',
    packageIcon: '/icons/package.svg',
    lockIcon: '/icons/lock.svg',
    clockIcon: '/icons/clock.svg',
    cardIcon: '/icons/card.svg',
    shieldIcon: '/icons/shield.svg',
    colors: {
      primary: '#007A33',
      secondary: '#DA291C'
    }
  },
  qpost: {
    logo: '/logos/qpost.svg',
    darkLogo: '/logos/qpost-dark.svg',
    packageIcon: '/icons/package.svg',
    lockIcon: '/icons/lock.svg',
    clockIcon: '/icons/clock.svg',
    cardIcon: '/icons/card.svg',
    shieldIcon: '/icons/shield.svg',
    colors: {
      primary: '#8E1838',
      secondary: '#FFFFFF'
    }
  },
  omanpost: {
    logo: '/logos/omanpost.svg',
    darkLogo: '/logos/omanpost-dark.svg',
    packageIcon: '/icons/package.svg',
    lockIcon: '/icons/lock.svg',
    clockIcon: '/icons/clock.svg',
    cardIcon: '/icons/card.svg',
    shieldIcon: '/icons/shield.svg',
    colors: {
      primary: '#ED1C24',
      secondary: '#009639'
    }
  },
  bahpost: {
    logo: '/logos/bahpost.svg',
    darkLogo: '/logos/bahpost-dark.svg',
    packageIcon: '/icons/package.svg',
    lockIcon: '/icons/lock.svg',
    clockIcon: '/icons/clock.svg',
    cardIcon: '/icons/card.svg',
    shieldIcon: '/icons/shield.svg',
    colors: {
      primary: '#CE1126',
      secondary: '#FFFFFF'
    }
  }
};

export const getServiceBranding = (serviceName: string): ServiceLogo => {
  const key = serviceName.toLowerCase();
  return serviceLogos[key] || serviceLogos.aramex;
};

export default serviceLogos;
