import { test, expect } from '@playwright/test';

test.skip('Automation Form Submissions', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  const newTodo = await page.getByPlaceholder('What needs to be done?');
  // fill the inputs for testing
  await newTodo.fill('Clean room');
  await newTodo.press('Enter');
  await newTodo.fill('JJ Deoe');
  await newTodo.press('Enter');

  await page.waitForTimeout(5000);

  const mark = page.getByTestId('todo-item');
  await mark.nth(0).getByRole('checkbox').click();
  let result1 = await expect(mark.nth(0)).toHaveClass('completed');
  console.log(result1);
  await mark.nth(1).getByRole('checkbox').click();
  await expect(mark.nth(1)).toHaveClass('completed');

  await page.waitForTimeout(5000);
});

test('Handing Form', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  const placeholder = '[placeholder="What needs to be done?"]';
  await page.fill(placeholder, 'Jogn Doe');
  await page.locator(placeholder).press('Enter');
  const checkbox = page.locator('.toggle').nth(0);
  checkbox.click();

  await page.fill(placeholder, 'Jogn Doe2');
  await page.locator(placeholder).press('Enter');
  const checkbox1 = page.locator('.toggle').nth(1);
  checkbox1.click();

  await page.waitForTimeout(5000);
});
