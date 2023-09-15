class LoginPage {

    constructor(page) {
        this.page = page;
        this.username = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.signInButton = page.locator('[data-test="login-button"]');
    }
    async performLogin(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.signInButton.click();
    }
}

module.exports = {LoginPage}