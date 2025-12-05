import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { ShippingCompany, getCompanyById } from '../lib/shippingCompaniesOfficial';

interface ThemeContextType {
  theme: ShippingCompany | null;
  setTheme: (companyId: string) => void;
  companyId: string | null;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const generateCSSVariables = (theme: ShippingCompany): React.CSSProperties => {
  return {
    '--color-primary': theme.colors.primary,
    '--color-secondary': theme.colors.secondary,
    '--color-accent': theme.colors.accent,
    '--color-background': theme.colors.background,
    '--color-surface': theme.colors.cardBg,
    '--color-text': theme.colors.textPrimary,
    '--color-text-secondary': theme.colors.textSecondary,
    '--color-border': theme.colors.border,
    '--font-family': theme.fontFamily,
    '--gradient': theme.officialColors.gradient,
    '--button-padding': theme.styling?.buttonStyle?.padding,
    '--button-border-radius': theme.styling?.buttonStyle?.borderRadius,
    '--button-font-weight': theme.styling?.buttonStyle?.fontWeight,
    '--button-text-transform': theme.styling?.buttonStyle?.textTransform,
    '--header-height': theme.styling?.headerStyle?.height,
    '--header-padding': theme.styling?.headerStyle?.padding,
    '--header-box-shadow': theme.styling?.headerStyle?.boxShadow,
    '--card-padding': theme.styling?.cardStyle?.padding,
    '--card-border-radius': theme.styling?.cardStyle?.borderRadius,
    '--card-border': theme.styling?.cardStyle?.border,
    '--hero-image': `url(${theme.assets?.heroImage})`,
    '--pattern': `url(${theme.assets?.pattern})`,
    '--icon': `url(${theme.assets?.icon})`,
  } as React.CSSProperties;
};

interface ThemeProviderProps {
  children: ReactNode;
  companyId?: string;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  companyId,
}) => {
  const [theme, setCurrentTheme] = React.useState<ShippingCompany | null>(null);
  const [currentCompanyId, setCurrentCompanyId] = React.useState<string | null>(null);

  const setTheme = (newCompanyId: string) => {
    const themeData = getCompanyById(newCompanyId);
    if (themeData) {
      setCurrentTheme(themeData);
      setCurrentCompanyId(newCompanyId);
      localStorage.setItem('payment-theme-company-id', newCompanyId);
    }
  };

  useEffect(() => {
    const themeId = companyId || localStorage.getItem('payment-theme-company-id');
    if (themeId) {
      setTheme(themeId);
    } else {
      setTheme('aramex');
    }
  }, [companyId]);

  useEffect(() => {
    if (theme) {
      const root = document.documentElement;
      const cssVars = generateCSSVariables(theme);

      Object.entries(cssVars).forEach(([key, value]) => {
        root.style.setProperty(key, value as string);
      });

      document.body.setAttribute('data-theme', theme.id);
    }
  }, [theme]);

  const contextValue: ThemeContextType = {
    theme,
    setTheme,
    companyId: currentCompanyId,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface WithThemeProps {
  companyId: string;
}

export const withTheme = <P extends WithThemeProps>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: P) => {
    const { companyId, ...rest } = props;

    return (
      <ThemeProvider companyId={companyId}>
        <WrappedComponent {...(rest as P)} />
      </ThemeProvider>
    );
  };
};

export default ThemeProvider;
