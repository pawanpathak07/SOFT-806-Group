
import { test, expect } from '@playwright/test';

test('Login page displays correctly', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: 'Log in to your workspace' })
  ).toBeVisible();

  await expect(page.getByLabel('Username')).toBeVisible();
  await expect(page.locator('input[type="password"]').first()).toBeVisible();
  await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible();
});

test('User can switch to registration form', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'Create an account' }).click();

  await expect(
    page.getByRole('heading', { name: 'Create your account' })
  ).toBeVisible();

  await expect(page.getByLabel('Username')).toBeVisible();
  await expect(page.getByLabel('Email')).toBeVisible();
  await expect(page.getByLabel('Confirm password')).toBeVisible();
});

test('Registration rejects passwords containing only numbers', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'Create an account' }).click();

  await page.getByLabel('Username').fill('testuser');
  await page.getByLabel('Email').fill('test@example.com');

  await page.locator('input[type="password"]').nth(0).fill('12345678');
  await page.locator('input[type="password"]').nth(1).fill('12345678');

  await page.getByRole('button', { name: 'Create account' }).click();

  await expect(page.getByRole('alert')).toContainText(
    'The password cannot be only numbers.'
  );
});
