exports.SauceLogin= class SauceLogin{

    constructor(page) {
        // Initialize the page and locators
        this.page = page;
        this.username = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.flashMessage = page.locator('.flash');

        this.backHomeButton = page.locator('[data-test="back-to-products"]');
        this.productLocator = page.locator('[data-test="item-4-img-link"]');
        

        this.addToCartButton=page.locator('[data-test="add-to-cart"]');
        this.shoppingCart=page.locator('[data-test="shopping-cart-link"]');

        this.checkoutButton=page.locator('[data-test="checkout"]');
        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.postalCode = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');

        this.finishButton = page.locator('[data-test="finish"]');
        this.logoutButton = page.locator('[data-test="logout-sidebar-link"]');

       // Filter
        this.filterDropdown = page.locator('[data-test="product-sort-container"]');
        this.filterOption = page.locator('[data-test="product-sort-container"] option');
        this.addToCartOnesie = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');
        // this.filterSelection = page.locator('[data-test="product-sort-container"]');
        // this.filterOption = page.locator('[data-test="product-sort-container"] option');
        // this.filterDropdown = page.locator('[data-test="product-sort-container"]');
        // this.filterOption = page.locator('[data-test="product-sort-container"] option');
        // this.addToCartOnesie = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');

    }

    //Navigate to application
    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }
    //Login
    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
   // Click on the product
    async product() {
            await this.productLocator.click();

    }
    // Click on the add to cart button
    async addToCart() {
            await this.addToCartButton.click();
            await this.shoppingCart.click();
    }
    // Click on the checkout button
    async clickCheckout() {
    
        await this.checkoutButton.click();
    }
    async fillCheckout(firstName, lastName, postalCode) {
    // Fill in the checkout information
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);
        await this.continueButton.click();
    }
    // Click on the finish button
    async finish(){
        await this.finishButton.click();
    }
    async backHome(){
        await this.backHomeButton.click();
    }
    async logout(){
    await this.page.getByRole('button', { name: 'Open Menu' }).click();
    await this.page.locator('[data-test="logout-sidebar-link"]').click();
    }
    //Negative scenarios Filter selection
    async filterSelection(){
        
        await this.page.getByText('Name (A to Z)Name (A to Z)').click();
        await this.page.locator('[data-test="product-sort-container"]').selectOption('lohi');
    }
//     async expectErrorMessage() {

//     await expect(this.flashMessage).toBeVisible();
// }
        


}
    



