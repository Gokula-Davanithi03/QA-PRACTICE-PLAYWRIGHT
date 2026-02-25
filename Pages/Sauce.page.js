exports.Login= class Login{

    constructor(page) {
        this.page = page;
        this.username = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.flashMessage = page.locator('.flash');
        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.postalCode = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.finishButton = page.locator('[data-test="finish"]');
    }
    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }
    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password) ;
        await this.loginButton.click();
    }
    async checkout(firstName, lastName, postalCode){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);
        await this.continueButton.click();
    }

}
