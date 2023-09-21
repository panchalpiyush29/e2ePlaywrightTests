import {defineConfig} from '@playwright/test';
import * as dotenv from "dotenv";

/*specify environment file to be used in the project*/
dotenv.config({path: `.env.test`})

module.exports = defineConfig({
    testDir: './tests',
    fullyParallel: false,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    //workers: 1,
    //retries: 1,
    reporter: 'html',

    use: {
        browserName: 'chromium',
        viewport: {width: 1980, height: 1080},
        headless: true,
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        video: 'retain-on-failure',
        ignoreHTTPSErrors: true,
        permissions: ['geolocation'],
    },
    timeout: 10 * 1000,
    expect: {
        timeout: 10000
    },

    projects: [
        {
            name: process.env.ENV_NAME,
            use: {
                baseURL: process.env.BASE_URL,
            },
        }
    ],
});

