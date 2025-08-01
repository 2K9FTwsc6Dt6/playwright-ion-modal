import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.setViewportSize({
    width: 390,
    height: 844
  });

  await page.goto('http://localhost:8100');

  await page.locator('#open-modal').click();

  await page.locator('ion-modal.fully-visible').waitFor();

  // The Ionic Sheet Modal is visible on this screenshot...
  await page.screenshot({ path: 'screenshot.png' });

  // ... but NOT on this one!
  await expect(page).toHaveScreenshot();
});
