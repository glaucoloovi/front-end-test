import { expect, test } from '@playwright/test'

test('show loading', async ({ page }) => {
  await page.goto('/')

  const skeleton = page.locator('.skeleton').first()
  await expect(skeleton).toBeVisible()
})

test('search filter', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  const search = 'Tesouro'

  await page.getByRole('textbox').fill(search)
  await page.waitForTimeout(1000)

  const incomes = page.locator('.incomes')

  await expect(incomes).toContainText(search)
})
