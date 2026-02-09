import { expect } from '@wdio/globals'

describe('First app poc', () => {
    it('should filter games by bonus buy-ins', async () => {
        await $('android=new UiSelector().text("Alle spil")').click()
        browser.pause(500)
        await $('android=new UiSelector().text("Alle spil").instance(0)').click()
        await $('android=new UiSelector().text("Filtrér")').click()
        await $('android=new UiSelector().text("Op til 0.50 kr.")').click()
        await $('android=new UiSelector().className("android.widget.Button").instance(2)').click()
        const activeFilters = $('android=new UiSelector().text("1")')
        await expect(activeFilters).toBeDisplayed()
    })
})

