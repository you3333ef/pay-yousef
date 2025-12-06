import { test, expect } from '@playwright/test';
import { SHIPPING_COMPANY_THEMES } from './src/themes/themeConfig';

const companies = Object.keys(SHIPPING_COMPANY_THEMES);

test.describe('Company Theme Verification', () => {
  for (const company of companies) {
    test(`should correctly display the theme for ${company}`, async ({ page }) => {
      await page.goto(`http://localhost:8080/pay/some-id/recipient?company=${company}`);
      await page.waitForTimeout(2000); // Wait for theme to apply
      await page.screenshot({ path: `/home/jules/verification/${company}.png` });
    });
  }
});
