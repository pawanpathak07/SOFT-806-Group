
import { test, expect } from '@playwright/test';

test('WorkflowHub homepage loads', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/WorkflowHub/i);
});
