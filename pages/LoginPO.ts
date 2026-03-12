import {Page, Locator, expect} from '@playwright/test';

export class LoginPO {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly message: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.message = page.locator('#flash-messages');
        this.logoutButton = page.getByRole('link', { name: 'Logout' });
    }

    async login(credentials: any, message: string) {
        await this.usernameInput.fill(credentials.username);
        await this.passwordInput.fill(credentials.password);
        await this.loginButton.click();
        await expect(this.message).toContainText(message);
    }

    async logOut(message: string) {
        await this.logoutButton.click();
        await expect(this.message).toContainText(message);
    }
}