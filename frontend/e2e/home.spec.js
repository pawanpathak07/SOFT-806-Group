
import { test, expect } from '@playwright/test';

test('WorkflowHub application loads successfully', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/WorkflowHub/i);
});

test('Application displays its main content', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('body')).toBeVisible();
});
