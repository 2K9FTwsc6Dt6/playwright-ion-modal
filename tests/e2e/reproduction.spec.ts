import { expect, test } from '@playwright/test';

test('unexpected ionic sheet modal screenshot behavior', async ({ page }) => {
  await page.setViewportSize({
    width: 390,
    height: 844
  });

  await page.goto('http://localhost:8100');

  await page.locator('#open-modal').click();

  await page.locator('ion-modal.fully-visible').waitFor();

  // The Ionic Sheet Modal is visible on this Playwright screenshot...
  await page.screenshot({ path: 'screenshot.png' });

  // ... but NOT on this one!
  await expect(page).toHaveScreenshot();

  // This is because of different default values for "animations":
  // PageAssertions "toHaveScreenshot(options)"
  // has a default value of "disabled" for animations, whereas
  // the regular full page screenshot API "screenshot(options)"
  // has a default value of "allow".

  // The Ionic Sheet Modal obviously creates some kind of infinite animation
  // that is canceled to the initial state,
  // as explained in the Playwright documentation,
  // and this way the modal is effectively closed,

  // So adding the option "{ animations: 'allow' }"
  // makes everything work as expected!

  // "await expect(page).toHaveScreenshot({ animations: 'allow' });"
});
