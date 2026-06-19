import { test } from '@playwright/test';

test('workshop_1', async ({ page }) => {
  await page.goto('https://dmtryusov.ru/');
  await page.waitForTimeout(5000);
  await page.reload();
});

test.only('Interaction with the page', async ({ page }) => {
  await page.goto('https://about.gitlab.com/');

  await page.click('#onetrust-accept-btn-handler');

  await page.waitForTimeout(3000);
  await page.locator('.navigation__actions').getByRole('link', { name: 'Get free trial' }).click();
  await page.waitForTimeout(5000);
});
