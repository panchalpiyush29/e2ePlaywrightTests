import {expect, test} from "@playwright/test";


test('fetch user details @api-test @smoke', async ({request}) => {
    const response = await request.get('https://reqres.in/api/users/2');
    expect(response.ok()).toBeTruthy();
    const userDetails = await response.text();
    console.log(userDetails);

    await expect(userDetails).toContain("janet.weaver@reqres.in");
})
