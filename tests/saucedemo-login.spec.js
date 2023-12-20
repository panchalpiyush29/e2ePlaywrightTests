import {test} from "@playwright/test";
import {LoginPage} from "../page/LoginPage";
import {DashboardPage} from "../page/DashboardPage";

const credentials = JSON.parse(JSON.stringify(require("../test_data/login-credentials.json")));
test.describe('Feature : sauce demo login tests @login @smoke', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('/')
    })

    test('Scenario : login with valid credentials', async ({page}) => {
        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);

        await test.step('enter login credentials', async () => {
            await loginPage.performLogin(credentials.username, credentials.password);
        })

        await test.step('verify shopping cart icon is displayed', async () => {
            await dashboardPage.verifyShoppingCartIcon();
        })
    })

    test('Scenario : login with invalid credentials', async ({page}) => {
        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);

        await test.step('enter login credentials', async () => {
            await loginPage.performLogin(credentials.username, "password");
        })

        await test.step('verify shopping cart icon is not displayed', async () => {
            await dashboardPage.verifySignInErrMsg();
        })
    })
})