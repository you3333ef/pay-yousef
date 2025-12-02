import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { CompanyTheme, getThemeById } from './themeConfig';

interface ThemeContextType {
  theme: CompanyTheme | null;
  setTheme: (companyId: string) => void;
  companyId: string | null;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const generateCSSVariables = (theme: CompanyTheme): React.CSSProperties => {
  return {
    '--color-primary': theme.colors.primary,
    '--color-secondary': theme.colors.secondary,
    '--color-accent': theme.colors.accent || theme.colors.primary,
    '--color-background': theme.colors.background,
    '--color-surface': theme.colors.surface,
    '--color-text': theme.colors.text,
    '--color-text-secondary': theme.colors.textSecondary || '#666666',
    '--color-border': theme.colors.border,
    '--color-button': theme.colors.button,
    '--color-button-hover': theme.colors.buttonHover,
    '--color-button-text': theme.colors.buttonText,
    '--color-input-bg': theme.colors.inputBg,
    '--color-input-border': theme.colors.inputBorder,
    '--color-success': theme.colors.success || '#28A745',
    '--color-warning': theme.colors.warning || '#FFC107',
    '--color-error': theme.colors.error || '#DC3545',
    '--gradient-from': theme.colors.gradientFrom || theme.colors.primary,
    '--gradient-to': theme.colors.gradientTo || theme.colors.secondary,
    '--font-family': theme.fonts.family,
    '--font-size-xs': theme.fonts.sizes.xs,
    '--font-size-sm': theme.fonts.sizes.sm,
    '--font-size-base': theme.fonts.sizes.base,
    '--font-size-lg': theme.fonts.sizes.lg,
    '--font-size-xl': theme.fonts.sizes.xl,
    '--font-size-xxl': theme.fonts.sizes.xxl,
    '--font-size-xxxl': theme.fonts.sizes.xxxl || theme.fonts.sizes.xxl,
    '--font-weight-normal': theme.fonts.weights.normal.toString(),
    '--font-weight-medium': theme.fonts.weights.medium.toString(),
    '--font-weight-semibold': theme.fonts.weights.semibold.toString(),
    '--font-weight-bold': theme.fonts.weights.bold.toString(),
    '--spacing-xs': theme.spacing.xs,
    '--spacing-sm': theme.spacing.sm,
    '--spacing-md': theme.spacing.md,
    '--spacing-lg': theme.spacing.lg,
    '--spacing-xl': theme.spacing.xl,
    '--spacing-xxl': theme.spacing.xxl,
    '--radius-none': theme.borderRadius.none,
    '--radius-sm': theme.borderRadius.sm,
    '--radius-md': theme.borderRadius.md,
    '--radius-lg': theme.borderRadius.lg,
    '--radius-xl': theme.borderRadius.xl,
    '--radius-xxl': theme.borderRadius.xxl || theme.borderRadius.xl,
    '--radius-full': theme.borderRadius.full,
    '--button-shape': theme.style.buttonShape,
    '--form-field': theme.style.formField,
    '--shadow-level': theme.style.shadow,
    '--card-shadow': theme.style.cardShadow || '0 2px 8px rgba(0,0,0,0.08)',
    '--header-height': theme.style.headerHeight || '80px',
    '--card-max-width': theme.style.cardMaxWidth || '560px',
    '--has-gradient': theme.style.hasGradient ? '1' : '0',
    '--gradient-direction': theme.style.gradientDirection || 'horizontal',
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
  const [theme, setCurrentTheme] = React.useState<CompanyTheme | null>(null);
  const [currentCompanyId, setCurrentCompanyId] = React.useState<string | null>(null);

  const setTheme = (newCompanyId: string) => {
    const themeData = getThemeById(newCompanyId);
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
      document.body.setAttribute('data-country', theme.country);
      document.body.setAttribute('data-rtl', theme.localization.rtl ? 'true' : 'false');
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
