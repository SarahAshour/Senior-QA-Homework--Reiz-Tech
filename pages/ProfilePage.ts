import { Page } from '@playwright/test';

export class ProfilePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToProfile() {
    await this.page.click('a[href="/profile"]'); 
  }

  async updateAddress(address: string) {
    await this.page.fill('input[name="address"]', address);
  }

  async selectHobby(hobby: string) {
    await this.page.selectOption('select[name="hobby"]', hobby);
  }

  async saveChanges() {
    await this.page.click('button[type="submit"]');
  }

  async isSuccessMessageVisible() {
    return this.page.isVisible('The profile has been saved successfully'); // confirmation
  }
}
