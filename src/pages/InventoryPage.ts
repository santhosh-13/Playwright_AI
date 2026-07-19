import { Page } from '@playwright/test';
import { BasePage } from './Basepage';

export class InventoryPage extends BasePage {
readonly productsHeading = this.page.getByText('Products', { exact: true });
  constructor(page: Page) {
    super(page);
  }

  async goto(): Promise<void> {
    await this.page.goto('https://www.saucedemo.com/inventory.html');
    await this.waitForReady();
  }
}
