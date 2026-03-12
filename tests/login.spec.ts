import { test, expect } from '@playwright/test';
import { LoginPO } from '../pages/LoginPO';
import loginData from '../data/loginData.json';

let loginPO: LoginPO;
let data = loginData;

test.describe('Positive login test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('');
        loginPO = new LoginPO(page);
    });

    test('should login successfully', async ({ page }) => {
        await loginPO.login(data.credentials, data.expectedMessages.success);
    });
    test('should log out successfully', async ({ page }) => {
        await loginPO.login(data.credentials, data.expectedMessages.success);
        await loginPO.logOut(data.expectedMessages.logOut);
    });
});

test.describe('Negative login test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('');
        loginPO = new LoginPO(page);
    });

    test('should not login with invalid credentials', async ({ page }) => {
        await loginPO.login(data.wrongCredentials, data.expectedMessages.empty);
    });
    test('should not login with empty credentials', async ({ page }) => {
        await loginPO.login(data.emptyCredentials, data.expectedMessages.empty);
    });
    test('should not login with empty password', async ({ page }) => {
        await loginPO.login(data.emptyPassword, data.expectedMessages.emptyPassword);
    });
    test('should not login with wrong password', async ({ page }) => {
        await loginPO.login(data.wrongPassword, data.expectedMessages.emptyPassword);
    });
    test('should not login with wrong username', async ({ page }) => {
        await loginPO.login(data.wrongUsername, data.expectedMessages.empty);
    });
});