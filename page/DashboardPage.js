import {expect} from "@playwright/test";

class DashboardPage {
    constructor(page) {
        this.page = page;
        this.errMsg = "My name is Piyush";
    }

    async verifyShoppingCartIcon() {
        await expect(this.page.locator('#shopping_cart_container a')).toBeVisible();
    }

    async verifySignInErrMsg() {
        await expect(this.page.locator('[data-test="error"]')).toContainText(this.errMsg);
    }
}

module.exports = {DashboardPage}