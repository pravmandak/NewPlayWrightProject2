class HomePage {

constructor(page) {

this.page = page;

this.LoginButton = page.getByRole('button', { name: 'Login' });
this.welcomeHeaderTxt = page.getByRole('heading', { name: 'Welcome Back' });

this.productButton = page.getByRole('button', { name: 'Products' });
this.AboutButton = page.getByRole('link', { name: 'About' });
this.PricingButton = page.getByRole('link', { name: 'Pricing' });
this.contactButton = page.getByRole('link', { name: 'Contact' });
this.downLoadButton = page.getByRole('link', { name: 'Download' });

this.productExpElement = page.getByRole('heading', { name: 'Products' });
this.AboutExpText = page.getByText('Empowering Global');
this.PricingExpText = page.getByRole('heading', { name: 'Awesome ' });

}

async clickLoginButton(){
  await this.LoginButton.click();
  await expect(this.welcomeHeaderTxt).toBeVisible();

}
async verifytheMenutabs(){
await expect(this.productButton).toBeVisible();
await expect(this.AboutButton).toBeVisible();
await expect(this.PricingButton).toBeVisible();
await expect(this.contactButton).toBeVisible();
await expect(this.downLoadButton).toBeVisible();
}

async verifytheNavigationofMenuTabs(){
    await this.productButton.click();
    await expect(this.productExpElement).toBeVisible();

    await this.AboutButton.click();
    await expect(this.AboutExpText).toBeVisible();

    await this.PricingButton.click();
    await expect(this.PricingExpText).toBeVisible();
}
}